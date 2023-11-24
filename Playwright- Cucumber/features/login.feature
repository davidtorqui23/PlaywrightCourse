Feature: Login action 

    As a user
    I want to login into application

    Scenario: Login with valid credentials
        Given I visit a login page
        When I Fill the login form with valida credentials
        Then I should see the home page

    Scenario Outline: Try to Login with invalid credentials
        Given I visit a login page
        When I fill the login form with "<username>" and "<password>"
        Then I wait for 3 seconds

        Examples:
            | username       |  password | 
            | standard_user  |  123     |
            | problem_user   |  123     | 
            | error_user     |  123     |  