import React from 'react'
import Item from './Item';

function ItemList({ items }) {
    console.log(items);
    return (
        <>
        <div style={{display:'flex', flexWrap:'wrap'}}>
            {items?.map(item => 
            <Item key={item.id} jsonpack={item} />)}
        </div>
        </>
    )
}

export default ItemList