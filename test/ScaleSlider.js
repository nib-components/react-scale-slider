import ScaleSlider from '../dist/index.js';

describe('ScaleSlider', () => {

  //describe('.handleChange()', () => {
  //
  //  it('should update the label when the scale slider is changed', () => {
  //    const rendered = render(<ScaleSlider value="singleParentFamily" />);
  //
  //    console.log(rendered.element.props.value);
  //
  //    expect($(rendered.element).find('input').hasProp('value', 0)).to.be.true;
  //
  //    //expect($(element).find('#1').onClick()).to.change(element, 'value');
  //
  //    //console.log($(rendered.element).find('input').elements[0].props);
  //
  //    //expect($(rendered.element).find('#label').hasText(' Me ')).to.be.true;
  //  });
  //
  //});

  //describe('.handleClick()', () => {
  //
  //  it('should update input value when icon is clicked', () => {
  //    const rendered = render(<ScaleSlider value="single" />);
  //
  //    console.log($(rendered.element).find('#2').props.onClick);
  //
  //    expect($(rendered.element).find('#2').props.onClick).to.equal(rendered.component.onClick);
  //  });
  //
  //});

  describe('.render()', () => {

    it('GOOD should render the scale slider with the correct label text', () => {
      const element = render(<ScaleSlider value="single" />).element;
      expect($(element).find('#label').hasText(' Me ')).to.be.true;
    });

    it('GOOD should map single scale string to 0 value', () => {
      const rendered = render(<ScaleSlider value="single" />);
      //console.log($(rendered.element).find('input').elements[0].props);
      expect($(rendered.element).find('input').hasProp('value', 0)).to.be.true;
    });

    it('GOOD should have the correct label text', () => {
      const element = render(<ScaleSlider value="couple" />).element;
      expect($(element).find('#label').hasText(' Me and my partner ')).to.be.true;
    });

    it('GOOD should throw an error if invalid scale', () => {
      expect(() => render(<ScaleSlider value='extendedFamily' />)).to.throw(Error, 'Invalid value "extendedFamily"');
    });

    //should set scale to single by default
    //should display correct scale wording below input
    //should update scale value when input value changed
    //should change scale when icon clicked
    //should update wording when icon is clicked

  });

});
