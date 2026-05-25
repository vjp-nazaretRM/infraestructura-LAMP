# SecurizaciÃ³n de SSH y ConfiguraciÃ³n de Firewall (UFW)

Para mitigar intrusiones y proteger los servidores de GastroTech S.L., se aplica una configuraciÃ³n estricta en el cortafuegos, limitando las conexiones entrantes a los puertos mÃ­nimos esenciales y restringiendo la administraciÃ³n remota.

## ConfiguraciÃ³n de SSH Bastionado (Puerto 2222)

Para mitigar ataques de fuerza bruta en el puerto estÃ¡ndar 22, se reconfigura la administraciÃ³n al puerto 2222.
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

## ConfiguraciÃ³n Completa del Firewall (UFW)

Se define una polÃ­tica restrictiva por defecto, permitiendo Ãºnicamente el trÃ¡fico de servicios web pÃºblicos a cualquier origen, y limitando la administraciÃ³n SSH exclusivamente a la subred de la oficina.

```bash
# 1. Denegar todo el trÃ¡fico entrante por defecto y permitir el saliente
sudo ufw default deny incoming
sudo ufw default allow outgoing

# 2. Permitir puertos HTTP y HTTPS estÃ¡ndar de forma pÃºblica
sudo ufw allow 80/tcp comment 'HTTP publico'
sudo ufw allow 443/tcp comment 'HTTPS publico'

# 3. Permitir administraciÃ³n remota SSH (puerto 2222) solo desde la subred interna de la oficina
sudo ufw allow from 192.168.1.0/24 to any port 2222 proto tcp comment 'SSH Oficina restringido'

# 4. Habilitar el firewall y comprobar estado
sudo ufw --force enable
sudo ufw status verbose
```