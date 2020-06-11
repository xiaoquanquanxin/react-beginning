import React from 'react';

export class BasicForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit(e){
        console.log(this.state.value);
        e.preventDefault();
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>名字&nbsp;:&emsp;
                        <input
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                        /></label>&emsp;
                    <button type='submit'>提交</button>
                </form>
            </div>
        );
    }

}