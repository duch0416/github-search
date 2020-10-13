import React from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query-devtools'
import { BrowserRouter as Router, Route } from "react-router-dom";

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
      <ReactQueryDevtools initialIsOpen/>
        <div className="App">
          <Router>
            <Route path="/" component={Repositories} />
          </Router>
        </div>
      </ReactQueryCacheProvider>
      
    </>
  );
}

export default App;
