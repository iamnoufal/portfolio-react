import timelineData from 'data/timeline';
import TimelineIcon from '@mui/icons-material/Timeline';
import { useState } from "react";
import { Box, Backdrop, SpeedDial, SpeedDialAction } from "@mui/material";

const TimelineSpeedDialComponent = () => {
  const [open, setOpen] = useState(false);
  const [showSD, setShowSD] = useState(false);
  const handleTimelineOpen = () => setOpen(true);
  const handleTimelineClose = (a) => {
    setOpen(false);
    window.scrollTo(0, document.getElementById(a).offsetTop);
  }
  window.onscroll = () => {
    window.pageYOffset > document.getElementById('about').offsetTop-1 ? setShowSD(true) : setShowSD(false);
    window.pageYOffset > document.getElementById('about').offsetTop-1 ? document.querySelector(".MuiSpeedDial-fab").classList.add('bg-darkblue') : console.log();
  }
  return (
    <Box>
      {showSD && (<Box sx={{ height: '100vh', transform: 'translateZ(0px)', flexGrow: 1, position: 'fixed', bottom: 0, right: 0, zIndex: 1 }}>
        <Backdrop open={open} />
        <SpeedDial
          ariaLabel="Timeline Speeddail"
          sx={{ position: 'absolute', bottom: 16, right: 16, color: '#018891' }}
          icon={<TimelineIcon />}
          onClose={() => {setOpen(false)}}
          onOpen={handleTimelineOpen}
          open={open}
        >
          {timelineData.reverse().map((list) => <SpeedDialAction key={list.name} icon={list.icon} tooltipTitle={list.name} tooltipOpen onClick={() => handleTimelineClose(`${list.param}`)} />)}
        </SpeedDial>
      </Box>)}
    </Box>
  )
}

export default TimelineSpeedDialComponent;