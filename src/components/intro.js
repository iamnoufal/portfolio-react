import { 
  Box, 
  Typography 
} from '@mui/material';
import ScrollFade from './animation/fade';
import Comment from './comment';

const IntroComponent = () => {
  return (
    // <Box sx={{ background: `url(${IntroImg})`, height: '100vh', width: '100%', backgroundPosition: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', height: '80vh', justifyContent: 'center', flexFlow: 'column', textAlign: 'center' }} id='intro'>
        <ScrollFade><Typography variant='h3' component='div' fontWeight={500} className="text-darkblue lora" mb={2}>I'm Noufal Rahman</Typography></ScrollFade>
        <ScrollFade><Typography  variant='h4' component='div' fontStyle={'italic'} className='grandhotel'><Comment>a self-taught web designer and developer</Comment></Typography></ScrollFade>
      </Box>
    // </Box>
  )
}

export default IntroComponent;