import './App.css';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import Issue from './Issue';
import Top from './Top';

function App() {
  return (
    <div className="App">
      <body>
        <Header />
        <Top />
        <Main />
        <Issue />
        <Footer />
      </body>
    </div>
  );
}

export default App;
