import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Routes/Routes";
import { ThemeProvider } from "./UseHooks/UseTheme/Usethem";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-7xl m-auto">
      <ThemeProvider>
        <div className="max-w-7xl m-auto">
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </div>
  </StrictMode>
);
