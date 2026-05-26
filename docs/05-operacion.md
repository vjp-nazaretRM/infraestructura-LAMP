# 05. Guia de Operacion Diaria y Mantenimiento

Este manual detalla las tareas recurrentes que el equipo de soporte de GastroTech S.L. debe realizar para garantizar el rendimiento optimo del servidor.

## Lista de Comprobaciones Diarias (Daily Checklist)
1. **Revision de Servicios**: Confirmar que los demonios `apache2`, `haproxy`, `mariadb` y `netdata` estan ejecutandose sin fallos.
2. **Revision de Alertas**: Consultar el panel centralizado de Netdata.
3. **Control de Espacio en Disco**: Verificar almacenamiento remanente con `df -h`.

## Comandos Utiles de Mantenimiento de HAProxy

```bash
# Validar la sintaxis del fichero de configuracion de HAProxy
sudo haproxy -c -f /etc/haproxy/haproxy.cfg

# Ver las conexiones activas en tiempo real
sudo haproxy -vv

# Reiniciar y recargar HAProxy sin perder conexiones de clientes
sudo systemctl reload haproxy
```