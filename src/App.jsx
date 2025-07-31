import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';

function App() {
  return (
    <div className='text-white'>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
