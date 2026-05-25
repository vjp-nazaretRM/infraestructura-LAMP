# MonitorizaciÃ³n del Sistema con Netdata

Para garantizar un mantenimiento proactivo, se ha seleccionado la herramienta **Netdata**, debido a su bajÃ­simo consumo de recursos y capacidad de monitorizaciÃ³n en tiempo real.

## Plan de MonitorizaciÃ³n
1. **MÃ©tricas de CPU y Memoria RAM**: Alerta al superar el 85% de uso continuado por mÃ¡s de 5 minutos.
2. **MÃ©tricas de Almacenamiento**: Alerta cuando el espacio libre sea inferior al 15% del volumen raÃ­z y alerta crÃ­tica al bajar del 5%.
3. **Monitoreo de Procesos CrÃ­ticos**: Apache (`apache2`) y MariaDB (`mariadb`).
4. **Sistema de Alertas**: ConfiguraciÃ³n de alertas locales de Netdata y envÃ­o de correos vÃ­a SMTP local de postfix.