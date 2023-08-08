import AppRoute from "./router/AppRoute";
import "./App.css";
import React, { useState, useEffect } from "react";
import PageLoader from "./components/PageLoader/PageLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <div>
          {" "}
          <AppRoute />
        </div>
      )}
    </>
  );
}

export default App;
