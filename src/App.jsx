import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import ProductDescription from './pages/product_description/ProductDescription';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/product/description/:id' component={ProductDescription} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
