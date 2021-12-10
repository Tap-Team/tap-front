import './App.css';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import Top from './Top';
import Issue from './Issue';
import PrivacyPolicy from './PrivacyPolicy';
import Tos from './tos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function TEST(){
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route exact path="/" element={<Top />} />
        <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route exact path="/tos" element={<Tos />}/>
        <Route path="/create" element={<Issue />} />
        <Route path="/main" element={<Main />} />
      </Routes>
      {/* <Tap /> */}
      {/* <Service /> */}
      <Footer />
  </BrowserRouter>
  );
}

//export default App;
export default TEST;