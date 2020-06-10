import React from 'react';

class ManyTimes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString(),
        };
    }

    tick(){
        this.setState((state) => ({
            time: new Date().toLocaleString(),
        }));
        //  ⚠️另一种
        this.setState((state, props) => {
            // console.log(state, props);
            return {};
        });
    }

    componentDidMount(){
        this.timeId = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timeId);
    }

    btnClick1 = (e) => {
        // console.log(e.target);
        console.log(this);
    };

    btnClick2(e){
        // console.log(e.target);
        console.log(this);
    };

    btnClick3(name, ...rest){
        console.log(name, rest[rest.length - 1].target);
    };

    render(){
        return (
            <div>
                <div>我是state记录的时间，{this.state.time}</div>
                <button onClick={this.btnClick1}>事件绑定1</button>
                <button onClick={this.btnClick2}>事件绑定2</button>
                <button onClick={() => {this.btnClick3('参数', this, window.event);}}>事件绑定3</button>
            </div>
        );
    }
}

export function KnowLedge(){
    return (
        <div>
            <ManyTimes/>
            <h3>元素渲染</h3>
            <ol>
                <li>react元素是不可变对象，无法更改他的子元素或者属性。一个元素就像电影的一帧，代表了某个特定时刻的ui。</li>
                <li>所以，更新react，就是创建一个新的元素，传入ReactDOM.render。</li>
                <li>React DOM会将元素和他的子元素与之前的状态进行比较，只会进行必要的更新。</li>
                <li>尽管每时每刻更新了整个新的树，但React DOM都只会更新实际改变了的内容。这样做的好处是速度快，但是有可能出现bug？</li>
            </ol>
            <h3>组件</h3>
            <ol>
                <li>组件，必须以大写字母开头。小写字母会被识别为原生组件。</li>
                <li>我们建议从组件资深的角度命名props，而不是依赖于调用组件的上下文，就是希望参数语义化。</li>
                <li>纯函数：不在函数体内部修改参数，对于同样的参数，返回值总是相同的。</li>
            </ol>
            <h3>生命周期与state</h3>
            <ol>
                <li>state与props类似，但是state是私有的，并且完全受控制与当前组件。</li>
                <li>在组件话应用程序中，当组件被销毁时，释放占用的资源是很重要的。</li>
                <li>在组件第一次渲染到DOM的时候，doSth，被称作挂载mount。</li>
                <li>组件被删除时候，doSth，被称作卸载unmount。</li>
                <li>当调用setState的时候，React会重新调用render方法来确定页面上显示什么。</li>
                <li className='question'>构造函数是唯一可以给state赋值的地方，其他地方需要setState。setState方法做了什么？</li>
                <li>this.props和this.state的更新可能是异步的。</li>
                <li>数据（参数）的传递是自上而下的单向的数据流。且从某一个组件的state派生的数据都只能影响它和它的子组件，就像是瀑布的水流。</li>
            </ol>
            <h3>事件处理</h3>
        </div>
    );
}



