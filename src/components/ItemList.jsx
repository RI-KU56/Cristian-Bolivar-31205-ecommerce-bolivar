import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Item from './Item';

let count = 1;

function ItemList({ items }) {

    useEffect(() => {
        if (count == 1 && (categoryid > 6 || categoryid <= 0))
            alert("Solo categorias 1 a 6 están disponibles por favor cambiar categoria");
        count = count + 1;
    })

    const { categoryid } = useParams(null)
    let ListTemplate;
    console.log(categoryid);

    if (!categoryid) {
        console.log("In the function dude");
        ListTemplate = items?.map((item) => <Item key={item.id} jsonpack={item} />);
    } else {
        console.log(categoryid);
        ListTemplate = items
            .filter((item) => item.categoryid == categoryid)
            .map((filteredName) => (
                <Item key={filteredName.id} jsonpack={filteredName} />
            ));
    }

    return (
        <>
        <div style={{display:'flex', flexWrap:'wrap'}}>
            {ListTemplate}
        </div>
        </>
    )
}

export default ItemList