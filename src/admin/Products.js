import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper'

const Products = () => {
    const [products, setProducts] = useState([])


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/api/products')

                const data = await response.json()

                setProducts(data)
            }
        )()
    }, [])

    return (
        <Wrapper>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Num</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Likes</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(p => {
                            return (
                                <tr key={p.id}>
                                    <td>{p.id}</td>
                                    <td><img src={p.image} height="180" alt="" /></td>
                                    <td>{p.title}</td>
                                    <td>{p.likes}</td>
                                    <td></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </Wrapper>
    )
}

export default Products
