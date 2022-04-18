import links from '../utils/links';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, path, id } = link;
        return (
          <NavLink to={path} key={id} className='nav-link'>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
