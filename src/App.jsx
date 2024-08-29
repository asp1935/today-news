
import './App.css'
import DisplayNews from './components/DisplayNews'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import ScrollTop from './components/ScrollTop'
import Sidebar from './components/Sidebar'


function App() {
 
  // const apikey=process.env.REACT_APP_APEY;
  return (
    <>
      <Navbar/>
      
      <Sidebar/>
      
      <DisplayNews/>
      <Loader/>
      <ScrollTop/>
    </>
  )
}

export default App
