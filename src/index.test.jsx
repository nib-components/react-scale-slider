import React from 'react';
import ReactScaleSlider from './index';

describe('<ReactScaleSlider/>', () => {

  it('should pass props down', () => {
    const element = render(<ReactScaleSlider data-name="foobar"/>).element;
    expect($(element).prop('data-name')).to.be.equal('foobar');
  });

  it('should pass children down', () => {
    const element = render(<ReactScaleSlider>Hi</ReactScaleSlider>).element;
    expect($(element).text()).to.be.equal('Hi');
  });

});
