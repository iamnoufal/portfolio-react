import sslcImg from 'assets/images/sslc.webp';
import hscImg from 'assets/images/hsc.webp';
import dsImg from 'assets/images/ds.webp';
import cseImg from 'assets/images/cse.webp';
import TimelineDot from '@mui/lab/TimelineDot';

const educationData = [
  {
    name: 'Government College of Technology Coimbatore',
    caption: 'Diving into the world of Engineering where I get to learn about the fundamentals of Hardware and Software.',
    degree: 'B. E. Computer Science and Engineering',
    img: `${cseImg}`,
    bgColor: '#fefdee',
    year: "2024",
    cy: "2020-2024"
  },
  {
    name: 'Indian Institute of Technology Madras',
    caption: "Getting to know about Data Science and it's applications in different fields in the world.",
    degree: 'B. Sc Data Science and Programming',
    img: `${dsImg}`,
    bgColor: '#ebecee',
    year: <TimelineDot className='bg-darkblue' />,
    cy: "2020-2024"
  },
  {
    name: 'Karur Vetri Vinayaka Matric. Hr. Sec. School, Karur',
    caption: 'Indulged to know about the flora and fauna around us.',
    degree: 'HSC',
    img: `${hscImg}`,
    bgColor: '#fff',
    year: "2020",
    cy: "2018-2020"
  },
  {
    name: 'Cheran Matric. Hr. Sec. School, Vennaimalai, Karur',
    caption: 'The first step in my education path.',
    degree: 'SSLC',
    img: `${sslcImg}`,
    bgColor: '#deedf2',
    year: "2018", 
    cy: "2017-2018"
  },
];

export default educationData;