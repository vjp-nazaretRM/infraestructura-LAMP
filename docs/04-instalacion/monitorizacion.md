# MonitorizaciÃ³n del Sistema con Netdata

Para garantizar un mantenimiento proactivo y un anÃ¡lisis de rendimiento transparente, se ha seleccionado la herramienta **Netdata**, debido a su bajÃ­simo consumo de recursos (menos de 1% de CPU) y su visualizaciÃ³n interactiva de mÃ©tricas en tiempo real.

## Agente Netdata

```bash
# InstalaciÃ³n a travÃ©s del script oficial de bash kickstart
wget -O /tmp/netdata-kickstart.sh https://get.netdata.cloud/kickstart.sh && sh /tmp/netdata-kickstart.sh --non-interactive
```

El agente se iniciarÃ¡ automÃ¡ticamente y expondrÃ¡ su dashboard interactivo local en el puerto `19999`.

## Canales de Alerta y NotificaciÃ³n

Se configura el gestor de alarmas de Netdata (`health.d`) para enviar alertas crÃ­ticas a la consola de administraciÃ³n y al correo electrÃ³nico del equipo de guardia ante incidencias de:
- **Consumo de Memoria**: > 90% de RAM utilizada.
- **Rendimiento de Apache**: Tiempo de respuesta medio superior a 1500 ms o incremento sÃºbito de errores 5xx.
- **Salud de MariaDB**: CaÃ­das en la tasa de aciertos de cachÃ© (*Buffer Pool Hit Rate*) o hilos bloqueados.