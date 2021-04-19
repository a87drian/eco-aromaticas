
import './App.css';
import {Navbar} from './components/navbar/navbar'

function App() {
  const USER = {
    name: 'Adrian Chaves',
    avatar: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1482&q=80'

  }
  const CART = 2
  const NAVIGATION = ['Nosotros','Productos','Contacto']
  return (
    <div className="App">
      <Navbar user={USER} cartQuantity= {CART} navigation={NAVIGATION}/>
    </div>
  );
}

export default App;
