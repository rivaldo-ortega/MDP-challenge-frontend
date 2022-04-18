import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import User from './User';
import Wrapper from '../assets/wrappers/UsersContainer';
const UsersContainer = () => {
  const { getUsers, getAVG, users, isLoading, avg } = useAppContext();

  useEffect(() => {
    getUsers();
    getAVG();
  }, []);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Wrapper>
        {avg.map((data, index) => {
          const { age_avg } = data;
          return (
            <div key={index}>
              <h4>
                <span>Promedio Edad: </span>
                {age_avg.years} años,{age_avg.months} meses,{age_avg.days} dias
              </h4>
            </div>
          );
        })}
        <div className='users'>
          {users.map((user) => {
            return <User key={user.id} {...user} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default UsersContainer;
