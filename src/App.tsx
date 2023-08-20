import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './Comp1';
import Page2 from './Comp2';

export default function App() {
    return (
        <>  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>} />
          <Route path="/page2" element={<Page2/>} />
          </Routes>
      </BrowserRouter>
      </>
    );
  };

  