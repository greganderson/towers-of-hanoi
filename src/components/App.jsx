import { ToastContainer } from "react-toastify";

import "./App.css";

import Game from "./Game";

function App() {

  return (
    <>
      <header>
        <h1>Towers of Hanoi</h1>
        <ToastContainer
          position="top-center"
          autoClose={50000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
          theme="dark"
          transition:Bounce
        />
      </header>
      <Game />
      <footer>
        <p>Created by The Grand Inquisitor</p>
      </footer>
    </>
  );
}

export default App;
