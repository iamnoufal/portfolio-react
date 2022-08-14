import { 
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from "@mui/lab";
import { Card, CardContent, CardMedia, Typography, useMediaQuery, Box } from "@mui/material";
import { useRef } from "react";
import Tag from "./tag";
import Comment from "./comment";
import ScrollFade from "./animation/fade";
import educationData from "data/education";

const EducationComponent = () => {
  const edu = useRef(null);
  const small = useMediaQuery('(max-width: 600px)');
  return (
    <Box sx={{my: 10}} id='edu'>
      <Timeline position={`${small ? 'right' : 'alternate'}`} ref={edu}>
        <Typography variant='h4' component='div' className="text-darkblue lora" textAlign={'center'} sx={{my:2}}><Tag>Education</Tag></Typography>
        <Comment>Purpose of education is to replace an empty mind with an open one</Comment>
        {educationData.map((edu) => {
          return (
            <TimelineItem key={edu.bgColor}>
              {!small && <TimelineOppositeContent>{edu.cy}</TimelineOppositeContent>}
              {small && <TimelineOppositeContent sx={{display:'none'}} />}
              <TimelineSeparator>
                <TimelineDot className="bg-darkblue" />
                <TimelineConnector className="bg-darkblue" />
              </TimelineSeparator>
              <TimelineContent>
                {small && <Typography variant='caption'>{edu.cy}</Typography>}
                <ScrollFade>
                  <Card sx={{ background: `${edu.bgColor}`, mb: 3, mt: 1, display: `${small ? 'block' : 'flex'}`, flexDirection: `${educationData.indexOf(edu)%2!=0 ? "row-reverse" : "row"}`, alignItems: "center" }}>
                    <CardMedia 
                      component='img' 
                      image={edu.img}
                      sx={{width: `${small ? "100%": "40%"}`}}
                    />
                    <CardContent>
                      <Typography variant='h6' className="text-darkblue">{edu.name}</Typography>
                      <Typography variant='caption'>{edu.degree}</Typography>
                      <Typography variant='body2' sx={{mt:1}}>{edu.caption}</Typography>
                    </CardContent>
                  </Card>
                </ScrollFade>
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </Box>
  )
}

export default EducationComponent;