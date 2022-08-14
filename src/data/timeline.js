import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import ContactPageIcon from '@mui/icons-material/ContactPage'; 
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const timelineData = [
  {
    name: 'About',
    icon: <InfoIcon />,
    param: 'about'
  },
  {
    name: 'Education',
    year: 'Till 2025',
    icon: <SchoolIcon />,
    param: 'edu'
  },
  {
    name: 'Learnings',
    year: 'Since 2016',
    icon: <CodeIcon />,
    param: 'learnings'
  },
  {
    name: 'Skills',
    year: 'All time',
    icon: <SentimentSatisfiedAltIcon />,
    param: 'skills'
  },
  {
    name: 'Projects',
    year: 'Since 2020',
    icon: <DevicesIcon />,
    param: 'projects'
  },
  {
    name: 'Contact',
    year: 'Anytime',
    icon: <ContactPageIcon />,
    param: 'contact'
  }
];

export default timelineData;