 import React from "react"
 import { BrowserRouter as Router , Switch , Route} from "react-router-dom" ;
 // sass file 
 import './styles/index.scss'
 // pages
 import Home from './pages/Home'
 import  ProductInfo  from "./pages/ProductInfo";
 import ErrorPage from "./pages/ErrorPage";
 //components
import Navbar from "./pages/components/Navbar";
import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login" ;

 const App = () => {
     return (
         <Router>
              {/* navbar */}
              <Navbar />
              {/* header */}
              <Header />             
             <Switch>
                 <Route path='/' component ={ Home } exact /> 
                 <Route path='/contact' component={Contact} />
                 <Route path='/about' component={About} />
                 <Route path='/login' component={ Login } />
                 <Route path='/productinfo/:id' children = { <ProductInfo /> } />
                 <Route path='*' component={ErrorPage} />
             </Switch>
             <Footer />
         </Router>
     )
 }
 
 export default App
 