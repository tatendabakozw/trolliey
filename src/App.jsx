import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import ProductDescription from './pages/product_description/ProductDescription';
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/product/description/:id' component={ProductDescription} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
