import React, { useState, useEffect } from 'react'

const Main = () => {
    const [products, setproducts] = useState([])

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/api/products')

                const data = await response.json()

                setproducts(data)
            }
        )()
    }, [])

    const like = async (id) => {
        await fetch(`http://localhost:8001/api/products/${id}/like`, {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' }
        })

        setproducts(products.map(
            (p => {
                if (p.id === id) {
                    p.likes++
                }

                return p
            })
        ))
    }

    return (
        <main>
            <div class="album py-5 bg-light">
                <div class="container">
                    <div class="row ">
                        {products.map(
                            p => {
                                return (
                                    <div class="col-md-4">
                                        <div class="card shadow-sm">
                                            <img src={p.image}></img>
                                            <div class="card-body">
                                                <p class="card-text">{p.title}</p>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="btn-group">
                                                        <button type="button"
                                                            class="btn btn-sm btn-outline-secondary"
                                                            onClick={() => like(p.id)}
                                                        >
                                                            Like
                                                        </button>
                                                    </div>
                                                    <small class="text-muted">{p.likes} Likes</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Main
