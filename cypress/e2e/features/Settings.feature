Feature: Settings tab features
    Settings tab related scenarios

    Scenario: Verify the links on the Settings tab and sign out
        # Repeated login operations can be logged in through the API to speed up testing
        Given the user have successfully sign into the pilot web application
        When the user selects the "Settings" button on the left hand side of the application
        Then the following links on the Settings tab can be verified and functioning
        And the user can successfully Sign Out
