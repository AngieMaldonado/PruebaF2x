Feature: I want to update a user
    
  Scenario: Update user successfully
    Given I need connect to the reqres endpoint
    When I enter the new name and job
      | name          | job            |
      | morpheus test | zion resident  |   
    Then Validate status user update successful
    And Check response from update service