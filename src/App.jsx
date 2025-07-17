import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import logo from './assets/brand_logo.png'
import body_image from './assets/shoe_image.png'
import flipkart from './assets/flipkart.png'
import amazon from './assets/amazon.png'


function App() {

  return (
    <div className="main">
      <Header logo={logo}/>
      <Body body_image={body_image} flipkart={flipkart} amazon={amazon}/>
      
    </div>
  )
}

export default App
