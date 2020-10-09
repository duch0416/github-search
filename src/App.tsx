import React from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Repositories from "./search/Repositories";


const queryCache = new QueryCache();

function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <div className="App">
        <Router>
            <Route path="/" component={Repositories}/>
        </Router>
      </div>
    </ReactQueryCacheProvider>
  );
}

export default App;
