import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import CourseDetailsMain from "./components/CourseDetails/CourseDetailsMain/CourseDetailsMain";
import ScrollToTop from "./hooks/ScrollToTop";
import Cart from "./components/Cart/Cart";
import CartProvider from "./contexts/CartProvider/CartProvider";
import QuizHome from "./components/Quiz/QuizHome/QuizHome";
import BlogsHome from "./components/Blogs/BlogsHome/BlogsHome";
import AllCourses from "./components/AllCourses/AllCourses";
import BlogDetailsMain from "./components/Blogs/BlogDetailsMain/BlogDetailsMain";
import NewCart from "./components/NewCart/NewCart";
import NewCartProvider from "./contexts/NewCartProvider/NewCartProvider";
import Checkout from "./components/Checkout/Checkout";

function App() {
 return (
  <>
   <AuthProvider>
    <NewCartProvider>
     <CartProvider>
      <ScrollToTop>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="course/:id" element={<CourseDetailsMain />} />
        <Route path="blogs/:id" element={<BlogDetailsMain />} />
        {/* <Route path="cart" element={<Cart />} />  there is some bug in this route */}
        <Route path="newcart" element={<NewCart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="quiz" element={<QuizHome />} />
        <Route path="blogs" element={<BlogsHome />} />
        <Route path="allcourses" element={<AllCourses />} />
       </Routes>
      </ScrollToTop>
     </CartProvider>
    </NewCartProvider>
   </AuthProvider>
  </>
 );
}

export default App;
