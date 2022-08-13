import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOn from '@mui/icons-material/LocationOn';

const contactData = [
  {
    name: 'Karur',
    link: 'https://goo.gl/maps/CZqspVSMvNgxrMFC7',
    text: 'TN, India',
    icon: <LocationOn />
  },
  {
    name: 'Mail',
    link: 'mailto:iam@noufal.me',
    text: 'iam@noufal.me',
    icon: <EmailIcon />
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/noufal-rahman',
    text: 'Noufal Rahman',
    icon: <LinkedInIcon />
  },
  {
    name: 'GitHub',
    link: 'https://github.com/Rahman24',
    text: 'Rahman24',
    icon: <GitHubIcon />
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/noufal0024',
    text: 'noufal0024',
    icon: <TwitterIcon />
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/noufal0024',
    text: 'noufal0024',
    icon: <InstagramIcon />
  },
  {
    name: 'Whatsapp',
    link: 'https://wa.me/+918610023136',
    text: '86100 23136',
    icon: <WhatsAppIcon />
  },
]

export default contactData;