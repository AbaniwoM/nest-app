
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Layout from "./Dashboard/Layout";


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Layout />}></Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>

    </div>
  );
}

export default App;
