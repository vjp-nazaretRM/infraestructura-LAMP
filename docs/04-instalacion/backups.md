# Estrategia de Copias de Seguridad (Backups)

La perdida de datos representa el riesgo operacional mas critico para GastroTech S.L. Se define una estrategia basada en la herramienta estandar `mariadb-dump` y la sincronizacion con `rsync`.

## Politica de Backups
- **Copias de Base de Datos**: Diarias automatizadas via `mariadb-dump` a las 02:00h de la manana en una carpeta local `/var/backups/mysql/`.
- **Copias de Ficheros**: Sincronizacion semanal del directorio `/var/www/html` con `rsync` hacia un servidor remoto seguro de copias de seguridad.
- **Rotacion**: Retencion de 7 copias diarias, 4 semanales y 12 mensuales usando un script personalizado de mantenimiento.