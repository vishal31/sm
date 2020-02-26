import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';



import Navbar from './component/Navbar/Navbar';

import Search from './container/Search';

import Form from './container/Form';

import View from './container/View';





function App() {
  return (



    <BrowserRouter>

      <Navbar />

      


        <Switch>

         
            
          <Route path="/add" component={Form} />
          {/* <Route path="/update" component={Form} /> */}
          <Route path="/view" component={View} />
          <Route path="/search" component={Search} />


          <Route path="/" component={Form} />
         



        </Switch>

     
      

        </BrowserRouter>

  );
}

export default App;
