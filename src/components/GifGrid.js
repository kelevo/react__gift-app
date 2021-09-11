import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ( { category } ) => {

    const { data, loading } = useFetchGifs( category )

    return (
        <div className="card-grid">
            <h3> { category } </h3>

            { loading && <p>Loading</p> }

            {
                data.map( img => (
                    <GiftGridItem
                        key={ img.id }
                        { ...img }
                    />
                ))
            }
        </div>
    )
}
