import Tag from "./tag";
import Comment from "./comment";
import { Container, Typography, Card, CardMedia, ImageList, ImageListItem, ImageListItemBar, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import projectsData from "data/projects";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ArticleIcon from '@mui/icons-material/Article';
import ScrollFade from "./animation/fade";
import {useMediaQuery} from "@mui/material";

const ProjectsComponent = () => {
  const small = useMediaQuery('(max-width: 600px)');
  return (
    <Box sx={{ p:4 }} className='bg-darkblue text-white' id='projects'>
      <Typography variant='h4' component='div' className="lora" textAlign={'center'} sx={{my:2}}><Tag>Projects</Tag></Typography>
      <Comment>Projects are the best ways to practice what we've learnt</Comment>
      <Container maxWidth="md" sx={{overflow: "auto", padding: "0 !important" }}>
        <ImageList style={{height: "70vh", display: "inline-flex", padding: 0, overflow: "hidden", gap: 0}}>
          {projectsData.map((project) => {
            return (
              <ScrollFade key={project.name}>
                <ImageListItem sx={{width: `${small?"80vw":"auto"}`}}>
                  <img 
                    src={project.img}
                    style={{height: "100%", width: `${small ? "100%": "auto"}`}}
                  />
                  <Box sx={{position: "absolute", left: 0, background: "linear-gradient(160deg, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0.6) 93%) ", top: 0, height: "100%", width: "100%" }}>
                    <Typography variant="h5" color={"white"} p={3}>{project.name}</Typography>
                    <Typography variant="body1" color={"white"} px={3}>{project.desc}</Typography>
                  </Box>
                  <Box sx={{position: "absolute", bottom: 0, right: 0}}>
                    <Box sx={{display: "flex"}}>
                      {project.git && <IconButton href={project.git} sx={{m: 2}}><GitHubIcon className="text-white" /></IconButton>}
                      {project.url && <IconButton href={project.url} sx={{m: 2}}><LanguageIcon className="text-white" /></IconButton>}
                      {project.doc && <IconButton href={project.doc} sx={{m: 2}}><ArticleIcon className="text-white" /></IconButton>}
                    </Box>
                  </Box>
                  {/* <ImageListItemBar
                    title={<Typography variant="h6">{project.name}</Typography>}
                    actionIcon={
                      <>
                        {project.git && <IconButton href={project.git}><GitHubIcon className="text-white" /></IconButton>}
                        {project.url && <IconButton href={project.url}><LanguageIcon className="text-white" /></IconButton>}
                        {project.doc && <IconButton href={project.doc}><ArticleIcon className="text-white" /></IconButton>}
                      </>
                    }
                  /> */}
                </ImageListItem>
              </ScrollFade>
            )
          })}
        </ImageList>
      </Container>
    </Box>
  )
}

export default ProjectsComponent;