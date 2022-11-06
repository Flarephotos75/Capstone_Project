import React, {Fragment}  from 'react';

import GetTop5Drivers from './client/components/AllDriverDisplayCard';

function App() {
  return (
   <Fragment>
      <div>
        <h1>Flare-F1 Test Page</h1>
        <GetTop5Drivers />
      </div>
   </Fragment>
  );
}

export default App;
