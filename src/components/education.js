import { 
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from "@mui/lab";
import { Card, CardContent, CardMedia, Typography, useMediaQuery, Container } from "@mui/material";
import { useRef } from "react";
import Tag from "./tag";
import Comment from "./comment";
import ScrollFade from "./animation/fade";
import educationData from "data/education";

const EducationComponent = () => {
  const edu = useRef(null);
  const small = useMediaQuery('(max-width: 600px)');
  const timelinePosition = small ? null : 'alternate';
  return (
    <Container sx={{my: 10}} maxWidth='md' id='edu'>
      <Timeline position={timelinePosition} ref={edu}>
        <Typography variant='h4' component='div' className="text-darkblue lora" textAlign={'center'} sx={{my:2}}><Tag>Education</Tag></Typography>
        <Comment>Purpose of education is to replace an empty mind with an open one</Comment>
        {/* {!small && (<TimelineItem>
          <TimelineOppositeContent />
          <TimelineSeparator>
            <TimelineConnector className="bg-darkblue" />
          </TimelineSeparator>
          <TimelineContent />
        </TimelineItem>)} */}
        {educationData.map((edu) => {
          return (
            <TimelineItem key={edu.bgColor}>
              {!small && <TimelineOppositeContent>{edu.cy}</TimelineOppositeContent>}
              {small && <TimelineOppositeContent sx={{display:'none'}} />}
              <TimelineSeparator>
                {/* <TimelineDot sx={{background: 'white', color: 'black' }}> */}
                  {/* {!small && <Typography variant='h6' className="text-darkblue" sx={{m:1}}>{edu.year}</Typography>} */}
                  <TimelineDot className="bg-darkblue" />
                {/* </TimelineDot> */}
                <TimelineConnector className="bg-darkblue" />
              </TimelineSeparator>
              <TimelineContent>
                {small && <Typography variant='caption'>{edu.cy}</Typography>}
                <ScrollFade>
                  <Card sx={{ background: `${edu.bgColor}`, mb: 3, mt: 1 }}>
                    <CardMedia 
                      component='img' 
                      image={edu.img}
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
        {/* {!small && (<TimelineItem>
          <TimelineOppositeContent />
          <TimelineSeparator>
            <Typography variant='h6' className="text-darkblue" sx={{m:1}}>2017</Typography>
            <TimelineConnector className='bg-darkblue' />
          </TimelineSeparator>
          <TimelineContent />
        </TimelineItem>)} */}
      </Timeline>
    </Container>
  )
}

export default EducationComponent;