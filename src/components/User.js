//import moment from 'moment';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
//import { Link } from 'react-router-dom';
//import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/User';

const User = ({ nombre, apellido, fecha_nacimiento, _id }) => {
  //let date = moment(createdAt);
  //date = date.format('MMM Do,YYYY');
  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{nombre.charAt(0)}</div>
        <div className='info'>
          <h5>{nombre}</h5>
          <p>{apellido}</p>
          <p>{fecha_nacimiento}</p>
        </div>
      </header>
    </Wrapper>
  );
};

export default User;
