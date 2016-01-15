import chai from 'chai';
import jsx from 'jsx-chai';
import React from 'react';
import query from 'react-testutils-query';
import render from 'react-testutils-render';

chai.use(jsx);

// --- don't use `global` in actual code!!! ---

global.expect = chai.expect;
global.React = React;
global.$ = query;
global.render = render;
