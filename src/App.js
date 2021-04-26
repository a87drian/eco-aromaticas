
import './App.css';
import {Navbar} from './components/navbar/navbar'
import {Cart} from './components/cart/cart'
import {ItemCount} from './components/itemCount/itemCount' 

function App() {
  const [contador, setCount] = useState(0)
  const USER = {
    name: 'Adrian Chaves',
    avatar: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1482&q=80'

  }
  const LISTPRODUCTS = [{"id":1,"product_name":"Garbag Bags - Black","product_image":"http://dummyimage.com/198x100.png/dddddd/000000","product_price":343.77},
{"id":2,"product_name":"Blouse / Shirt / Sweater","product_image":"http://dummyimage.com/207x100.png/dddddd/000000","product_price":960.7},
{"id":3,"product_name":"Squash - Guords","product_image":"http://dummyimage.com/227x100.png/5fa2dd/ffffff","product_price":164.71},
{"id":4,"product_name":"Broom And Broom Rack White","product_image":"http://dummyimage.com/197x100.png/cc0000/ffffff","product_price":175.24},
{"id":5,"product_name":"Mop Head - Cotton, 24 Oz","product_image":"http://dummyimage.com/230x100.png/cc0000/ffffff","product_price":210.78},
{"id":6,"product_name":"Scrubbie - Scotchbrite Hand Pad","product_image":"http://dummyimage.com/223x100.png/5fa2dd/ffffff","product_price":653.04},
{"id":7,"product_name":"Lid - 0090 Clear","product_image":"http://dummyimage.com/172x100.png/cc0000/ffffff","product_price":849.22},
{"id":8,"product_name":"Okra","product_image":"http://dummyimage.com/163x100.png/cc0000/ffffff","product_price":616.51},
{"id":9,"product_name":"Appetizer - Spring Roll, Veg","product_image":"http://dummyimage.com/142x100.png/ff4444/ffffff","product_price":726.19},
{"id":10,"product_name":"Dried Apple","product_image":"http://dummyimage.com/223x100.png/dddddd/000000","product_price":662.9},
{"id":11,"product_name":"Cocktail Napkin Blue","product_image":"http://dummyimage.com/126x100.png/ff4444/ffffff","product_price":899.61},
{"id":12,"product_name":"Dish Towel","product_image":"http://dummyimage.com/147x100.png/cc0000/ffffff","product_price":844.17},
{"id":13,"product_name":"Taro Leaves","product_image":"http://dummyimage.com/189x100.png/cc0000/ffffff","product_price":490.53},
{"id":14,"product_name":"Soup Campbells Turkey Veg.","product_image":"http://dummyimage.com/114x100.png/ff4444/ffffff","product_price":972.75},
{"id":15,"product_name":"Beer - Paulaner Hefeweisse","product_image":"http://dummyimage.com/118x100.png/ff4444/ffffff","product_price":936.75},
{"id":16,"product_name":"Soup Campbells - Italian Wedding","product_image":"http://dummyimage.com/191x100.png/ff4444/ffffff","product_price":967.68},
{"id":17,"product_name":"Pork - Backfat","product_image":"http://dummyimage.com/176x100.png/5fa2dd/ffffff","product_price":238.24},
{"id":18,"product_name":"Cherries - Maraschino,jar","product_image":"http://dummyimage.com/232x100.png/5fa2dd/ffffff","product_price":272.68},
{"id":19,"product_name":"Curry Paste - Madras","product_image":"http://dummyimage.com/229x100.png/5fa2dd/ffffff","product_price":525.35},
{"id":20,"product_name":"Bread - Hamburger Buns","product_image":"http://dummyimage.com/201x100.png/5fa2dd/ffffff","product_price":180.61}]


  const CART = 2
  const NAVIGATION = ['Nosotros','Productos','Contacto']
  return (
    <div className="App">
      <Navbar user={USER} cartQuantity= {CART} navigation={NAVIGATION}/>
      <Cart list={LISTPRODUCTS}  />
      <ItemCount value={contador} onClick={setCount(contador + 1)}/>
    
    </div>

  );
}

export default App;
