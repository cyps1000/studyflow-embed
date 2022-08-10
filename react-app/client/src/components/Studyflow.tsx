import { useEffect } from "react";

/**
 * Displays the component
 */
export const Studyflow: React.FC = () => {
  /**
   * Other logic goes here
   */

  /**
   * Creates the script tag
   */
  useEffect(() => {
    /**
     * Gets the studyflow script tag
     */
    const studyflowScript = document.getElementById("studyflow-script");

    /**
     * Creates a script tag for the react app
     */
    if (!studyflowScript) {
      let script = document.createElement("script");

      script.src = "http://localhost:3001/studyflow-script.js";
      script.id = "studyflow-script";
      document.body.appendChild(script);
    }
  }, []);

  return null;
};
