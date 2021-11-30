import './App.css';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import Top from './Top';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//         <Header />
//         <Top />
//         <Main />
//         <Footer />
//     </div>
//   );
// }

function TEST(){
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route exact path="/" element={<Top />} />
        <Route path="/main" element={<Main />} />
      </Routes>
  </BrowserRouter>
  );
}

//export default App;
export default TEST;