import productos from './productos.json'
import React, { useEffect, useState } from 'react'

const Galeria = () => {
    const [productos] = useState([])

    useEffect(() => {
        fetch(productos)
            .then(response => response.json())
            .catch(error => console.error(error));
    }
    )
    
    return(
        <div>
            <h1>{productos}</h1>
        </div>
    ) 
}



export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}

export const getProductosByCategory = (productosCategory) => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(productos.filter(prod=> prod.categoria === productosCategory))
        },500 )
    })
}

export const getProductosById = (itemId) => {
    return new Promise ((resolve)=>{
    setTimeout(()=>{
    resolve(productos.find(prod=> prod.id === parseInt(itemId)))
    },500 )
    })
    }