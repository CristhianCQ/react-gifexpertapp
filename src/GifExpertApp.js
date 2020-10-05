import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

const GifExpert= () =>{

    const [ categorie, setCategories]= useState(['One Punch']);

    // const  AddCategories= () => {
    //     // setCategories([...categorie,'Eden Zero']);
    //     setCategories(cats => [...cats, 'Eden Zero' ])
    // } 

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            
            <ol>                
                {   
                    categorie.map((cat ) => 
                        <GifGrid 
                            key={cat}
                            category={cat}
                        />
                    )
                }               
            </ol>
        </>
    )
}

export default GifExpert;
 