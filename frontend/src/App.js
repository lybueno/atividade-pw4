import 'index.css'
import Navbar from 'components/Navbar';
import Listing from 'pages/Listing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContatoAdd from 'pages/ContatoAdd';
import ContatoUpdate from 'pages/ContatoUpdate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Listing />} />
          <Route path="contato/add" element={<ContatoAdd />} />
          <Route path="contato/update/:id" element={<ContatoUpdate />} />
          <Route path="contato/delete/:id" element={<Listing />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
