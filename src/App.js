import React, { useState, useEffect } from "react";
import Generator from "./components/Generator.js";
import Profile from "./components/Profile.js";
import { loadData } from "./utilities/localStorage.js";
import { ROUTES } from "./utilities/routes.js";

function App() {
  const [page, setPage] = useState();
  const [resume, setResume] = useState("Test Resume");
  const [openAIKey, setOpenAIKey] = useState("Test Key");

  useEffect(() => {
    const fetchLocalData = async () => {
      const fetchedResume = await loadData("resume");
      const fetchedOpenAIKey = await loadData("openAIKey");

      setResume(fetchedResume);
      setOpenAIKey(fetchedOpenAIKey);
    };

    fetchLocalData();
  },[])

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
