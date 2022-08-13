import { useState } from 'react';

import { Avatar, Button, Box, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

import timelineData from 'data/timeline';

const TimelineComponent = () => {
  const [open, setOpen] = useState(false);
  const handleTimelineOpen = () => setOpen(true);
  const handleTimelineClose = (a) => {
    setOpen(false);
    window.scrollTo(0, document.getElementById(a).offsetTop);
  }
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
      <Button variant='contained' className='text-white bg-darkblue' onClick={handleTimelineOpen} sx={{px: 5}}>my timeline</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          <Typography variant='body1' sx={{display: 'flex', alignItems: 'center', mx: 10}}>
            My Timeline
          </Typography>
        </DialogTitle>
        <List sx={{px: 2}}>
          {timelineData.map((list) => {
            return (
              <ListItem button onClick={() => handleTimelineClose(`${list.param}`)} key={list.name}>
                <ListItemAvatar>
                  <Avatar className='bg-darkblue'>
                    {list.icon}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={list.name} secondary={list.year} />
              </ListItem>
            )
          })}
        </List>
      </Dialog>
    </Box>
  )
}

export default TimelineComponent;