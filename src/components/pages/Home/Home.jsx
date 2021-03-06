import React, { useState, useEffect } from 'react';
import BottomSheetFilter from '../../organisms/BottomSheetFilter/BottomSheetFilter';
import './Home.scss';
import { Typography, Box } from '@material-ui/core';
import FilterTabs from '../../molecules/FilterTabs';
import { getAll } from '../../../services';
import CardsGrid from '../../organisms/CardsGrid/CardsGrid';

export default function Home() {
    const [value, setValue] = useState(0);
    const [drinks, setDrinks] = useState([]);
    const [categoriesSelected, setCategoriesSelected] = useState([]);
    const [ingredientsSelected, setIngredientsSelected] = useState([]);
    const handleChangeTabs = (event, newValue) => {
        setValue(newValue);
    };

    
    useEffect(() => {
        async function fetchAll() {
            const drinks = await getAll();
            localStorage.setItem("cocktails", JSON.stringify(drinks.slice(0,100)));
            setDrinks(drinks.slice(0,100));
        }
        if (!localStorage.getItem("cocktails")) {
            fetchAll();
        } else {
            setDrinks(JSON.parse(localStorage.getItem("cocktails")));
        }
    }, []);

    const applyFilter = () => {
        drinks.filter()
    }
    
    return (
        <div className="view">
            <Typography component="h1" variant="h4" className="bold">Cócteles</Typography>
            <FilterTabs handleChange={handleChangeTabs} value={value} />
            <CardsGrid items={drinks} type={value}/>
            <BottomSheetFilter 
                onChangeCategories={setCategoriesSelected}
                onChangeIngredients={setIngredientsSelected}
            />
        </div>
    )
}
