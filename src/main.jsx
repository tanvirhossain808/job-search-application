import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes.jsx";
import { ToastContainer } from "react-toastify";
import { ErrorBoundary } from "react-error-boundary";
import { FallbackRender } from "./components/FallbackRender/FallbackRender.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={FallbackRender} onReset={(details) => {
    // Reset the state of your app so the error doesn't happen again
  }}>
      <ToastContainer />
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
