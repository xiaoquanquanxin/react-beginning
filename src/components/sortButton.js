import React from 'react';

export class SortButton extends React.Component {
    render(){
        return (
            <div>
                <div>
                    <button onClick={() => this.props.sortClick(-1)}>前一个</button>
                </div>
                <br/>
                <div>
                    <button onClick={() => this.props.sortClick(1)}>后一个</button>
                </div>
            </div>
        );
    }
}