import React, { useState } from 'react'

export const GiftExpertApp = () => {

    const [categories, setcategories] = useState(['Chabe', 'Taz', 'Rambo']);

    const handleAdd = () => {
        let capturado = document.getElementById('addItem');
        console.log(capturado.value);
        setcategories( [...categories, capturado.value] );
    }

    return (
        <div>
            <h2>GiftExpertApp</h2>
            <hr />

            <input type="text" id="addItem" />
            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {
                    categories.map( (category) => {
                        return <li key={ category }> { category } </li>
                    })
                }
            </ol>
        </div>
    )
}