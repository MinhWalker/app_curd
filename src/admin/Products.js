/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

    const del = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            await fetch(`http://localhost:8000/api/products/${id}`, {
                method: 'DELETE'
            })

            setProducts(products.filter(p => p.id !== id))
        }
    }

    return (
        <Wrapper>
            <div className="pt-3 pb-2 mb-3 border-bottom">
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to='/admin/products/create' className="btn btn-sm btn-outline-secondary">Add</Link>
                </div>
            </div>

            <div class="table-responsive">
                <table class="table table-striped table-sm">
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
                                    <td><img src={p.image} height="50" /></td>
                                    <td>{p.title}</td>
                                    <td>{p.likes}</td>
                                    <td>
                                        <div className="btn-group mr-2">
                                            <Link to={`/admin/products/${p.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                                            <a href="#" className="btn btn-sm btn-outline-secondary"
                                                onClick={() => del(p.id)}>Delete</a>
                                        </div>
                                    </td>
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
