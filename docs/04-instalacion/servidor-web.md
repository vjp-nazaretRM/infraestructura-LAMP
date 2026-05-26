# Servidor Web Apache + PHP 8.2

Este documento detalla la instalacion del servidor HTTP Apache y el entorno de ejecucion PHP para el portal GastroTech S.L.

## Instalacion del Software

```bash
# Actualizar el indice de paquetes e instalar Apache2
sudo apt update
sudo apt install -y apache2

# Instalar PHP 8.2 y los modulos de integracion requeridos
sudo apt install -y php8.2 libapache2-mod-php8.2 php8.2-mysql php8.2-gd php8.2-xml php8.2-curl
```

## Configuracion del Sitio Virtual (VirtualHost)

El sitio corporativo se servira desde `/var/www/html/gastrotech_web`. Creamos el fichero `/etc/apache2/sites-available/gastrotech.conf`:

```xml
<VirtualHost *:80>
    ServerAdmin sysadmin@gastrotech.com
    ServerName reservas.gastrotech.com
    DocumentRoot /var/www/html/gastrotech_web

    <Directory /var/www/html/gastrotech_web>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/gastrotech_error.log
    CustomLog ${APACHE_LOG_DIR}/gastrotech_access.log combined
</VirtualHost>
```

```bash
# Habilitar el sitio y el modulo rewrite
sudo a2ensite gastrotech.conf
sudo a2enmod rewrite
sudo systemctl restart apache2
```