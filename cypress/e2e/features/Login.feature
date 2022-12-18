Feature: Login feature
    Login related scenarios
    @login
    Scenario: Sign into the AirShare pilot web with the test user
        Given the user navigates to the pilot web application on the browser
        And the user clicks the profile picture to sign in
        # Sensitive information can be encrypted for increased security
        When the user enters the username "airshare.tester@gmail.com", the password "ThisPass1", and clicks on the submit button
        Then the user can successfully sign into the pilot web application
