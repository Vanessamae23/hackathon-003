import * as React from 'react';
import Button  from '@mui/material/Button';
import { Container } from '@mui/material';


const CustomButton = ({text, type, onClick}) => {
  return (
    <Container>
      <Button onClick={onClick} type="success" variant="contained">
          {text}
      </Button>
    </Container>
   
  )
}

export default CustomButton;
