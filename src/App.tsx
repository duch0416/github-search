import React from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RepositoriesProvider } from "./context/RepositoriesContext";

import Repositories from "./search/Repositories";

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
      staleTime: 60000,
    },
  },
});

function App() {
  return (
    <>
      
      <ReactQueryCacheProvider queryCache={queryCache}>
        <RepositoriesProvider>
        <div className="App">
          <Router>
            <Route path="/" component={Repositories} />
          </Router>
        </div>
        </RepositoriesProvider>
      </ReactQueryCacheProvider>
      
    </>
  );
}

export default App;
