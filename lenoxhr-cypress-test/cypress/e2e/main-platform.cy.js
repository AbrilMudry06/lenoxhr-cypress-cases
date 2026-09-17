describe("Plataforma principal de LenoxHR", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("permite iniciar sesión con credenciales válidas", () => {
    cy.env(["main_username", "main_password"]).then(
      ({ main_username, main_password }) => {
        cy.get('[data-qa="login-inp-email"]')
          .should("be.visible")
          .type(main_username);

        cy.get('[data-qa="login-inp-pass"]')
          .should("be.visible")
          .type(main_password, { log: false });

        cy.get('[data-qa="login-btn-submit"]')
          .should("be.enabled")
          .click();

        cy.location("pathname").should("not.eq", "/");
      },
    );
  });
});