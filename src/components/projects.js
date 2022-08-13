import Tag from "./tag";
import Comment from "./comment";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const ProjectsComponent = () => {
  return (
    <Box sx={{ p:4 }} className='bg-darkblue text-white' id='learnings'>
    {/* <Timeline position={timelinePosition} id='skills'> */}
      <Typography variant='h4' component='div' className="lora" textAlign={'center'} sx={{my:2}}><Tag>Projects</Tag></Typography>
      <Comment>Projects are the best ways to practice what we've learnt</Comment>
    </Box>
  )
}

export default ProjectsComponent;