import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Register />
            </React.Suspense>
          }
        />
        <Route
          path="/dashboard"
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <Dashboard />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
