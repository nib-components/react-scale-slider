import 'source-map-support/register';

import {expect} from 'chai';
import render from 'react-testutils-render';
import query from 'react-testutils-query';
import register from 'ignore-styles';

register(['.eot', '.svg', '.ttf', '.woff']);

global.expect = expect;
global.render = render;
global.$ = query;
