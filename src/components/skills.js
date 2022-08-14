import { Box, Container, Paper, Typography } from "@mui/material";
import Tag from "./tag";
import skillsData from "data/skills";

const SkillsComponent = () => {
  return (
    <Container maxWidth="md" sx={{py:4}} id="skills">
      <Typography variant="h4" component='div' className="text-darkblue lora" textAlign={'center'} my={2}><Tag>Skills</Tag></Typography>
      <Paper sx={{my: 3}} elevation={0}>
        <Paper sx={{ width: "100%", m: "auto", py: 2, background: "linear-gradient(to left, rgba(1, 136, 145, 0.50) 25%, rgba(1, 136, 145, 0.65) 25%, rgba(1, 136, 145, 0.65) 50%, rgba(1, 136, 145, 0.80) 50%, rgba(1, 136, 145, 0.80) 75%, rgba(1, 136, 145, 1) 75%, rgba(1, 136, 145, 1) 100%)" }}>
          {skillsData.map((skill) => <Box key={skill.name} sx={{width:`${skill.level}`, py:1, my: 3}} className="bg-lightblue"><Typography variant="body2" fontWeight={"bold"} ml={2}>{skill.name}</Typography></Box>)}
          <Box sx={{ display: "flex", justifyContent: "space-evenly"}}>
            <Typography color={"white"} textAlign="center" variant="h6" sx={{ width: "25%" }}>Rookie</Typography>
            <Typography color={"white"} textAlign="center" variant="h6" sx={{ width: "25%" }}>Geek</Typography>
            <Typography color={"white"} textAlign="center" variant="h6" sx={{ width: "25%" }}>Ninja</Typography>
            <Typography color={"white"} textAlign="center" variant="h6" sx={{ width: "25%" }}>Jedi</Typography>
          </Box>
        </Paper>
      </Paper>
    </Container>
  )
}

export default SkillsComponent;