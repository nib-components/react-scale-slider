import chai from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import jsx from 'jsx-chai';
import React from 'react';
import query from 'react-testutils-query';
import render from 'react-testutils-render';

chai.use(jsx);
chai.use(sinonChai);

// --- don't use `global` in actual code!!! ---
global.expect = chai.expect;
global.React = React;
global.$ = query;
global.render = render;
global.sinon = sinon;