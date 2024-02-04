Feature: I want to create a new user
    
  Scenario: Create new successful user
    Given I need connect to the reqres endpoint
    When Enter name and job
      | name      | job      |
      | morpheus  | leader   |   
    Then Validate successful user creation
    And Check service response