import React from "react";
import "./App.css";
import ContextAllPost from "./ContextStore/AllPostContext";
import ContextAuth from "./ContextStore/AuthContext";
import ContextPost from "./ContextStore/PostContext";
import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <div>
      <ContextAuth>
        <ContextAllPost>
          <ContextPost>
            <MainRoutes />
          </ContextPost>
        </ContextAllPost>
      </ContextAuth>
    </div>
  );
}

export default App;