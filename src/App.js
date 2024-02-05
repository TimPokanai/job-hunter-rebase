import React, { useState } from "react";
import Generator from "./components/Generator.js";
import Profile from "./components/Profile.js";
import { ROUTES } from "./utilities/routes.js";

function App() {
  const [page, setPage] = useState();
  const [resume, setResume] = useState();
  const [openAIKey, setOpenAIKey] = useState();
  switch(page) {
    case ROUTES.GENERATOR:
      return <Generator setPage={setPage} />;

    case ROUTES.PROFILE:
      return <Profile setPage={setPage} resume={setResume} openAIKey={setOpenAIKey} />;

    default:
      return <Generator setPage={setPage} />;
    }
}

export default App;
