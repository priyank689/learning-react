// import logo from "./logo.svg";
// import logo from "./assets/logo.svg";
import "./App.css";
import Header from "./Components/Header";
import SplitText from "./Components/Header";
//import StickerPeel from './Components/Sticker'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header className="header">
          <img src="logo.png" className="logo" alt="" />
          <h2 className="app-subtitle">its hero time</h2>
        </Header>
        <MoviesGrid></MoviesGrid>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
