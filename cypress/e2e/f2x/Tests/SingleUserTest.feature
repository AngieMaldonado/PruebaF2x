Feature: I want to query a single user
    
  Scenario: Get an existing user
    Given I need connect to the reqres endpoint
    When I query the endpoint 
      | idUser  |
      | 2       |
    Then Query status
    And Validate user information

  Scenario: Get user not found
    Given I need connect to the reqres endpoint
    When I query the endpoint whit user not found
      | idUser  | 
      | 23      |       
    Then check the status of the query