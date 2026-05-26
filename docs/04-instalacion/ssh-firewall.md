# Securizacion de SSH y Configuracion de Firewall (UFW)

Para mitigar intrusiones y proteger los servidores de GastroTech S.L., se aplica una configuracion estricta en el cortafuegos.

## Reglas UFW
- Permitir SSH solo desde IP de la oficina: `ufw allow from 192.168.1.0/24 to any port 22`
- Permitir trafico web: `ufw allow 80/tcp` y `ufw allow 443/tcp`