import React from 'react';

import './Jumbotron.scss';

function Jumbotron() {
    return (
        <div className="container">
            <div className="jumbotron jumbotron--custom">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control"></input>
                        <button className="btn btn-sm btn-primary mt-2">Search</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Jumbotron;