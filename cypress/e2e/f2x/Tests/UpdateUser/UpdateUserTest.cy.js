import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I need connect to the reqres endpoint", () => {});

When("I enter the new name and job", (datatable) => {
    datatable.hashes().forEach((element) => {
      cy.request({
          url:'/users/2',
          method:'PUT',
          body:{
              name: element.name,
              job:element.job
          }
     }).as('userResponse');
   });
  });

  Then("Validate status user update successful", () => {
    cy.get('@userResponse').then((response) => {
        expect(response.status).to.be.eq(200)
    });

    Then("Check response from update service", () => {
        cy.get('@userResponse').then((response) => {
            expect(response.body).to.have.property('name')
            expect(response.body).to.have.property('job')
            expect(response.body).to.have.property('updatedAt')
            expect(response.body.name).to.be.eq('morpheus test')
            expect(response.body.job).to.be.eq('zion resident')
            expect(response.body.updatedAt).to.be.not.null
    
        });
    });
});