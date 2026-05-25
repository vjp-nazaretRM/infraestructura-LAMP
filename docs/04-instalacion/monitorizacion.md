# MonitorizaciÃ³n del Sistema con Netdata

Para garantizar un mantenimiento proactivo, se ha seleccionado la herramienta **Netdata**, debido a su bajÃ­simo consumo de recursos y capacidad de monitorizaciÃ³n en tiempo real.

## Plan de MonitorizaciÃ³n
1. **MÃ©tricas de CPU y Memoria RAM**: Alerta al superar el 85% de uso continuado.
2. **MÃ©tricas de Almacenamiento**: Alerta cuando el espacio libre sea inferior al 15% del volumen raÃ­z.
3. **Monitoreo de Procesos CrÃ­ticos**: Apache (apache2) y MariaDB (mariadb).