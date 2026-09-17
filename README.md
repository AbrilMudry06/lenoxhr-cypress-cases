# Pruebas E2E de LenoxHR

Proyecto de automatización E2E con Cypress para dos escenarios funcionales de inicio de sesión:

- Plataforma principal: `https://cloud.lenoxhr.com`
- Portal de empleados: `https://cloud.lenoxhr.com/mobile`

## Requisitos

- Node.js instalado.
- npm instalado.

## Instalación

```powershell
npm install
```

## Configuracion de credenciales

1. Copiar `cypress.env.example.json` y renombrar la copia como `cypress.env.json`.
2. Completar `cypress.env.json` con las credenciales de prueba.

El archivo `cypress.env.json` está excluido de Git porque contiene datos sensibles. No debe subirse al repositorio.

## Ejecución

Para abrir Cypress con interfaz gráfica:

```powershell
npm run cy:open
```

Seleccionar **E2E Testing**, elegir un navegador y ejecutar los archivos:

- `cypress/e2e/main-platform.cy.js`
- `cypress/e2e/employee-portal.cy.js`

Para ejecutar las pruebas desde la terminal:

```powershell
npm run cy:run
```
