import React from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import Repositories from "./search/Repositories";


const queryCache = new QueryCache();

function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <div className="App">
        <Repositories/>
      </div>
    </ReactQueryCacheProvider>
  );
}

export default App;
