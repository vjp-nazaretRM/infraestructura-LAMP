# 📐 Proyecto de Documentación: Despliegue de Infraestructura LAMP con HAProxy y Monitorización

Este repositorio contiene la documentación técnica profesional de nivel consultoría para el despliegue, securización, monitorización y recuperación ante desastres de la infraestructura web y de base de datos para la PYME **GastroTech S.L.** (Portal de reservas y sistema de facturación interna).

- Diseñado y documentado colaborativamente por:
- **Nazaret Rabazo MEngual** (Administración de Sistemas, Redes y Securización)
- **Sergio Carpintero Gonzalez** (Mantenimiento, Resiliencia y Monitorización)

## 📊 Arquitectura de la Infraestructura

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
    subgraph Monitorización y Mantenimiento
        Mon[Netdata Agent] -.-|Métricas en vivo| Web1
        Mon -.-|Métricas de base de datos| DB
        Cron[Cron Daemon] -->|Backups Diarios| MysqlDump[mariadb-dump]
        MysqlDump -->|rsync + SSH| RemoteBackup[Servidor Backup Externo]
    end
```

## 📁 Estructura del Repositorio

- 📋 **[tareas.md](tareas.md)**: Tablero de tareas del equipo (Kanban).
- 📜 **[CHANGELOG.md](CHANGELOG.md)**: Registro histórico de versiones y modificaciones.
- 🔎 **[REVISION.md](REVISION.md)**: Reflexión sobre el trabajo en equipo, resolución de conflictos Git y rotación de roles.
- 📚 **Documentación Técnica (`/docs`):**
  1. 📄 **[01-Análisis de Requisitos](docs/01-analisis.md)**: Justificación tecnológica y dimensionamiento.
  2. 🖥️ **[02-Diseño de Arquitectura](docs/02-diseno.md)**: Esquemas de red y especificación de versiones de software.
  3. 📅 **[03-Planificación Temporal](docs/03-planificacion.md)**: Hitos del proyecto (Gantt) y roles.
  4. ⚙️ **[04-Instalación y Configuración](docs/04-instalacion/):**
     - 🖧 **[Servidor Web & HAProxy](docs/04-instalacion/servidor-web.md)**: Despliegue de Apache, PHP 8.2 y balanceador HAProxy.
     - 🗄️ **[Base de Datos](docs/04-instalacion/base-de-datos.md)**: Estructuración y securización de MariaDB.
     - 🔐 **[SSH & UFW Firewall](docs/04-instalacion/ssh-firewall.md)**: Bastionado del acceso SSH y reglas del cortafuegos.
     - 📈 **[Monitorización con Netdata](docs/04-instalacion/monitorizacion.md)**: Dashboards de rendimiento y alertas proactivas.
     - 💾 **[Copias de Seguridad (Backups)](docs/04-instalacion/backups.md)**: Scripts automatizados y políticas de rotación de copias.
  5. 🛠️ **[05-Guía de Operación Diaria](docs/05-operacion.md)**: Tareas de mantenimiento preventivo, auditorías de logs y solución de problemas.
  6. ☁️ **[06-Plan de Recuperación ante Desastres](docs/06-recuperacion.md)**: Guía paso a paso ante pérdida de servicios o corrupción de datos.