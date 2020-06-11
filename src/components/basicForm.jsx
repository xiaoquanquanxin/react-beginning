import React from 'react';

export class BasicForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            selectedValue: 'b',
            selectedMultiple: ['a', 'd'],
        };
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({ value });
    };

    handleSubmit = (e) => {
        console.log(this.state.value);
        e.preventDefault();
    };

    handleSelected = (e) => {
        const selectedValue = e.target.value;
        this.setState((state) => ({
            selectedValue,
        }));
    };

    //  多选
    handleSelectedMultiple = (e) => {
        const selectedMultiple = [];
        Array.prototype.forEach.call(e.target.options, (item) => {
            if (item.selected) {
                selectedMultiple.push(item.value);
            }
        });
        this.setState(() => ({
            selectedMultiple,
        }));
    };

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>input</p>
                    <label>名字&nbsp;:&emsp;
                        <input
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                        /></label>&emsp;
                    <button type='submit'>提交</button>
                    <p>textarea</p>
                    <textarea name="textarea" cols="30" rows="10"
                              value={this.state.value}
                              onChange={this.handleChange}
                    />
                    <p>单选</p>
                    <select name="select"
                            value={this.state.selectedValue}
                            onChange={this.handleSelected}
                    >
                        <option value="a">aaaaaaaa</option>
                        <option value="b">bbbbbbbb</option>
                        <option value="c">cccccccc</option>
                    </select>
                    <p>多选</p>
                    <select name="select-m"
                            multiple={true}
                            value={this.state.selectedMultiple}
                            onChange={this.handleSelectedMultiple}
                    >
                        <option value="a">aaaaaaaa</option>
                        <option value="b">bbbbbbbb</option>
                        <option value="c">cccccccc</option>
                        <option value="d">dddddddd</option>
                    </select>
                </form>
            </div>
        );
    }
}