import { Box, Container, Paper, Typography, useMediaQuery } from "@mui/material";
import EducationComponent from "./education";
import SkillsTimelineComponent from "./learning";

const EducationAndSkillsComponent = () => {
  const small = useMediaQuery('(min-width: 1200px)');
  const boxFlex = small ? 'flex' : 'block';
  const innerBoxWidth = small ? '50%' : '100%';
  return (
    <Container sx={{my: 10}} maxWidth='md'>
      {/* <Typography variant='h4' className="abeezee text-darkblue" width={'100%'} textAlign='center'>Education</Typography> */}
      <Box mx={{ display: `${boxFlex}` }}>
        <Paper sx={{ width: `${innerBoxWidth}`, background: `rgba(0,0,0,0)` }}>
          <EducationComponent />
        </Paper>
        <Paper sx={{ width: `${innerBoxWidth}`, background: `rgba(0,0,0,0)` }}>
          <SkillsTimelineComponent />
        </Paper>
      </Box>
    </Container>
  )
}

export default EducationAndSkillsComponent;