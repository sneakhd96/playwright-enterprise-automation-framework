@manual @ui @login
Feature: User login

  As a registered user
  I want to log in to the application
  So that I can access the secure area

  Background:
    Given the user is on the login page

  Scenario: Successful login with valid credentials
    When the user enters username "practice"
    And the user enters password "SuperSecretPassword!"
    And the user clicks the Login button
    Then the user should be redirected to the secure page
    And the message "You logged into a secure area!" should be displayed
    And the Logout button should be visible

  Scenario: Login fails with an invalid username
    When the user enters username "wrongUser"
    And the user enters password "SuperSecretPassword!"
    And the user clicks the Login button
    Then the message "Your username is invalid!" should be displayed
    And the user should remain on the login page

  Scenario: Login fails with an invalid password
    When the user enters username "practice"
    And the user enters password "WrongPassword"
    And the user clicks the Login button
    Then the message "Your password is invalid!" should be displayed
    And the user should remain on the login page