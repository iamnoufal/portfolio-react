import { Avatar, Box, Container, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

import footerImg from 'assets/images/footer.webp';
import contactData from 'data/contact';
import Footer from './footer';
import Tag from './tag';
import Comment from './comment';
import ScrollFade from './animation/fade';
import { useMediaQuery } from '@mui/material';

const ContactComponent = () => {
  const small = useMediaQuery('(max-width: 600px)');
  const cardWidth = small ? 300 : 250;
  const cardMargin = small ? 8 : 4
  return (
    <Box sx={{ background: `url(${footerImg})`,  width: '100%', backgroundPosition: 'top center' }} id='contact'>
      <Container maxWidth='md' sx={{mt: 4}}>
        <Typography variant='h4' className='text-darkblue lora' textAlign='center' sx={{mb: 3}}><Tag>Contact</Tag></Typography>
        <Comment>Lemme know what you think</Comment>
        <Box sx={{px: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          {contactData.map((list) => {
            return (
              <ScrollFade key={list.name}>
                <ListItem button onClick={() => window.open(`${list.link}`, '_blank')} sx={{mx: 'auto', my: 1, px: Number(`${cardMargin}`), width: Number(`${cardWidth}`)}}>
                  <ListItemAvatar>
                    <Avatar className='bg-darkblue'>
                      {list.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={list.name} secondary={list.text} />
                </ListItem>
              </ScrollFade>
            )
          })}
        </Box>
        <Footer />
      </Container>
    </Box>
  )
}

export default ContactComponent;