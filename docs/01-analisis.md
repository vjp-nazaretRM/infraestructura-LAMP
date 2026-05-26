# 01. Analisis de Requisitos - GastroTech S.L.

La PYME GastroTech S.L., dedicada a soluciones de software y gestion, requiere establecer una presencia web corporativa estable para la reserva en linea de restaurantes y una aplicacion web interna para el control de facturacion y empleados.

## Requisitos de Negocio
1. **Disponibilidad**: El sitio web de reservas debe estar disponible de forma continua.
2. **Seguridad**: Los datos de facturacion de la aplicacion interna deben protegerse rigurosamente.
3. **Mantenibilidad**: La infraestructura debe documentarse detalladamente para permitir mantenimiento agil.

## Requisitos de Hardware y Software
- **Servidor Fisico/Virtual**: VPS de 2 vCPUs, 4GB RAM y 80GB SSD NVMe.
- **Servidor Web**: Apache HTTP Server sobre Ubuntu Server 22.04.4 LTS.
- **Procesador de Scripts**: PHP 8.2 con extensiones para base de datos (`php-mysql`, `php-gd`, `php-xml`).
- **Base de Datos**: MariaDB Enterprise Server (equivalente a MySQL).
- **Seguridad**: Firewall UFW configurado con politica estricta y SSH securizado.