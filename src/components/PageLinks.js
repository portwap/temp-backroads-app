import { pageLinks } from "../data";

const PageLinks = ({parenClass, itemClass}) => {
  return (
    <ul className={parenClass} id={parenClass}>
      {pageLinks.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id}>
            <a href={href} className={itemClass}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
