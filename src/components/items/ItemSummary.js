import React from 'react';

const ItemSummary = ({item}) => {
    return (
        <div className="card z-depth-0 item-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{ item.title }</span>
                    <p>test</p>
                    <p className="grey-text"> september</p>
            </div>
        </div>
           
    )
}

export default ItemSummary;