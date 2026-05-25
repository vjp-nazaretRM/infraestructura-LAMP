# Servidor Web Apache y Balanceador HAProxy

Este documento detalla la instalaciÃ³n del servidor HTTP Apache, el entorno PHP y la integraciÃ³n de un balanceador de carga **HAProxy** como proxy inverso y terminador de carga para mayor disponibilidad y seguridad.

## InstalaciÃ³n del Software

```bash
# Instalar Apache y PHP
sudo apt update
sudo apt install -y apache2 php8.2 libapache2-mod-php8.2 php8.2-mysql

# Instalar el balanceador de carga HAProxy
sudo apt install -y haproxy
```

## ConfiguraciÃ³n de HAProxy (/etc/haproxy/haproxy.cfg)

Se configura HAProxy en el puerto pÃºblico 80 para redirigir el trÃ¡fico balanceado hacia el servidor web Apache local (que ahora escucha internamente en el puerto 8080):

```text
global
    log /dev/log local0
    log /dev/log local1 notice
    chroot /var/lib/haproxy
    user haproxy
    group haproxy
    daemon

defaults
    log     global
    mode    http
    option  httplog
    option  dontlognull
    timeout connect 5000
    timeout client  50000
    timeout server  50000

frontend http_front
    bind *:80
    default_backend apache_servers

backend apache_servers
    balance roundrobin
    server apache_local 127.0.0.1:8080 check
```

## ReconfiguraciÃ³n del Puerto en Apache

En `/etc/apache2/ports.conf` modificamos el puerto de escucha a `8080`:

```text
Listen 8080
```

Y en el VirtualHost `/etc/apache2/sites-available/gastrotech.conf` modificamos la cabecera:

```xml
<VirtualHost *:8080>
...
</VirtualHost>
```

```bash
# Reiniciar servicios
sudo systemctl restart apache2
sudo systemctl restart haproxy
```