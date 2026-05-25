# 06. Plan de RecuperaciÃ³n ante Desastres (DRP)

Procedimientos de restauraciÃ³n rÃ¡pidos en caso de fallo crÃ­tico de hardware, intrusiÃ³n informÃ¡tica o pÃ©rdida catastrÃ³fica de informaciÃ³n en GastroTech S.L.

## Procedimiento 1: RestauraciÃ³n de Base de Datos

En caso de corrupciÃ³n de datos en el portal de reservas:

```bash
# 1. Detener el servidor web para evitar escrituras concurrentes
sudo systemctl stop apache2

# 2. Recrear y restaurar la base de datos a partir del Ãºltimo dump
sudo mariadb -u root -p -e "DROP DATABASE gastrotech_web; CREATE DATABASE gastrotech_web;"
sudo mariadb -u root -p gastrotech_web < /var/backups/mysql/gastrotech_web_db_backup.sql

# 3. Reiniciar los servicios
sudo systemctl start apache2
```