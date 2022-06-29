import React from 'react'
import { useEffect,useState } from 'react'
import {collection,getDocs,getFirestore} from 'firebase/firestore'
import {Link} from 'react-router-dom';

export default function Categories() {

    const [categorias,setCategorias] = useState([]);

    useEffect(() => {

        const db = getFirestore();
        const categoriascoleccion = collection(db,'categorias');
        getDocs(categoriascoleccion)
        .then((categoriaResuelta)=>{
            setCategorias(categoriaResuelta.docs.map((doc)=>doc.data().nombre));
        })
    }, [])
    

    return (
        <>
        <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to='/' id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorias
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                    <li>{categorias.map((categoria)=> <Link className="nav-link dropdown-item" key={categoria}  to= {'categoria/' + categoria}>{categoria}</Link>)}</li>
                </ul>
            </li>
        </>
    )
}