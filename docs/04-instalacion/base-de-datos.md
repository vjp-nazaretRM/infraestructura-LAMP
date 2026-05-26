# Configuracion del Servidor de Base de Datos (MariaDB)

La base de datos relacional almacena la informacion de reservas del portal corporativo y los registros de facturacion interna de la empresa.

## Instalacion y Bastionado

```bash
# Instalar el servidor MariaDB
sudo apt install -y mariadb-server

# Iniciar el servicio y habilitarlo en el arranque
sudo systemctl enable --now mariadb

# Ejecutar el script interactivo de seguridad
sudo mariadb-secure-installation
```

## Estructuracion de Bases de Datos y Privilegios

Se crean dos bases de datos aisladas con usuarios independientes bajo el principio de menor privilegio:

```sql
-- Acceso como root de base de datos
CREATE DATABASE gastrotech_web CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE DATABASE gastrotech_internal CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Usuario para la web de reservas
CREATE USER 'reservas_user'@'localhost' IDENTIFIED BY 'W3bReservas_2026_SecureP@ss';
GRANT SELECT, INSERT, UPDATE, DELETE ON gastrotech_web.* TO 'reservas_user'@'localhost';

-- Usuario para la intranet de facturacion interna
CREATE USER 'billing_user'@'localhost' IDENTIFIED BY 'FacturacionInternal_2026_SecPass';
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP ON gastrotech_internal.* TO 'billing_user'@'localhost';

FLUSH PRIVILEGES;
```