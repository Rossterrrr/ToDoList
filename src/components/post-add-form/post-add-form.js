import React from 'react';
import './post-add-form.css';

export default class PostAddForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({
            value:e.target.value
        })
        console.log(e.target.value);
    }
    onSubmit(e){
        e.preventDefault();
        
        if(this.state.value){
            this.props.onSubmit(e,this.state.value);
            this.setState(({value}) => {
                return{
                    value:''
                }
            })
        }
        
    }
    render(){
        return(
            <form className="bottom-panel d-flex" onSubmit={this.onSubmit} >
                <input
                    type="text"
                    placeholder="О чем вы думаете сейчас"
                    className="form-control new-post-label"
                    onChange={this.onChange}
                    value={this.state.value}
                ></input>
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                >Добавить</button>
            </form> 
        )
    }
}