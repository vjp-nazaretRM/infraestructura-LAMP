# 03. PlanificaciÃ³n Temporal del Proyecto

La planificaciÃ³n del despliegue se ha diseÃ±ado para cubrir un ciclo completo de 4 semanas (sesiones), organizando las responsabilidades de forma equitativa.

## Hitos del Proyecto (Diagrama de Gantt)

```mermaid
gantt
    title Despliegue de Infraestructura LAMP y MonitorizaciÃ³n
    dateFormat  YYYY-MM-DD
    section Fase 1: AnÃ¡lisis y Bases
    Estructura Inicial & README    :done, s1, 2026-05-25, 1d
    AnÃ¡lisis de Requisitos (SofÃ­a) :done, s2, 2026-05-25, 2d
    Estrategias Backups (Mateo)    :done, s3, 2026-05-25, 2d
    section Fase 2: ConfiguraciÃ³n
    InstalaciÃ³n Web y BD (Mateo)  :active, s4, 2026-05-26, 3d
    Fortalecimiento SSH/UFW (Ambos):active, s5, 2026-05-26, 2d
    section Fase 3: OperaciÃ³n & DRP
    GuÃ­a de Mantenimiento (SofÃ­a) :s6, 2026-05-28, 3d
    Plan de RecuperaciÃ³n (SofÃ­a)  :s7, 2026-05-28, 2d
```

## Roles e Intercambio de Responsabilidades

- **SesiÃ³n 1 y 2**:
  - *Documentalista de Plataforma*: **SofÃ­a** (AnÃ¡lisis, DiseÃ±o, Servidor Web).
  - *Documentalista de Operaciones*: **Mateo** (Backups, MonitorizaciÃ³n, CHANGELOG).
- **SesiÃ³n 3 y 4 (Intercambio Rotativo)**:
  - *Documentalista de Plataforma*: **Mateo** (InstalaciÃ³n de servicios y base de datos).
  - *Documentalista de Operaciones*: **SofÃ­a** (GuÃ­as de mantenimiento, DRP y CHANGELOG).