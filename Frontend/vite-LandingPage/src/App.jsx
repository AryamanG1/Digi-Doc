import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Option from './components/Option';
import Login from './components/Login';
import LoginDoc from './components/LoginDoc';
import Doctor from './components/Doctor';
import Patient from './components/Patient'; // Import the Patient component
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/option" element={<Option />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logindoc" element={<LoginDoc />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patient" element={<Patient />} /> 
        <Route path="/chatbot" element={<Chatbot />} />{/* Add route for Patient component */}
      </Routes>
    </Router>
  );
}

export default App;
