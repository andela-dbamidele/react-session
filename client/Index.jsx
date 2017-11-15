import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/header.scss';

const Index = () => <div className="main">This is our first component</div>;

const app = document.getElementById('app');

ReactDOM.render(<Index />, app);
