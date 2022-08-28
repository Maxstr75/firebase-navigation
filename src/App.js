import "./App.css";
import FormAuth from "./components/FormAuth";
import User from "./components/User";
// import { useContext } from "react";
// import { UserContext } from "./components/UserContext.jsx";
import { Route, Routes } from "react-router-dom";
import PublicRoute from "./components/Routes/PublicRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";

function App() {
  // const { userData } = useContext(UserContext);
  return (
    <div className="App">
      <header className="App-header"></header>
      {/* {userData ? <User /> : <FormAuth />} */}
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute restricted={true}>
              <FormAuth />
            </PublicRoute>
          }
        />
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
