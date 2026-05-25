# 01. AnÃ¡lisis de Requisitos - GastroTech S.L.

La PYME GastroTech S.L., dedicada a soluciones de software y gestiÃ³n, requiere establecer una presencia web corporativa estable para la reserva en lÃ­nea de restaurantes y una aplicaciÃ³n web interna para el control de facturaciÃ³n y empleados.

## Requisitos de Negocio
1. **Disponibilidad**: El sitio web de reservas debe estar disponible de forma continua.
2. **Seguridad**: Los datos de facturaciÃ³n de la aplicaciÃ³n interna deben protegerse rigurosamente.
3. **Mantenibilidad**: La infraestructura debe documentarse detalladamente para permitir mantenimiento Ã¡gil.

## Requisitos de Hardware y Software
- **Servidor FÃ­sico/Virtual**: VPS de 2 vCPUs, 4GB RAM y 80GB SSD NVMe.
- **Servidor Web**: Apache HTTP Server sobre Ubuntu Server 22.04.4 LTS.
- **Procesador de Scripts**: PHP 8.2 con extensiones para base de datos (`php-mysql`, `php-gd`, `php-xml`).
- **Base de Datos**: MariaDB Enterprise Server (equivalente a MySQL).
- **Seguridad**: Firewall UFW configurado con polÃ­tica estricta y SSH securizado.