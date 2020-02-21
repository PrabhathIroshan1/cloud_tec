import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createItem } from '../../store/actions/itemAction';

class CreateItem extends Component {
    state ={
        title:'',
        content:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.createItem(this.state);
    }

    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create New Item</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">
                            Create
                        </button>
                    </div>
                </form>    
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createItem: (item) => dispatch(createItem(item))
    }
}

export  default connect(null, mapDispatchToProps)(CreateItem);
