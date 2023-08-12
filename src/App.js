
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import PersonalForm from './components/PersonalForm'
import PersonalInformation from './components/PersonalInformation';
import { Route, Routes } from 'react-router-dom';
import Login from './pages';
import Profile from './pages/profile';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/profile' element={<Profile/>}/>
     </Routes>
    </div>
  );
}

export default App;
