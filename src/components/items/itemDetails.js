import React from 'react'

const ItemDetails = (props) => {
    const id = props.match.params.id
  return (
    <div className="container section item-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title"> Item Title - {id}</span>
                <p>React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
                <div>React is a JavaScript library</div>
                <div>maintained by Facebook</div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetails
