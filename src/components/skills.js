import { Container, Typography } from "@mui/material";
import Tag from "./tag";
// import skillsData from "data/skills";

const SkillsComponent = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component='div' className="text-darkblue lora" textAlign={'center'} sx={{my:2}}><Tag>Skills</Tag></Typography>
      {/* <Bar data={skillsData} /> */}
    </Container>
  )
}

export default SkillsComponent;