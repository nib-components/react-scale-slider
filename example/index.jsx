import React from 'react';
import ReactDOM from 'react-dom';
import ScaleSlider from '../index.jsx';

const state = {
  scale: 'single'
};

function render() {
  ReactDOM.render(
    <ScaleSlider onChange={handleChange} value={state.scale} />,
    document.querySelector('#app')
  );
}

function handleChange(scale) {
  console.log(scale);
  state.scale = scale;
  render();
}

render();
