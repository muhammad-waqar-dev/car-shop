import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import RouteComponent from "./Routes";
/**
 * Reusable Button Component
 * @param {string} label - The text label of the button
 * @param {function} onClick - The function to be executed when the button is clicked
 * @param {string} className - Additional class name(s) for styling
 * @returns {JSX.Element} - The rendered button element
 */

function App() {
  return (
    <Router>
      <RouteComponent path={"/"}/>
    </Router>

  );
}

export default App;
