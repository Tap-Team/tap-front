import './App.css';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import Top from './Top';
import Issue from './Issue';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function TEST(){
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route exact path="/" element={<Top />} />
        <Route path="/create" element={<Issue />} />
        <Route path="/main" element={<Main />} />
      </Routes>
      <Footer />
  </BrowserRouter>
  );
}

//export default App;
export default TEST;