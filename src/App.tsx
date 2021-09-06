import React, {lazy, Suspense} from 'react';
import './App.css';
import {Router} from '@reach/router'

const HomePage = lazy(() => import('./components/Home'))
const CheckoutPage = lazy(() => import('./components/Checkout'))
const ComingSoonPage = lazy(() => import('./components/ComingSoon'))

const Loading = () => <div>Loading...</div>
function App() {
  return (
    <div className="App">
        <Suspense fallback={<Loading />}>
            <Router>
                <HomePage path={'/'} default />
                <CheckoutPage path={'/checkout'} />
                <ComingSoonPage path={'/coming-soon'} />
            </Router>
        </Suspense>
    </div>
  );
}

export default App;
