import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import AddUsers from './component/AddUsers/AddUsers';
import UpdateUser from './component/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/add' element={<AddUsers />} />
        <Route path='/update/:id' element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
