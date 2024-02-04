import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I need connect to the reqres endpoint", () => {});

When("I entered credential", (datatable) => {
  datatable.hashes().forEach((element) => {
        cy.request({
        url:'/login',
        failOnStatusCode:element.error,
        method:'POST',
        body:{
            email: element.email,
            password:element.password
        }
        }).as('loginResponse');
    });
});

Then("Validate returns the token", () => {
    cy.get('@loginResponse').then((response) => {
        expect(response.status).to.be.eq(200)
        expect(response.body).to.have.property('token')
        expect(response.body.token).to.be.not.null
    });
});

Then("Invalidate returns the message error", () => {
    cy.get('@loginResponse').then((response) => {
        expect(response.status).to.be.eq(400)
        expect(response.body).to.have.property('error')
        expect(response.body.error).to.eq('user not found')
    });
});