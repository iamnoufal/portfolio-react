import { Button, Container, Paper, Stack, Typography } from "@mui/material";
import ScrollFade from "./animation/fade";

const AboutComponent = () => {
  return (
    <Container maxWidth='md' id='about'>
      <ScrollFade>
        <Paper w='100' sx={{ background: '#fff', px: 6, py: 3, my: 3 }} elevation={20}>
          <Typography variant="h4" className="lora text-darkblue" sx={{ my: 2 }}>About Me</Typography>
          <Typography variant='body1' component='div' sx={{ mb: 2 }}>It's 2002 since I started feeling the Sun. From then, a little kid has grown up facsinating on how the internet and the web works.</Typography>
          {/* <Typography variant='body1' component='div' sx={{ mb: 2 }}>Back in 2018, completed my tenth grade with good percentage. Inspite of my interest in computer science, I took Biology and managed to complete my high school with flying colours.</Typography> */}
          <Typography variant="body1" component='div' sx={{ mb: 2 }}>It's at my age 16 when I developed a conscience about the future of web development and technologies. Back then, I started learning HTML which is my first step towards my passion. I learnt CSS and JS on the go. Once I had completed high school, I got plenty of time (thanks to covid) I learnt them much deeper, the best practices for development and tried out my so far knowledge in development.</Typography>
          <Typography variant="body1" component='div' sx={{ mb: 2 }}>Today with all the things I need in my hand, I'm efficiently learning and researching much more on the effective working of websites and servers. I believe together we can make the internet a safer place for everyone.</Typography>
          <Typography variant="body1" component='div' sx={{ mb: 2 }}></Typography>
          <Stack spacing={2} direction='row'>
            <Button variant='contained' className='text-darkblue bg-lightblue'>hire me</Button>
            <Button variant='contained' className='text-darkblue bg-lightblue'>see my timeline</Button>
          </Stack>
        </Paper>
      </ScrollFade>
    </Container>
  )
}

export default AboutComponent;