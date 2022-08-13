import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import learningsData from 'data/learnings';
import Tag from './tag';
import Comment from './comment';
import ScrollFade from './animation/fade';
import { useMediaQuery } from "@mui/material";

const LearningsComponent = () => {
  const small = useMediaQuery('(max-width: 600px)');
  const cardWidth = small ? 140 : 200;
  return (
    <Box sx={{ p:4 }} className='bg-lightblue' id='learnings'>
    {/* <Timeline position={timelinePosition} id='skills'> */}
      <Typography variant='h4' component='div' className="text-darkblue lora" textAlign={'center'} sx={{my:2}}><Tag>Learnings</Tag></Typography>
      <Comment>What we know is the least we can learn</Comment>
      <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {learningsData.map((skill) => {
          const cardMargin = {
            true: skill.full===true ? 1 : 5,
            false: skill.full===true ? 4 : 8,
          }
          return (
            <ScrollFade key={skill.abbr}>
              <Card sx={{ width: Number(`${cardWidth}`), m: 2, display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
                <Box sx={{m:'auto'}}>
                  <Box sx={{ mx: Number(`${cardMargin[small]}`), mt:4 }}>
                    <CardMedia
                      component='img'
                      src={skill.img}
                      alt={skill.abbr}
                    />
                  </Box>
                  <CardContent>
                    <Typography variant='body2' textAlign={'center'} fontWeight="bold">{skill.name}</Typography>
                  </CardContent>
                </Box>
              </Card>
            </ScrollFade>
            // <TimelineItem key={skill.abbr}>
            //   {small && <TimelineOppositeContent sx={{display:'none'}}></TimelineOppositeContent>}
            //   <TimelineSeparator>
            //     <TimelineDot className="bg-darkblue" />
            //     <TimelineConnector className="bg-darkblue" />
            //   </TimelineSeparator>
            //   <TimelineContent>
            //     <Typography variant='h6' sx={{mb:1}}>{skill.year}</Typography>
            //     <Card>
            //       <Box sx={{ mx: Number(`${cardTopMargin}`), mt:4 }}>
            //         <CardMedia
            //           component='img'
            //           src={skill.img}
            //           alt={skill.abbr}
            //         />
            //       </Box>
            //       <CardContent>
            //         <Typography variant='h6' textAlign={'center'}>{skill.name}</Typography>
            //       </CardContent>
            //     </Card>
            //   </TimelineContent>
            // </TimelineItem>
          )
        })}
      </Box>
    {/* </Timeline> */}
    </Box>
  )
}

export default LearningsComponent;