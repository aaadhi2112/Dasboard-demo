import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dasboard/Dashboard';
import Tables from './Pages/Tables/Tables';
import NFTMarketPlace from './Pages/NFTMarketPlace/NFTMarketPlace';
import Kanban from './Pages/Kanban/Kanban';
import Profile from './Pages/Profile/Profile';
import SignIn from './Pages/SignIn/SignIn';
import Sidebar from './Components/Sidebar/Sidebar';
import BarTop from './Components/BarTop/BarTop';

function App() {


  return (
    <BrowserRouter>
    <Sidebar>
      <BarTop/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/tables' element={<Tables/>}/>
      <Route path='/nftmarketplace' element={<NFTMarketPlace/>}/>
      <Route path='/kanban' element={<Kanban/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/signin' element={<SignIn/>}/>
    </Routes>
    </Sidebar>
    </BrowserRouter>
  );
}

export default App;
