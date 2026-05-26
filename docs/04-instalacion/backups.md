# Estrategia de Copias de Seguridad (Backups)

La resiliencia operativa y proteccion de la informacion de reservas y facturacion de GastroTech S.L. se basa en un esquema hibrido de backups locales diarios y copias incrementales externas con retencion rotativa.

## Script de Backup Automatizado (`/opt/scripts/backup_pyme.sh`)

Este script realiza la copia consistente de las bases de datos mediante `mariadb-dump` con bloqueos seguros de tablas y sincroniza con `rsync` el repositorio de codigo.

```bash
#!/bin/bash
# Script de Backup GastroTech S.L.
# Guardar en /opt/scripts/backup_pyme.sh

FECHA=$(date +%Y-%m-%d_%H-%M)
DESTINO_LOCAL="/var/backups/mysql"
SERVIDOR_BACKUP="backup-server.consultoria.internal"
USUARIO_BACKUP="backup_runner"
LOG_FILE="/var/log/backup_pyme.log"

# Asegurar directorios
mkdir -p $DESTINO_LOCAL

echo "=== Inicio de Backup: $FECHA ===" >> $LOG_FILE

# 1. Copias de Bases de Datos
mariadb-dump -u root --single-transaction --databases gastrotech_web > $DESTINO_LOCAL/gastrotech_web_$FECHA.sql 2>> $LOG_FILE
mariadb-dump -u root --single-transaction --databases gastrotech_internal > $DESTINO_LOCAL/gastrotech_internal_$FECHA.sql 2>> $LOG_FILE

# 2. Sincronizar directorio web mediante rsync e SSH
rsync -avz --delete /var/www/html/ $USUARIO_BACKUP@$SERVIDOR_BACKUP:/backups/web/site/ 2>> $LOG_FILE

# 3. Rotacion de SQLs locales (conservar ultimos 7 dias)
find $DESTINO_LOCAL -type f -name "*.sql" -mtime +7 -delete

echo "=== Fin de Backup: $(date +%Y-%m-%d_%H-%M) ===" >> $LOG_FILE
```

## Planificacion con Cron Daemon

El script se planifica para ejecutarse de manera desatendida todas las noches a las 02:00 AM.
En `/etc/cron.d/backups_pyme`:

```text
0 2 * * * root /bin/bash /opt/scripts/backup_pyme.sh > /dev/null 2>&1
```