import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I need connect to the reqres endpoint", () => {});

When("I query the endpoint", (datatable) => {
    datatable.hashes().forEach((element) => {
      cy.request({
          url:'/users/'+ element.idUser,
          method:'GET',
     }).as('userResponse');
   });
  });


When("I query the endpoint whit user not found", (datatable) => {
  datatable.hashes().forEach((element) => {
      cy.request({
          url:'/users/'+ element.idUser,
          failOnStatusCode:false,
          method:'GET',
     }).as('userResponse');
   });
  });

  Then("Query status", () => {
    cy.get('@userResponse').then((response) => {
        expect(response.status).to.be.eq(200)
    });
  });

  Then("Validate user information", () => {
    cy.get('@userResponse').then((response) => {
        expect(response.body.data).to.be.deep.equal({
            id: 2,
            email: "janet.weaver@reqres.in",
            first_name: "Janet",
            last_name: "Weaver",
            avatar: "https://reqres.in/img/faces/2-image.jpg"
          });
          expect(response.body.support).to.be.deep.equal({
            url: "https://reqres.in/#support-heading",
            text: "To keep ReqRes free, contributions towards server costs are appreciated!",
          });
    });
  });

  Then("check the status of the query", () => {
    cy.get('@userResponse').then((response) => {
      expect(response.status).to.be.eq(404)
    });
  });