import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {

    const [categories, setcategories] = useState(['Amor']);

    return (
        <div>
            <h2>GiftExpertApp</h2>
            <AddCategory  setCategories={ setcategories }/>
            <hr />

            <ol>
                {
                    categories.map( (category) => {
                        return <GifGrid
                                    key={ category }
                                    category={ category } 
                                />
                    })
                }
            </ol>
        </div>
    )
}