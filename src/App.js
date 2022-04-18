import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Error, Landing } from './pages';
import { AllUsers, AddUser, SharedLayout } from './pages/dasboard';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<AllUsers />}></Route>
            <Route path='/add-user' element={<AddUser />} />
          </Route>
          <Route path='/landing' element={<Landing />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
