import useAuth from './Hooks/useAuth';
import './App.css';
import AuthRoutes from './Services/Routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const user = useAuth()
  return (
    <Router>
    
        <Routes>
         
          <Route path='/*' element={<AuthRoutes user={user}/>} />
  
          
        </Routes>
      

    </Router>
  );
}

export default App;
