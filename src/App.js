import {Routes, Route, BrowserRouter , useLocation} from 'react-router-dom';
import {useLayoutEffect} from 'react'; 
import './App.css';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import BlogDetail from "./BlogDetail";
import Header from './components/Header'; 
import Error from './Error';
import Footer from './components/Footer'; 
import BlogList from './BlogList';
import PostDetail from './PostDetail';
import CategoryList from './CategoryList';  

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}  

function App() { 
return (
<>
<BrowserRouter basename='/blogx'>   
<Wrapper>
<div id="main"> 
   <Header />
    <div id="wrapper"> 
  <Routes>
    <Route path='/' element={<Home /> } />    
    <Route path='/about' element={<About />} />    
    <Route path='/contact' element={<Contact />} />
    <Route path='/category' element={<CategoryList />} />
    <Route path='/post-single/:id' element={<BlogDetail />} /> 
    <Route path='/blog/:id' element={<PostDetail />} /> 
    <Route path='/blog' element={<BlogList />} />   
    <Route path='*' element={<Error />} />
  </Routes> 
  <Footer />
    </div>
    </div>
  </Wrapper>
  </BrowserRouter> 
  </> 
  );
  
}

export default App;
