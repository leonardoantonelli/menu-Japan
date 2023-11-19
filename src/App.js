import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mynavbar from "./component/Mynavbar";
import MyHome from "./component/MyHome";
import Mylist from "./component/Mylist.jsx";
import MyStore from "./component/MyStore.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./scss/Mycolor.scss";
import Mycartpage from "./component/Mycartpage.jsx";
function App() {
  return (
    <>
      {" "}
      <Mynavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/menu-Japan" element={<MyHome />} />
          <Route path="/store" element={<MyStore />} />
          <Route path="/cart" element={<Mycartpage />} />
          <Route path="/contatti" element={<Mycartpage />} />
        </Routes>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
