import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/*info*/}
        <div className='info'>
          <h1>
            React&Node <span>Challenge</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iste
            ad debitis consequatur reprehenderit impedit ullam officia voluptate
            perspiciatis eos deleniti atque asperiores sapiente quaerat, modi
            minima ratione quas unde.
          </p>
          <Link to='/all-users' className='btn btn-hero'>
            Enter
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
