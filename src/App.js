import { Routes, Route } from 'react-router-dom';
import './App.css';
import P57 from './page/P57/P57';
import P58 from './page/P58/P58';
import P59 from './page/P59/P59';
import P60 from './page/P60/P60';
import P61 from './page/P61/P61';
import P62 from './page/P62/P62';
import P63 from './page/P63/P63';
import LoginPage from './page/Login/LoginPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/57' element={<P57 />} />
        <Route path='/' element={<LoginPage />} />
        <Route path='/58' element={<P58 />} />
        <Route path='/59' element={<P59 />} />
        <Route path='/60' element={<P60 />} />
        <Route path='/61' element={<P61 />} />
        <Route path='/62' element={<P62 />} />
        <Route path='/63' element={<P63 />} />
      </Routes>
    </div>
  );
}

export default App;
