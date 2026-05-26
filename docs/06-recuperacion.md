# 06. Plan de Recuperacion ante Desastres (DRP)

Procedimientos de restauracion rapidos en caso de fallo critico de hardware, intrusion informatica o perdida catastrofica de informacion en GastroTech S.L.

## Procedimiento 1: Restauracion Completa de Bases de Datos

En caso de corrupcion o perdida de datos en MariaDB:

```bash
# 1. Detener los servidores de aplicacion y balanceador
sudo systemctl stop apache2
sudo systemctl stop haproxy

# 2. Iniciar sesion en el gestor y purgar las bases corruptas
sudo mariadb -u root -p -e "DROP DATABASE IF EXISTS gastrotech_web; CREATE DATABASE gastrotech_web; DROP DATABASE IF EXISTS gastrotech_internal; CREATE DATABASE gastrotech_internal;"

# 3. Restaurar las estructuras y datos desde el ultimo archivo SQL de backup
sudo mariadb -u root -p gastrotech_web < /var/backups/mysql/gastrotech_web_2026-05-25_02-00.sql
sudo mariadb -u root -p gastrotech_internal < /var/backups/mysql/gastrotech_internal_2026-05-25_02-00.sql

# 4. Iniciar y comprobar servicios
sudo systemctl start apache2
sudo systemctl start haproxy
```

## Procedimiento 2: Restauracion de Archivos Web desde Backup Remoto

Si el servidor web sufre una perdida total de datos en `/var/www/html`:

```bash
# Sincronizar de vuelta los datos desde el servidor centralizado de backups
rsync -avz backup_runner@backup-server.consultoria.internal:/backups/web/site/ /var/www/html/

# Corregir los permisos y propietario para Apache
sudo chown -R www-data:www-data /var/www/html/
sudo chmod -R 755 /var/www/html/
```