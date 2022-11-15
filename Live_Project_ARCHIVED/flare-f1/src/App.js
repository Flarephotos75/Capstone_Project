import React, {Fragment}  from 'react';

import GetTop5Drivers from './client/components/Top5Drivers';
import GetTop5Teams from './client/components/Top5Teams';

function App() {

  return (
   <Fragment>
      <div>
        Flare-F1 Test
        <GetTop5Drivers />
        <GetTop5Teams />

      </div>
   </Fragment>
  );
}

export default App;
