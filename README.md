# SGPA Calculator Web App

This web app helps students calculate their Semester Grade Point Average (SGPA) with ease. Enter your subjects, credits, and grades, and the app will automatically compute your SGPA.

## Features

* Add and remove subject entries dynamically.
* Input subject name, credits (number), and grade (letter grade with corresponding points).
* Calculate SGPA based on entered data.
* Displays the calculated SGPA with two decimal places.

## Demo

Try out the live demo of the SGPA Calculator: [SGPA Calculator](https://FaizanAhmed0107.github.io/sgpaCalculator/)

## Usage

1. Open the demo link or the HTML file (`index.html`) in your web browser.
2. Click the "Add Subject" button.
3. Enter the subject name, credits (numerical value), and select the grade (letter) from the dropdown in the newly created subject block.
4. Repeat steps 2 and 3 for all subjects you want to include in the calculation.
5. Click the "Calculate SGPA" button.
6. The calculated SGPA will be displayed under the "Result" section with two decimal places.

## How It Works

The code utilizes JavaScript functions to dynamically manage subject entries and calculate the SGPA.

* `addSubject()`: This function creates a new subject block with input fields for name, credits, and a dropdown for grades.
* `calculateSGPA()`: This function iterates through all subject blocks, extracts credits and grades, performs calculations, and displays the final SGPA on the page.

## Contributing

This is a basic SGPA Calculator and has room for further enhancements, such as:

* Validation for input values (e.g., ensuring credits are positive numbers).
* Displaying individual subject contribution to the SGPA.
* Saving and loading entered data for future calculations.

Feel free to contribute to the project by forking the repository and submitting pull requests with your improvements.
