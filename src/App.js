import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import List from "./components/List";
import Create from "./components/Create";
import Update from "./components/Update";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
