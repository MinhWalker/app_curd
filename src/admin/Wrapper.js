import React from 'react'
import Menu from './components/Menu';
import Nav from './components/Nav';

const Wrapper = (props) => {
    return (
        <div>
            <Nav />

            <div className="container-fluid">
                <div className="row">
                    <Menu />

                    <main className="col-md-9 col-lg-10 offset-md-3 offset-lg-2">
                        {props.children}
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Wrapper
