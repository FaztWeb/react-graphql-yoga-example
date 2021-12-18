import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navigation } from "./components/Navbar";

import "bootswatch/dist/lux/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Routes>
          <Route exact path="/" element={<MessageList />} />
          <Route exact path="/new-message" element={<MessageForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
