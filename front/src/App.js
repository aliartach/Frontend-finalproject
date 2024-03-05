import './App.css';
import Home from "./pages/HomePage/HomePage"

import { UserProvider } from './context/Context.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupPage from './pages/SignupPage/SignupPage.js';
import Loginpage from './pages/LogInpage/Loginpage.js';
import PrivacypolicyPage from './pages/PrivacypolicyPage/PrivacypolicyPage.js';
import ContactusPage from './pages/ContactUs/ContactusPage.js';
import Singleproduct from './pages/Singleproduct/Singleproduct.js';
import ProductPage2 from './pages/Product2/ProductPage2.js';
import Cartpage from './pages/CartPage/Cartpage.js';
import Faqss from './pages/Faqs/Faqs.js';
import Termspage from './pages/Termsandconditionpage/Termspage.js';
// import ProfilePage from "./components/Userprofile/Userprofile.js"
import Userprofilepage from './pages/Userprofile/Userprofilepage.js';

function App() {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/PrivacyPolicy" element={<PrivacypolicyPage />} />
                    <Route path="/Signup" element={<SignupPage />} />
                    <Route path="/Login" element={<Loginpage />} />
                    <Route path="/Contactus" element={<ContactusPage />} />
                    <Route path='/Singleproduct/:id' element={<Singleproduct />} />
                    <Route path="/Product" element={<ProductPage2 />} />
                    <Route path="/cart" element={<Cartpage />} />
                    <Route path='/Faqs' element={<Faqss />} />
                    <Route path='/TermsAndCondtions' element={<Termspage />} />
                    <Route path='/ProfilePage' element={<Userprofilepage />} />
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;