import logo from "../logo.svg";

/**
 * Imports hooks
 */
import { useNavigate } from "react-router-dom";

/**
 * Displays the component
 */
export const React: React.FC = () => {
  /**
   * Gets the navigation hook
   */
  const navigate = useNavigate();

  /**
   * Handles going to the Studyflow page
   */
  const goToStudyflow = () => navigate("/v2.0");

  /**
   * Handles going to the help page
   */
  const goToHelp = () => navigate("/help");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          target="_blank"
          className="App-link"
          rel="noopener noreferrer"
          href="https://reactjs.org"
        >
          Learn React
        </a>
        <button onClick={goToHelp}>Help</button>
        <button onClick={goToStudyflow}>Studyflow</button>
      </header>
    </div>
  );
};
