# 06. Plan de RecuperaciÃ³n ante Desastres (DRP)

Procedimientos de restauraciÃ³n rÃ¡pidos en caso de fallo crÃ­tico de hardware, intrusiÃ³n informÃ¡tica o pÃ©rdida catastrÃ³fica de informaciÃ³n en GastroTech S.L.

## Procedimiento 1: RestauraciÃ³n Completa de Bases de Datos

En caso de corrupciÃ³n o pÃ©rdida de datos en MariaDB:

```bash
# 1. Detener los servidores de aplicaciÃ³n y balanceador
sudo systemctl stop apache2
sudo systemctl stop haproxy

# 2. Iniciar sesiÃ³n en el gestor y purgar las bases corruptas
sudo mariadb -u root -p -e "DROP DATABASE IF EXISTS gastrotech_web; CREATE DATABASE gastrotech_web; DROP DATABASE IF EXISTS gastrotech_internal; CREATE DATABASE gastrotech_internal;"

# 3. Restaurar las estructuras y datos desde el Ãºltimo archivo SQL de backup
sudo mariadb -u root -p gastrotech_web < /var/backups/mysql/gastrotech_web_2026-05-25_02-00.sql
sudo mariadb -u root -p gastrotech_internal < /var/backups/mysql/gastrotech_internal_2026-05-25_02-00.sql

# 4. Iniciar y comprobar servicios
sudo systemctl start apache2
sudo systemctl start haproxy
```

## Procedimiento 2: RestauraciÃ³n de Archivos Web desde Backup Remoto

Si el servidor web sufre una pÃ©rdida total de datos en `/var/www/html`:

```bash
# Sincronizar de vuelta los datos desde el servidor centralizado de backups
rsync -avz backup_runner@backup-server.consultoria.internal:/backups/web/site/ /var/www/html/

# Corregir los permisos y propietario para Apache
sudo chown -R www-data:www-data /var/www/html/
sudo chmod -R 755 /var/www/html/
```