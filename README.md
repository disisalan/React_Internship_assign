# React Internship Assignment

## Page 1
### Component 1
   * React Form with Formik and Yup Validation
   * Uses Formik for form state management and validation.
   * Applies validation rules using Yup schema.
   * Displays error messages for invalid input.
   * Submits user data to localStorage.
   * Navigates to the next page on successful submission.

Validation Rules:

   * name: Required field, displays an error if empty.
   * phone: Requires numeric input, displays an error for non-numeric characters.
   * email: Requires a valid email format, displays an error for invalid emails.

Navigation (useNavigate):

   * Navigates to the next page (/page2) upon successful form submission.

## Page 2
### Component 2

Data Fetching:

   * Uses the axios library to make an HTTP GET request to retrieve data from the JSONPlaceholder API.
   * Fetches a list of posts represented by the Post interface.

DataGrid (DataGrid Component):

   * Utilizes the Material-UI DataGrid component to display tabular data.
   * Populates the grid with data fetched from the API.

### Component 3
   * Renders an accordion-style UI using Material-UI's Accordion, AccordionSummary, and AccordionDetails components.
   * Utilizes the React useState hook to manage the state for checkboxes.
   * checked state stores the checked status for departments and sub-departments.
   * Ensures that when a department is checked, all its sub-departments are also checked.
   * When only few sub departments are checked , the Department goes to an intermediate stage symbolised by "-".
   * Ensures that when all sub-departments of a department are checked, the department checkbox is also checked.