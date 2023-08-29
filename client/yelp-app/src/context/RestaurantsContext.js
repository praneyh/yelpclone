import React, { useState, createContext } from 'react';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = props => {
    
    const [selectedRestaurant, setSelectedRestaurant] = useState([]);
    const [restaurants, setRestaurants] = useState(null);

    const addRestaurants = (restaurant) => {
        setRestaurants([...restaurants, restaurant])
    }
    
    return (

        <RestaurantsContext.Provider value={{restaurants, setRestaurants, addRestaurants, selectedRestaurant, setSelectedRestaurant}}>
            {props.children}
        </RestaurantsContext.Provider>
    )
}