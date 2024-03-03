import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
