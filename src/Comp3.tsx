import * as React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
interface CheckedState {
  [key: string]: boolean;
}

const data = [
  {
    "id": "customer_service",
    "department": "Customer Service",
    "sub_departments": [
      "support",
      "customer_success"
    ]
  },
  {
    "id": "design",
    "department": "Design",
    "sub_departments": [
      "graphic_design",
      "product_design",
      "web_design"
    ]
  }
];

export default function DynamicAccordion() {
  const [checked, setChecked] = React.useState<CheckedState>({});

  const handleDepartmentChange = (event: React.ChangeEvent<HTMLInputElement>, departmentId: string) => {
    const newChecked: CheckedState = { ...checked, [departmentId]: event.target.checked };

    data.find(item => item.id === departmentId)?.sub_departments.forEach(subDepartment => {
      newChecked[subDepartment] = event.target.checked;
    });

    if (departmentId) {
      newChecked[departmentId] = event.target.checked; // Ensure it's a boolean value
    }

    setChecked(newChecked);
  };

  const handleSubDepartmentChange = (event: React.ChangeEvent<HTMLInputElement>, subDepartment: string) => {
    const departmentId = data.find(item => item.sub_departments.includes(subDepartment))?.id;
    const newChecked: CheckedState = { ...checked, [subDepartment]: event.target.checked };

    const isAllSubDepartmentsChecked = departmentId &&
      data.find(item => item.id === departmentId)?.sub_departments.every(subDept => newChecked[subDept]);

    if (departmentId) {
      newChecked[departmentId] = isAllSubDepartmentsChecked ? event.target.checked : false; // Ensure it's a boolean value
    }

    setChecked(newChecked);
  };

  return (
    <div>
      {data.map((departmentData, index) => (
        <Accordion key={index} style={{ backgroundColor: 'lightblue', color: 'Black' , width:"300px"}}>
          <AccordionSummary
           expandIcon={checked[departmentData.id] ? <ExpandLessIcon /> : <ExpandMoreIcon />}>
            <FormControlLabel
              label={departmentData.department}
              control={
                <Checkbox
                  checked={checked[departmentData.id] || false}
                  indeterminate={
                    data.find(item => item.id === departmentData.id)?.sub_departments.some(
                      subDept => checked[subDept]
                    ) &&
                    !data.find(item => item.id === departmentData.id)?.sub_departments.every(
                      subDept => checked[subDept]
                    )
                  }
                  onChange={(event) => handleDepartmentChange(event, departmentData.id)}
                />
              }
            />
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
              {departmentData.sub_departments.map((subDepartment, subIndex) => (
                <FormControlLabel
                  key={subIndex}
                  label={subDepartment}
                  control={
                    <Checkbox
                      checked={checked[subDepartment] || false}
                      onChange={(event) => handleSubDepartmentChange(event, subDepartment)}
                    />
                  }
                />
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
