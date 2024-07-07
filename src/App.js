import AppRoute from "./router/AppRoute";
import "./App.css";
import React, { useState, useEffect } from "react";
import PageLoader from "./components/PageLoader/PageLoader";
import AnimatedCursor from "react-animated-cursor"
import zIndex from "@mui/material/styles/zIndex";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>

{/* <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='51, 153, 255'
      outerAlpha={0.2}
      innerScale={1.7}
      outerScale={5}

      /> */}

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
