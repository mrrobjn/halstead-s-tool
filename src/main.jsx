import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FileProvider } from "./context/FileContext.jsx";
import { TabBarProvider } from "./context/TabBarContext.jsx";
import { CalculateProvider } from "./context/CalculateContext.jsx";
import { ReportProvider } from "./context/ReportContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <TabBarProvider>
    <FileProvider>
      <CalculateProvider>
        <ReportProvider>
          <App />
        </ReportProvider>
      </CalculateProvider>
    </FileProvider>
  </TabBarProvider>
  // </React.StrictMode>,
);
