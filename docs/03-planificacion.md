# 03. Planificacion Temporal del Proyecto

La planificacion del despliegue se ha disenado para cubrir un ciclo completo de 4 semanas (sesiones), organizando las responsabilidades de forma equitativa.

## Hitos del Proyecto (Diagrama de Gantt)

```mermaid
gantt
    title Despliegue de Infraestructura LAMP y Monitorizacion
    dateFormat  YYYY-MM-DD
    section Fase 1: Analisis y Bases
    Estructura Inicial & README    :done, s1, 2026-05-25, 1d
    Analisis de Requisitos (Sofia) :done, s2, 2026-05-25, 2d
    Estrategias Backups (Mateo)    :done, s3, 2026-05-25, 2d
    section Fase 2: Configuracion
    Instalacion Web y BD (Mateo)  :done, s4, 2026-05-26, 3d
    Fortalecimiento SSH/UFW (Ambos):done, s5, 2026-05-26, 2d
    section Fase 3: Cambio de Alcance
    Documentacion HAProxy (Ambos)  :active, s6, 2026-05-29, 2d
    section Fase 4: Operacion & DRP
    Guia de Mantenimiento (Sofia) :s7, 2026-05-31, 3d
    Plan de Recuperacion (Sofia)  :s8, 2026-05-31, 2d
```

## Roles e Intercambio de Responsabilidades

- **Sesion 1 y 2**:
  - *Documentalista de Plataforma*: **Sofia** (Analisis, Diseno, Servidor Web).
  - *Documentalista de Operaciones*: **Mateo** (Backups, Monitorizacion, CHANGELOG).
- **Sesion 3 y 4 (Intercambio Rotativo)**:
  - *Documentalista de Plataforma*: **Mateo** (Instalacion de servicios, balanceador HAProxy y base de datos).
  - *Documentalista de Operaciones*: **Sofia** (Guias de mantenimiento, DRP y CHANGELOG).