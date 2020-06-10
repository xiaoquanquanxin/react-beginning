import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Game } from './components/game.jsx';
import { KnowLedge } from './components/knowLedge';

//  功能
ReactDOM.render(
    <Game/>,
    document.getElementById('root'),
);

//  笔记
ReactDOM.render(
    <KnowLedge i={new Date().toLocaleString()}/>,
    document.getElementById('log'),
);