import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./styles/PricingApp.css";
import OneStopHomeService from '../src/pages/OneStop';
import Toggle from "./components/toggle";
import PaymenthtmlForm from './components/PaymentForm';
import Plans from './components/Plans';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Loader from './components/Loader';
import { Suspense, lazy } from 'react';
import Policy from './components/policy';
import Services from './components/Services';
import Contact from './components/Contact';
const PaymentForm = lazy(() => import('./components/PaymentForm'));

function App() {
  // const [selectMonthly, setSelectMonthly] = useState(true);
  // console.log(selectMonthly);
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<OneStopHomeService />}> </Route>
          <Route path='/about' element={<About />}>  </Route>
          <Route path='/payment' element={<Suspense fallback=<Loader />>
            {<PaymentForm />}  </Suspense>}>
          </Route>
          <Route path='/plans' element={<Plans />}>  </Route>
          <Route path='/policy' element={<Policy />}>  </Route>
          <Route path='/services' element={<Services />}>  </Route>
          <Route path='/contact' element={<Contact />}>  </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
