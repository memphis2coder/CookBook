import React from 'react';
import RecipeSearch from '../RecipeSearch/RecipeSearch';

export default function RecipeList(props) {
    return (
        
        <div className="container mt-5">
            <h2 className="text-center py-3">Recipe List</h2>
            <div className='row'>
                <div className="col-sm-6 text-center mb-3">
                    <div className="card">
                        <img src="" className="card-img-top" alt="picture"/>
                        <div className="card-body">
                            <h5 className='card-title'>{props.message}</h5>
                            <p className="card-text">recipe</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 text-center mb-3">
                    <div className="card">
                        <img src='...' className="card-img-top" alt="picture"/>
                        <div className="card-body">
                            <h5 className='card-title'>title</h5>
                            <p className="card-text">recipe</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}