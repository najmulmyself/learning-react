// import logo from './logo.svg';
import './App.css';
const Books = [
  {
    name: 'ReactJS',
    price: '$100'
  },
  {
    name: 'MasteringJS',
    price: '$120'
  },
  {
    name: 'ReactCook Book',
    price: '$79'
  },
  {
    name: 'JS Begginer',
    price: '$80'
  }
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, React <span style={{color:'red'}}>NINJA</span></h1>
          {/* {<BookShop book={Books[0].name} price={Books[0].price}></BookShop>} */}
          {Books.map(eachBook => <BookShop name={eachBook.name} price={eachBook.price}></BookShop> )}


      </header>
    </div>
  );
}

function BookShop(props) {
  const Style = {
    color : 'white',
    width : '250px',
    height : '250px',
    border : '1px solid white',
    margin : '5px'
  }
  const btn = {
    color: 'white',
    background : 'black',
    border : '1px solid white'
  }
  console.log(props)
  return (
    <div style={Style}>
      <h3>{props.name}</h3>
      <h6>{props.price}</h6>
      <button style={btn}>Buy Now</button>
    </div>
  )
}

export default App;
