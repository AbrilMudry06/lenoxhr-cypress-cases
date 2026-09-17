describe("Portal de empleados de LenoxHR", () => {
  beforeEach(() => {
    cy.visit("/mobile");
  });

  it("permite iniciar sesión con credenciales válidas", () => {
    cy.env(["employee_username", "employee_password"]).then(
      ({ employee_username, employee_password }) => {
        // Usamos los placeholders porque los IDs del formulario pueden cambiar dinamicamente.
        cy.get('input[placeholder="nombre@empresa.com"]')
          .should("be.visible")
          .type(employee_username);

        cy.get('input[placeholder="Ingresa tu contraseña"]')
          .should("be.visible")
          .type(employee_password, { log: false });

        cy.get("button.primary-login-button")
          .should("be.enabled")
          .click();

        cy.location("pathname").should("not.include", "/login");
      },
    );
  });
});