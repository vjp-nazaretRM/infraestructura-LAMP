# Estrategia de Copias de Seguridad (Backups)

La pÃ©rdida de datos representa el riesgo operacional mÃ¡s crÃ­tico para GastroTech S.L. Se define una estrategia basada en la herramienta estÃ¡ndar `mariadb-dump` y la sincronizaciÃ³n con `rsync`.

## PolÃ­tica de Backups
- **Copias de Base de Datos**: Diarias automatizadas vÃ­a `mariadb-dump` a las 02:00h.
- **Copias de Ficheros**: SincronizaciÃ³n semanal del directorio `/var/www/html` con `rsync`.
- **RotaciÃ³n**: RetenciÃ³n de 7 copias diarias y 4 semanales.