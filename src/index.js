import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Game } from './components/game.jsx';

ReactDOM.render(
    <Game/>,
    document.getElementById('root'),
);

const Log = ((props) => {
    return (
        <ol>
            <li>react元素是不可变对象，无法更改他的子元素或者属性。一个元素就像电影的一帧，代表了某个特定时刻的ui。</li>
            <li>所以，更新react，就是创建一个新的元素，传入ReactDOM.render。</li>
            <li>React DOM会将元素和他的子元素与之前的状态进行比较，只会进行必要的更新。</li>
            <li>尽管每时每刻更新了整个新的树，但React DOM都只会更新实际改变了的内容。这样做的好处是速度快，但是有可能出现bug？</li>
            <li>我是计时器:{props.i}</li>
        </ol>
    );
});

(() => {
    let i = 0;
    setInterval(() => {
        i++;
        ReactDOM.render(
            <Log i={i}/>,
            document.getElementById('log'),
        );
    },1000);
})();