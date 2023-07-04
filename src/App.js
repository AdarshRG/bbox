
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Body from './Body';
import Footer from './Footer';
import Body1 from './Body1';
import Body2 from './Body2';





function App() {
  return (
   <div>
      <Home/>
      <Routes>
      <Route path='' element={<Body/>}/>
      <Route path='body1' element={<Body1/>}/>
      <Route path='body2' element={<Body2/>}/>
      </Routes>
      <Footer/>
   </div>
  );
}

export default App;
