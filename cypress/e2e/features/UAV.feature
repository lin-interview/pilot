Feature: UAT tab features
    UAV tab related scenarios

    Scenario Outline: Add UAV to Pilot
        Given the user have successfully sign into the pilot web application
        When the user selects the "UAV" button on the left hand side of the application
        And clicks the Create UAV button on the UAVs tab
        # Can add a duplicate check step before creating a new one
        And enters and selects the following values on the create UAV form
            | Field           | Value             |
            | Nickname        | <Nickname>        |
            | Brand           | <Brand>           |
            | Model           | <Model>           |
            | Weight Category | <Weight Category> |
        And clicks the Save button on the create UAV form
        Then this new UAV should be added successfully
        Examples:
            | Nickname   | Brand | Model      | Weight Category |
            | Test Drone | DJI   | Mavic Mini | Less Than 15 kg |
# | Test Drone | DJI   | Matrice 600 | Less Than 15 kg |

# can add cleanUpCallBack method to delete the test data via API in the after hooks
# or through running purging scripts regularly
