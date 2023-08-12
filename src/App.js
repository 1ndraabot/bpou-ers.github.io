import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import LandingPage from './components/landingPage';
import SignUp from './components/signUp';
import LoginPage from './components/loginPage';
import Coba from './components/coba';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/SignUP' element={<SignUp/>} />
        <Route path='/Login' element={<LoginPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
