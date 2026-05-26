# Reflexion y Revision Post-Proyecto: GastroTech S.L.

Este documento recoge el analisis y el aprendizaje autocritico realizado por la pareja tecnica (Nazaret y Sergio) en el transcurso del despliegue y documentacion de la infraestructura LAMP con HAProxy.

---

## Analisis de Conflictos y Resoluciones

Durante el ciclo del proyecto afrontamos dos escenarios de conflicto en el desarrollo de la documentacion.

### Caso 1: Conflicto de Fusion Tradicional (Merge) en `02-diseno.md`
- **Causa**: Nazaret actualizo la tabla a la version Apache 2.4.60 en la rama `feature/actualizar-versiones`, mientras que Sergio, partiendo de una base antigua, actualizo a Apache 2.4.59 e integro una fila para Certbot en `feature/nuevas-tecnologias`.
- **Estrategia**: Usamos `git merge`. Git bloqueo la fusion al detectar cambios incompatibles en las mismas lineas.
- **Resolucion**: Sergio descargo la version integrada, abrio el archivo marcando los delimitadores de conflicto, conservo la version estable de Apache (2.4.60) aportada por Nazaret y le anadio la fila del paquete Certbot de su propia autoria.

### Caso 2: Conflicto con Cambio de Base (Rebase) en `ssh-firewall.md`
- **Causa**: Sergio implemento una configuracion especifica de puertos y subred en su rama `feature/servidor-web-y-bd`, mientras que Nazaret anadio parametros por defecto del firewall UFW en la misma seccion en `feature/guia-operacion`.
- **Estrategia**: Usamos `git rebase` para mantener el historial perfectamente lineal.
- **Resolucion**: Al rebasar la rama de Nazaret sobre `main` (donde ya se habia fusionado la rama de Sergio), surgio el conflicto. Detuvimos el proceso, editamos manualmente `ssh-firewall.md` combinando ambos mundos (las reglas detalladas de UFW con el bastionado de puerto SSH a 2222 exclusivo de la oficina) y completamos con `git rebase --continue`.

### Comparativa: Git Merge vs. Git Rebase

| Criterio | Git Merge | Git Rebase |
| :--- | :--- | :--- |
| **Estructura del Historial** | Preserva la historia real cronologica, incluyendo las ramas bifurcadas con sus ramificaciones. | Crea un historial perfectamente lineal y limpio, aplicando los commits locales al final de la rama base. |
| **Resolucion de Conflictos** | Se realiza una unica vez en un commit especial de merge. | Puede requerir resolver conflictos commit a commit si hay multiples discrepancias en el arbol. |
| **Facilidad de Auditoria** | Puede volverse confuso en proyectos grandes con cientos de ramificaciones de PRs. | Muy limpio y facil de leer, ideal para seguir la traza logica de la evolucion de caracteristicas. |

---

## Evaluacion del Intercambio Rotativo de Roles

El intercambio de roles a mitad del proyecto (en la Sesion 3) represento un hito fundamental para la calidad tecnica del repositorio:
1. **Comprension Holistica**: Permitio que ambos programadores conocieramos al detalle toda la arquitectura (Plataforma y Operaciones), rompiendo los silos de conocimiento.
2. **Revision Continua**: Al tomar la documentacion del companero, pudimos auditar la claridad de los comandos, detectando errores de sintaxis en los scripts o comandos obsoletos en la instalacion de MariaDB.
3. **Consistencia**: Aseguro que la redaccion y formato Markdown se mantuviera uniforme y cohesionada en todos los entregables.

---

## Comandos Git mas Utilizados

Durante las 4 sesiones, los comandos con mayor tasa de uso fueron:
* `git checkout -b <rama>`: Para la rapida creacion de ramas de caracteristicas y correccion.
* `git pull --rebase origin main`: Clave para mantener las ramas locales perfectamente alineadas antes de abrir Pull Requests.
* `git merge --no-ff`: Fusion explicita conservando el nodo de confirmacion de la Pull Request para auditorias de cambios.
* `git status` y `git diff`: Herramientas esenciales de diagnostico antes de registrar cualquier commit.
* `git tag -a v1.0 -m "..."`: Registro formal del lanzamiento final entregado al cliente GastroTech S.L.