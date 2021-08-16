

import {HomePage} from './components/HomePage' 
import {EditEvents} from './components/EditEvents'
import {AddEvents} from './components/AddEvents'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {GlobalProvider} from './contextApi/GlobalVars';
function App() {
  return (
    <div className="App">

<GlobalProvider>

      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} /> 
          <Route path='/edit/:id' component={EditEvents} /> 
          <Route path='/add' component={AddEvents} /> 
          
       </Switch>
      </BrowserRouter>


</GlobalProvider>
     
    </div>
  );
}

export default App;
