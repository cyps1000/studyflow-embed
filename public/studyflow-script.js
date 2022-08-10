/**
 * Handles fetching react static assets
 */
function fetchStaticAssets() {
  fetch("http://localhost:3001/studyflow-manifest")
    .then((res) => res.json())
    .then((data) => {
      /**
       * Initializes the empty css and js files array
       */
      let jsFiles = [];
      let cssFiles = [];

      /**
       * Gets the entrypoint file names from the asset manifest
       */
      data.entrypoints.forEach((file) => {
        if (file.includes(".css")) {
          cssFiles.push(file);
        }

        if (file.includes(".js")) {
          jsFiles.push(file);
        }
      });

      /**
       * Creates the script tags
       */
      jsFiles.forEach((file) => {
        let script = document.createElement("script");

        script.src = `https://external.studyflow.nl/v2.0/${file}`;
        document.body.appendChild(script);

        return script;
      });

      /**
       * Creates the link tags
       */
      cssFiles.forEach((file) => {
        let link = document.createElement("link");

        link.rel = "stylesheet";
        link.href = `https://external.studyflow.nl/v2.0/${file}`;
        document.head.appendChild(link);

        return link;
      });
    });
}

/**
 * Handles adding the calculator script
 */
function addCalculatorScript() {
  let script = document.createElement("script");

  script.src = "https://external.studyflow.nl/v2.0/vendor/calculator.js";
  document.body.appendChild(script);
}

/**
 * Handles adding the Tiny mce text editor script
 */
function addTextEditor() {
  let script = document.createElement("script");

  script.referrerPolicy = "origin";
  script.src =
    "https://cdn.tiny.cloud/1/3mpu5nt592c7lxaresrwx8uded39e7jxh2qtftijfmm9ukpr/tinymce/5/tinymce.min.js";
  document.body.appendChild(script);
}

/**
 * Handles adding the WIRIS plugins script
 */
function addWirisPlugins() {
  let script = document.createElement("script");

  script.src =
    "https://www.wiris.net/demo/plugins/app/WIRISplugins.js?viewer=image";
  document.body.appendChild(script);
}

/**
 * Handles adding the material icons stylesheet
 */
function addMaterialIcons() {
  let link = document.createElement("link");

  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
  document.head.appendChild(link);
}

/**
 * Creates the root element for the React App
 */
function createRootElement() {
  let element = document.createElement("div");

  element.setAttribute("id", "studyflow-root");
  document.body.appendChild(element);
}

/**
 * Sets the external platform boolean in local storage
 */
function setIsExternalPlatform() {
  window.localStorage.setItem("isExternalPlatform", JSON.stringify(true));
}

/**
 * Gets the studyflow app
 */
function getStudyflow() {
  setIsExternalPlatform();
  createRootElement();
  addMaterialIcons();
  addTextEditor();
  addWirisPlugins();
  addCalculatorScript();
  fetchStaticAssets();
}

getStudyflow();
