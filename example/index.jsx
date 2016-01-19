import React from 'react';
import ReactDOM from 'react-dom';
import ScaleSlider from '../index.jsx';

const state = {
  scale: 'Single'
};

function render() {
  ReactDOM.render(
    <ScaleSlider onChange={handleChange} value={state.scale} autoFocus />,
    document.querySelector('#app')
  );
}

function handleChange(scale) {
  console.log(scale);
  state.scale = scale;
  render();
}

render();
