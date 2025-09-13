import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Teacher from "./pages/Teacher";
import Student from "./pages/Student";
import "./index.css";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
