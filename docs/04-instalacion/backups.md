# Estrategia de Copias de Seguridad (Backups)

La pÃ©rdida de datos representa el riesgo operacional mÃ¡s crÃ­tico para GastroTech S.L. Se define una estrategia basada en la herramienta estÃ¡ndar `mariadb-dump` y la sincronizaciÃ³n con `rsync`.

## PolÃ­tica de Backups
- **Copias de Base de Datos**: Diarias automatizadas vÃ­a `mariadb-dump` a las 02:00h de la maÃ±ana en una carpeta local `/var/backups/mysql/`.
- **Copias de Ficheros**: SincronizaciÃ³n semanal del directorio `/var/www/html` con `rsync` hacia un servidor remoto seguro de copias de seguridad.
- **RotaciÃ³n**: RetenciÃ³n de 7 copias diarias, 4 semanales y 12 mensuales usando un script personalizado de mantenimiento.