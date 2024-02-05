import React, { useState } from "react";
import Generator from "./components/Generator.js";
import Profile from "./components/Profile.js";
import { ROUTES } from "./utilities/routes.js";

function App() {
  const [page, setPage] = useState();
  const [resume, setResume] = useState("Test Resume");
  const [openAIKey, setOpenAIKey] = useState("Test Key");
  switch(page) {
    case ROUTES.GENERATOR:
      return <Generator 
                setPage={setPage} 
              />;

    case ROUTES.PROFILE:
      return <Profile 
                setPage={setPage} 
                resume={resume} 
                setResume={setResume}
                openAIKey={openAIKey}
                setOpenAIKey={setOpenAIKey}
              />;

    default:
      return <Generator 
                setPage={setPage} 
              />;
    }
}

export default App;
