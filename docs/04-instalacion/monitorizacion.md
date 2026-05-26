# Monitorizacion del Sistema con Netdata

Para garantizar un mantenimiento proactivo, se ha seleccionado la herramienta **Netdata**, debido a su bajisimo consumo de recursos y capacidad de monitorizacion en tiempo real.

## Plan de Monitorizacion
1. **Metricas de CPU y Memoria RAM**: Alerta al superar el 85% de uso continuado por mas de 5 minutos.
2. **Metricas de Almacenamiento**: Alerta cuando el espacio libre sea inferior al 15% del volumen raiz y alerta critica al bajar del 5%.
3. **Monitoreo de Procesos Criticos**: Apache (`apache2`) y MariaDB (`mariadb`).
4. **Sistema de Alertas**: Configuracion de alertas locales de Netdata y envio de correos via SMTP local de postfix.