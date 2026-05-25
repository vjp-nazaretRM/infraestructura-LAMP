# 05. GuÃ­a de OperaciÃ³n Diaria y Mantenimiento

Este manual detalla las tareas recurrentes que el equipo de soporte de GastroTech S.L. debe realizar para garantizar el rendimiento Ã³ptimo del servidor.

## Lista de Comprobaciones Diarias (Daily Checklist)
1. **RevisiÃ³n de Servicios**: Confirmar que los demonios `apache2`, `haproxy`, `mariadb` y `netdata` estÃ¡n ejecutÃ¡ndose sin fallos.
2. **RevisiÃ³n de Alertas**: Consultar el panel centralizado de Netdata.
3. **Control de Espacio en Disco**: Verificar almacenamiento remanente con `df -h`.

## Comandos Ãštiles de Mantenimiento de HAProxy

```bash
# Validar la sintaxis del fichero de configuraciÃ³n de HAProxy
sudo haproxy -c -f /etc/haproxy/haproxy.cfg

# Ver las conexiones activas en tiempo real
sudo haproxy -vv

# Reiniciar y recargar HAProxy sin perder conexiones de clientes
sudo systemctl reload haproxy
```