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
SUCCESS CASES:
<img width="1413" height="805" alt="image" src="https://github.com/user-attachments/assets/6cf05d74-9f1f-487d-afbb-b368bfca40d6" />
<img width="1412" height="794" alt="image" src="https://github.com/user-attachments/assets/e860dd7e-ddbe-4a05-bebe-2e592b8719ae" />

