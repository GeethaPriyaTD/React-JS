import react from 'react';
import Dashboard from './Dashboard';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
function App() {
    return(
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
         <Route path="/login" element={<Login/>}/>
         <Route path="/dashboard" element={<ProtectedRoute>
          <Dashboard/>
         </ProtectedRoute>}/>
          
       
      </Routes>
      </BrowserRouter>
    );
}

export default App;