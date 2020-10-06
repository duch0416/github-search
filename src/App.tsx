import React from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";

import "./App.css";

const queryCache = new QueryCache();

function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <div className="App"></div>
    </ReactQueryCacheProvider>
  );
}

export default App;
