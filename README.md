# React_Internship_assign
React Assignment for internship at "GrowMeOrganic"

# Page 1:
    ## Component 1 :

    *Manages user input for name, phone, and email.
    *Uses Formik for form state management and validation.
    *Applies validation rules using Yup schema.
    *Submits user data to localStorage.


    ### Validation Rules:

    *name: Required field, displays an error if empty.
    *phone: Requires numeric input, displays an error for non-numeric characters.
    *email: Requires a valid email format, displays an error for invalid emails.

    ### Navigation (useNavigate):

    *Navigates to the next page (/page2) upon successful form submission.

# Page 2
    ## Component 2 :
    
    *Uses the axios library to make an HTTP GET request to retrieve data from the JSONPlaceholder API.
    *Utilizes the Material-UI DataGrid component to display tabular data.

    ## Component 3 :

    *Renders an accordion-style UI using Material-UI's Accordion, AccordionSummary, and AccordionDetails components.
    *Ensures that when a department is checked, all its sub-departments are also checked.
    *Updates the checked state when a sub-department checkbox is checked or unchecked.
    *There is an Intermediate state of department when only some sub departments are selected sybolised by "-".
    *Ensures that when all sub-departments of a department are checked, the department checkbox is also checked.

