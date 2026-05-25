# 05. GuÃ­a de OperaciÃ³n Diaria y Mantenimiento

Este manual detalla las tareas recurrentes que el equipo de soporte de GastroTech S.L. debe realizar para garantizar el rendimiento Ã³ptimo del servidor.

## Lista de Comprobaciones Diarias (Daily Checklist)
1. **RevisiÃ³n de Servicios**: Confirmar que los demonios `apache2`, `mariadb` y `netdata` estÃ¡n ejecutÃ¡ndose sin fallos.
2. **RevisiÃ³n de Alertas**: Consultar el panel centralizado de Netdata.
3. **Control de Espacio en Disco**: Verificar almacenamiento remanente con `df -h`.

## Comandos Ãštiles de AdministraciÃ³n

```bash
# DiagnÃ³stico de estados
sudo systemctl status apache2
sudo systemctl status mariadb

# Comprobar la cola de copias de seguridad automÃ¡ticas
tail -n 20 /var/log/backup_pyme.log
```