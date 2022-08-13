import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    // {/* <Container maxWidth="md"> */}
      <Box sx={{display: 'flex', width: '100%', pb: 2}}>
        <span style={{width: '50%'}}><Typography variant='caption'>All Rights Reserved<br />v2.0.1 {new Date().getFullYear()}</Typography></span>
        <span style={{width: '50%', textAlign: 'right'}}><Typography variant='caption'>Crafted with care<br />With ReactJS, Material UI</Typography></span>
      </Box>
    // {/* </Container> */}
  )
}

export default Footer;