# 05. Guia de Operacion Diaria y Mantenimiento

Este manual detalla las tareas recurrentes que el equipo de soporte de GastroTech S.L. debe realizar para garantizar el rendimiento optimo del servidor.

## Lista de Comprobaciones Diarias (Daily Checklist)
1. **Revision de Servicios**: Confirmar que los demonios `apache2`, `mariadb` y `netdata` estan ejecutandose sin fallos.
2. **Revision de Alertas**: Consultar el panel centralizado de Netdata.
3. **Control de Espacio en Disco**: Verificar almacenamiento remanente con `df -h`.

## Comandos Utiles de Administracion

```bash
# Diagnostico de estados
sudo systemctl status apache2
sudo systemctl status mariadb

# Comprobar la cola de copias de seguridad automaticas
tail -n 20 /var/log/backup_pyme.log
```