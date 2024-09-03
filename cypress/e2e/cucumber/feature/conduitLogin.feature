Feature: Conduit Login Functionality

  Scenario: Login and Logout with Valid Credentials
    Given User is on the login page
    When User login with valid credentials
    |email                    | password |
    |technicalquiz24@gmail.com| JaiGurudev2010#|
    And User click on the settings button
    And User click on the logout button
    Then User should be routed back to login page
