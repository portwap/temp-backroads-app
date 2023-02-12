import { socialLinks } from '../data';

const SocialLinks = ({ parenClass, itemClass }) => {
  return (
    <ul className={parenClass}>
      {socialLinks.map((link) => {
        const { id, href, icon } = link;
        return (
          <li key={id}>
            <a
              href={href}
              target='_blank'
              rel='noreferrer'
              className={itemClass}
            >
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
