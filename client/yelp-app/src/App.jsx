import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RestaurantsContextProvider } from './context/RestaurantsContext';
import Home from './routes/Home';
import RestaurantDetailPage from './routes/RestaurantDetailPage';
import UpdatePage from './routes/UpdatePage';

const App = () => {
    return (
    <RestaurantsContextProvider>
        <div className='container'>
            <Router>
                <Routes>
                    <Route exact path="/" Component={Home} />
                    <Route exact path="/restaurants/:id/update" Component={UpdatePage} />
                    <Route exact path="/restaurants/:id" Component={RestaurantDetailPage} />
                </Routes>
            </Router>
        </div>
    </RestaurantsContextProvider>    
    )
};

export default App;