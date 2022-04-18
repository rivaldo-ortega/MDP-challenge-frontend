import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [
  {
    id: 1,
    text: 'Users',
    path: '/',
    icon: <MdQueryStats />,
  },
  {
    id: 2,
    text: 'Add User',
    path: 'add-user',
    icon: <FaWpforms />,
  },
];

export default links;
