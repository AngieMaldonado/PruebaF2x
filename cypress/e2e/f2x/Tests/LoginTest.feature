Feature: I want to login into the endpoint
    
  Scenario: Login as new sign up user with valid data
    Given I need connect to the reqres endpoint
    When I entered credential
      | email               | password   |error|
      | eve.holt@reqres.in  | cityslicka |not  |
    Then Validate returns the token

  Scenario: Login as new sign up user with invalid data
    Given I need connect to the reqres endpoint
    When I entered credential
      | email                    | password   |error|
      | eveeeeee.holt@reqres.in  | cityslicka |     |
    Then Invalidate returns the message error