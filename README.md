# EXPLANATION AND REQUIREMENTS

This project consists of a proof of concept for the automation of GUI tests integrating them with the cypress-axe library in order to verify possible accessibility gaps.

In order to execute those tests is requiered Node.js 12, 14 or above.
Remember to **npm install** in order to get all the requiered dependencies for the project.

This project includes a scenario that consists of browsing through Wikipedia to try to find accessibility defects.

Tests are stored at **cypress\e2e**.

To improve the maintainability of the project every test file will include as less logic as possible. Every kind of logic should be written into support folder. If a functions is going to be repeated multiple times is recommended to store it as a custom command at **support\commands.js**.

Also to improve this maintainability, and because constant data can change in the future. A **constants.js** file has been created on **support** folder.

# EXECUTING TESTS

Tests can be executed headless or GUI.

-   To execute tests in headless mode you can use the commander line to run: **npx cypress run**

-   To execute tests in GUI mode you can use the commander line to open cypress: **npx cypress open**

# GUI MODE

In GUI mode the Cypress application opens.

![alt text](img/1.jpg 'Cypress')

And you can see all the Wikipedia test case.
If you click it, you will execute the automation test and you will be able to see the logs and the execution in real time.

If an accesibility issue is found, the logs will show where and why.

![alt text](img/2.jpg 'Execution of Test Suite')

As seen in the image above, when starting the Wikipedia page we have found two accessibility violations.
One of minor severity and one of serious severity.

If we click on one of the violations, we will be highlighted in which location of the web it is happening.

![alt text](img/3.jpg 'Pointing the error')

Also, if we open the developer console we can see a description of the error as well as a link to the dequeuniversity page with a more detailed description and possible ways to solve the problem.

![alt text](img/4.jpg 'Console')

# HEADLESS MODE

This is the best mode if want to integrate with pipelines since is faster and doesn't requiere a visual interface. This will also generate a video and an html report.

### Example of a test passing fine with some accesibility issues:

![Video of test running](cypress/videos/wikipedia.cy.js.mp4)

# REPORT

At the end of the execution a report will be generated/updated at **reports** folder as an html file.

![alt text](img/5.jpg 'Report')
