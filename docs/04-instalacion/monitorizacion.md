# Monitorizacion del Sistema con Netdata

Para garantizar un mantenimiento proactivo y un analisis de rendimiento transparente, se ha seleccionado la herramienta **Netdata**, debido a su bajisimo consumo de recursos (menos de 1% de CPU) y su visualizacion interactiva de metricas en tiempo real.

## Agente Netdata

```bash
# Instalacion a traves del script oficial de bash kickstart
wget -O /tmp/netdata-kickstart.sh https://get.netdata.cloud/kickstart.sh && sh /tmp/netdata-kickstart.sh --non-interactive
```

El agente se iniciara automaticamente y expondra su dashboard interactivo local en el puerto `19999`.

## Canales de Alerta y Notificacion

Se configura el gestor de alarmas de Netdata (`health.d`) para enviar alertas criticas a la consola de administracion y al correo electronico del equipo de guardia ante incidencias de:
- **Consumo de Memoria**: > 90% de RAM utilizada.
- **Rendimiento de Apache**: Tiempo de respuesta medio superior a 1500 ms o incremento subito de errores 5xx.
- **Salud de MariaDB**: Caidas en la tasa de aciertos de cache (*Buffer Pool Hit Rate*) o hilos bloqueados.