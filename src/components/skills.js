import { Box, Container, Paper, Typography } from "@mui/material";
import Tag from "./tag";
import skillsData from "data/skills";

const SkillsComponent = () => {
  return (
    <Container maxWidth="md" sx={{p:4}}>
      <Typography variant="h4" component='div' className="text-darkblue lora" textAlign={'center'} my={2}><Tag>Skills</Tag></Typography>
      <Paper sx={{my: 3}} elevation={0}>
        <Paper sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', height: "70vh", alignItems: "baseline", width: "100%", m: "auto", background: "linear-gradient(to bottom, rgba(1, 136, 145, 0.50) 25%, rgba(1, 136, 145, 0.60) 25%, rgba(1, 136, 145, 0.60) 50%, rgba(1, 136, 145, 0.75) 50%, rgba(1, 136, 145, 0.75) 75%, rgba(1, 136, 145, 1) 75%, rgba(1, 136, 145, 1) 100%)" }}>
          <Box sx={{ width: "10%", height: "100%" }}>
            <Typography color={"white"} textAlign="center" variant="h6" sx={{ height: "25%", display: "flex", alignItems: "center" }}>Jedi</Typography>
            <Typography color={"white"} textAlign="center" variant="h6" sx={{ height: "25%", display: "flex", alignItems: "center" }}>Ninja</Typography>
            <Typography color={"white"} textAlign="center" variant="h6" sx={{ height: "25%", display: "flex", alignItems: "center" }}>Geek</Typography>
            <Typography color={"white"} textAlign="center" variant="h6" sx={{ height: "25%", display: "flex", alignItems: "center" }}>Rookie</Typography>
          </Box>
          {skillsData.map((skill) => <Box key={skill.name} style={{height:`${skill.level}`, marginTop:"auto", position: "relative", width: "10%"}} className="bg-lightblue"></Box>)}
        </Paper>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', width: "100%" }}>
          <Box sx={{ width:'10%' }}></Box>
          {skillsData.map((skill) => <Typography sx={{ width:'10%' }} textAlign="center" variant="body2" mt={2}>{skill.name}</Typography>)}
        </Box>
      </Paper>
    </Container>
  )
}

export default SkillsComponent;