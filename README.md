# ðŸŒ Proyecto de DocumentaciÃ³n: Despliegue de Infraestructura LAMP con HAProxy y MonitorizaciÃ³n

Este repositorio contiene la documentaciÃ³n tÃ©cnica profesional de nivel consultorÃ­a para el despliegue, securizaciÃ³n, monitorizaciÃ³n y recuperaciÃ³n ante desastres de la infraestructura web y de base de datos para la PYME **GastroTech S.L.** (Portal de reservas y sistema de facturaciÃ³n interna).

DiseÃ±ado y documentado colaborativamente por:
- **SofÃ­a Plataforma** (AdministraciÃ³n de Sistemas, Redes y SecurizaciÃ³n)
- **Mateo Operaciones** (Mantenimiento, Resiliencia y MonitorizaciÃ³n)

## ðŸ—ï¸ Arquitectura de la Infraestructura

```mermaid
graph TD
    Client[Clientes / Navegadores] -->|HTTPS: 443 / HTTP: 80| FW[Firewall UFW]
    FW --> LB[HAProxy Balanceador de Carga]
    subgraph Servidores Web Apache
        LB -->|Balanceo Round-Robin: 8080| Web1[Apache + PHP 8.2]
    end
    subgraph Capa de Datos
        Web1 -->|Puerto 3306| DB[(MariaDB Enterprise Server)]
    end
    subgraph MonitorizaciÃ³n y Mantenimiento
        Mon[Netdata Agent] -.->|MÃ©tricas en vivo| Web1
        Mon -.->|MÃ©tricas de base de datos| DB
        Cron[Cron Daemon] -->|Backups Diarios| MysqlDump[mariadb-dump]
        MysqlDump -->|rsync + SSH| RemoteBackup[Servidor Backup Externo]
    end
```

## ðŸ“‚ Estructura del Repositorio

- ðŸ“‹ **[tareas.md](file:///tareas.md)**: TablÃ³n de tareas del equipo (Tablero Kanban).
- ðŸ“ **[CHANGELOG.md](file:///CHANGELOG.md)**: Registro histÃ³rico de versiones y modificaciones.
- âš™ï¸ **[REVISION.md](file:///REVISION.md)**: ReflexiÃ³n sobre el trabajo en equipo, resoluciÃ³n de conflictos Git y rotaciÃ³n de roles.
- ðŸ“– **DocumentaciÃ³n TÃ©cnica (`/docs`)**:
  1. ðŸ” **[01-AnÃ¡lisis de Requisitos](file:///docs/01-analisis.md)**: JustificaciÃ³n tecnolÃ³gica y dimensionamiento.
  2. ðŸ“ **[02-DiseÃ±o de Arquitectura](file:///docs/02-diseno.md)**: Esquemas de red y especificaciÃ³n de versiones de software.
  3. ðŸ“… **[03-PlanificaciÃ³n Temporal](file:///docs/03-planificacion.md)**: Hitos del proyecto (Gantt) y roles.
  4. ðŸ› ï¸ **[04-InstalaciÃ³n y ConfiguraciÃ³n](file:///docs/04-instalacion/)**:
     - ðŸ–¥ï¸ **[Servidor Web & HAProxy](file:///docs/04-instalacion/servidor-web.md)**: Despliegue de Apache, PHP 8.2 y balanceador HAProxy.
     - ðŸ—„ï¸ **[Base de Datos](file:///docs/04-instalacion/base-de-datos.md)**: EstructuraciÃ³n y securizaciÃ³n de MariaDB.
     - ðŸ›¡ï¸ **[SSH & UFW Firewall](file:///docs/04-instalacion/ssh-firewall.md)**: Bastionado del acceso SSH y reglas del cortafuegos.
     - ðŸ“ˆ **[MonitorizaciÃ³n con Netdata](file:///docs/04-instalacion/monitorizacion.md)**: Dashboards de rendimiento y alertas proactivas.
     - ðŸ’¾ **[Copias de Seguridad (Backups)](file:///docs/04-instalacion/backups.md)**: Scripts automatizados y polÃ­ticas de rotaciÃ³n de copias.
  5. ðŸ› ï¸ **[05-GuÃ­a de OperaciÃ³n Diaria](file:///docs/05-operacion.md)**: Tareas de mantenimiento preventivo, auditorÃ­as de logs y soluciÃ³n de problemas.
  6. ðŸš¨ **[06-Plan de RecuperaciÃ³n ante Desastres](file:///docs/06-recuperacion.md)**: GuÃ­a paso a paso ante pÃ©rdida de servicios o corrupciÃ³n de datos.