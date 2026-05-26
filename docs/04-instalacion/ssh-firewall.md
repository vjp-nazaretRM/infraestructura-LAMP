# Securizacion de SSH y Configuracion de Firewall (UFW)

Para mitigar intrusiones y proteger los servidores de GastroTech S.L., se aplica una configuracion estricta en el cortafuegos, limitando las conexiones entrantes a los puertos minimos esenciales y restringiendo la administracion remota.

## Configuracion de SSH Bastionado (Puerto 2222)

Para mitigar ataques de fuerza bruta en el puerto estandar 22, se reconfigura la administracion al puerto 2222.
En el archivo `/etc/ssh/sshd_config`:

```text
Port 2222
PermitRootLogin no
PubkeyAuthentication yes
PasswordAuthentication no
```

```bash
sudo systemctl restart sshd
```

## Configuracion Completa del Firewall (UFW)

Se define una politica restrictiva por defecto, permitiendo unicamente el trafico de servicios web publicos a cualquier origen, y limitando la administracion SSH exclusivamente a la subred de la oficina.

```bash
# 1. Denegar todo el trafico entrante por defecto y permitir el saliente
sudo ufw default deny incoming
sudo ufw default allow outgoing

# 2. Permitir puertos HTTP y HTTPS estandar de forma publica
sudo ufw allow 80/tcp comment 'HTTP publico'
sudo ufw allow 443/tcp comment 'HTTPS publico'

# 3. Permitir administracion remota SSH (puerto 2222) solo desde la subred interna de la oficina
sudo ufw allow from 192.168.1.0/24 to any port 2222 proto tcp comment 'SSH Oficina restringido'

# 4. Habilitar el firewall y comprobar estado
sudo ufw --force enable
sudo ufw status verbose
```