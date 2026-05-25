# ReflexiÃ³n y RevisiÃ³n Post-Proyecto: GastroTech S.L.

Este documento recoge el anÃ¡lisis y el aprendizaje autocrÃ­tico realizado por la pareja tÃ©cnica (SofÃ­a y Mateo) en el transcurso del despliegue y documentaciÃ³n de la infraestructura LAMP con HAProxy.

---

## ðŸ’¥ AnÃ¡lisis de Conflictos y Resoluciones

Durante el ciclo del proyecto afrontamos dos escenarios de conflicto en el desarrollo de la documentaciÃ³n.

### Caso 1: Conflicto de FusiÃ³n Tradicional (Merge) en `02-diseno.md`
- **Causa**: SofÃ­a actualizÃ³ la tabla a la versiÃ³n Apache 2.4.60 en la rama `feature/actualizar-versiones`, mientras que Mateo, partiendo de una base antigua, actualizÃ³ a Apache 2.4.59 e integrÃ³ una fila para Certbot en `feature/nuevas-tecnologias`.
- **Estrategia**: Usamos `git merge`. Git bloqueÃ³ la fusiÃ³n al detectar cambios incompatibles en las mismas lÃ­neas.
- **ResoluciÃ³n**: Mateo descargÃ³ la versiÃ³n integrada, abriÃ³ el archivo marcando los delimitadores de conflicto, conservÃ³ la versiÃ³n estable de Apache (2.4.60) aportada por SofÃ­a y le aÃ±adiÃ³ la fila del paquete Certbot de su propia autorÃ­a.

### Caso 2: Conflicto con Cambio de Base (Rebase) en `ssh-firewall.md`
- **Causa**: Mateo implementÃ³ una configuraciÃ³n especÃ­fica de puertos y subred en su rama `feature/servidor-web-y-bd`, mientras que SofÃ­a aÃ±adiÃ³ parÃ¡metros por defecto del firewall UFW en la misma secciÃ³n en `feature/guia-operacion`.
- **Estrategia**: Usamos `git rebase` para mantener el historial perfectamente lineal.
- **ResoluciÃ³n**: Al rebasar la rama de SofÃ­a sobre `main` (donde ya se habÃ­a fusionado la rama de Mateo), surgiÃ³ el conflicto. Detuvimos el proceso, editamos manualmente `ssh-firewall.md` combinando ambos mundos (las reglas detalladas de UFW con el bastionado de puerto SSH a 2222 exclusivo de la oficina) y completamos con `git rebase --continue`.

### Comparativa: Git Merge vs. Git Rebase

| Criterio | Git Merge | Git Rebase |
| :--- | :--- | :--- |
| **Estructura del Historial** | Preserva la historia real cronolÃ³gica, incluyendo las ramas bifurcadas con sus ramificaciones. | Crea un historial perfectamente lineal y limpio, aplicando los commits locales al final de la rama base. |
| **ResoluciÃ³n de Conflictos** | Se realiza una Ãºnica vez en un commit especial de merge. | Puede requerir resolver conflictos commit a commit si hay mÃºltiples discrepancias en el Ã¡rbol. |
| **Facilidad de AuditorÃ­a** | Puede volverse confuso en proyectos grandes con cientos de ramificaciones de PRs. | Muy limpio y fÃ¡cil de leer, ideal para seguir la traza lÃ³gica de la evoluciÃ³n de caracterÃ­sticas. |

---

## ðŸ”„ EvaluaciÃ³n del Intercambio Rotativo de Roles

El intercambio de roles a mitad del proyecto (en la SesiÃ³n 3) representÃ³ un hito fundamental para la calidad tÃ©cnica del repositorio:
1. **ComprensiÃ³n HolÃ­stica**: PermitiÃ³ que ambos programadores conociÃ©ramos al detalle toda la arquitectura (Plataforma y Operaciones), rompiendo los silos de conocimiento.
2. **RevisiÃ³n Continua**: Al tomar la documentaciÃ³n del compaÃ±ero, pudimos auditar la claridad de los comandos, detectando errores de sintaxis en los scripts o comandos obsoletos en la instalaciÃ³n de MariaDB.
3. **Consistencia**: AsegurÃ³ que la redacciÃ³n y formato Markdown se mantuviera uniforme y cohesionada en todos los entregables.

---

## ðŸ› ï¸ Comandos Git mÃ¡s Utilizados

Durante las 4 sesiones, los comandos con mayor tasa de uso fueron:
* `git checkout -b <rama>`: Para la rÃ¡pida creaciÃ³n de ramas de caracterÃ­sticas y correcciÃ³n.
* `git pull --rebase origin main`: Clave para mantener las ramas locales perfectamente alineadas antes de abrir Pull Requests.
* `git merge --no-ff`: FusiÃ³n explÃ­cita conservando el nodo de confirmaciÃ³n de la Pull Request para auditorÃ­as de cambios.
* `git status` y `git diff`: Herramientas esenciales de diagnÃ³stico antes de registrar cualquier commit.
* `git tag -a v1.0 -m "..."`: Registro formal del lanzamiento final entregado al cliente GastroTech S.L.