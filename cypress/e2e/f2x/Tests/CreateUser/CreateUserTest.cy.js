import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I need connect to the reqres endpoint", () => {});

When("Enter name and job", (datatable) => {
    datatable.hashes().forEach((element) => {
      cy.request({
          url:'/users',
          method:'POST',
          body:{
              name: element.name,
              job:element.job
          }
     }).as('userResponse');
   });
  });

Then("Validate successful user creation", () => {
    cy.get('@userResponse').then((response) => {
        expect(response.status).to.be.eq(201)
    });
});

Then("Check service response", () => {
    cy.get('@userResponse').then((response) => {
        expect(response.body).to.have.property('name')
        expect(response.body).to.have.property('job')
        expect(response.body).to.have.property('id')
        expect(response.body).to.have.property('createdAt')
        expect(response.body.name).to.be.eq('morpheus')
        expect(response.body.job).to.be.eq('leader')
        expect(response.body.id).to.be.not.null
        expect(response.body.createdAt).to.be.not.null

    });
});