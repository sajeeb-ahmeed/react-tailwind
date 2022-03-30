
import './App.css';
import Header from './components/Header/Header';

import Pricing from './components/Pricing/Pricing';

import Route from './components/Route/Route';

function App() {
  return (
    <div className='App'>
      <Route></Route>
      <h1 className='text-6xl mt-16'>Welcome To My Pricing Club With Tailwind</h1>
      <Header></Header>
      <Pricing></Pricing>

    </div>

  );
}

export default App;
