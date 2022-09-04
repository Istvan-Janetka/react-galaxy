import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Training from './pages/Training';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/training' element={<Training />} />
      </Routes>
    </>
  );
}

export default App;
