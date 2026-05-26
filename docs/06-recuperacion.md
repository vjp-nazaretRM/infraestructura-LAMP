# 06. Plan de Recuperacion ante Desastres (DRP)

Procedimientos de restauracion rapidos en caso de fallo critico de hardware, intrusion informatica o perdida catastrofica de informacion en GastroTech S.L.

## Procedimiento 1: Restauracion de Base de Datos

En caso de corrupcion de datos en el portal de reservas:

```bash
# 1. Detener el servidor web para evitar escrituras concurrentes
sudo systemctl stop apache2

# 2. Recrear y restaurar la base de datos a partir del ultimo dump
sudo mariadb -u root -p -e "DROP DATABASE gastrotech_web; CREATE DATABASE gastrotech_web;"
sudo mariadb -u root -p gastrotech_web < /var/backups/mysql/gastrotech_web_db_backup.sql

# 3. Reiniciar los servicios
sudo systemctl start apache2
```