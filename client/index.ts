import React from "react";
import ReactDOM from 'react-dom';
import App from './App.tsx';

// Instead of `ReactDOM.render(...)`
ReactDOM.hydrate(<App />, document.getElementById('root'));