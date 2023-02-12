import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';
import CopyRight from './CopyRight';

const Footer = () => {
  return (
    <footer className='section footer'>
      <PageLinks parenClass='footer-links' itemClass='footer-link' />
      <SocialLinks parenClass='footer-icons' itemClass='footer-icon' />
      <CopyRight />
    </footer>
  );
};

export default Footer;
