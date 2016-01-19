import ScaleSlider from '../index.jsx';

describe('ScaleSlider', () => {

  describe('.handleChange()', () => {

    it('should update the label when the scale slider is changed', () => {
      const onChange = sinon.spy();
      const component = render(<ScaleSlider onChange={onChange} />).component;

      component.handleChange({target: {value: 3}});

      expect(onChange).to.be.calledWith('SingleParentFamily');
    });

  });

  describe('.handleClick()', () => {

    it('should call onChange with the selected value', () => {
      const onChange = sinon.spy();
      const component = render(<ScaleSlider onChange={onChange}/>).component;

      component.handleClick({target: {id: 1}});

      expect(onChange).to.be.calledWith('Couple');
    });

  });

  describe('.render()', () => {

    it('should render the scale slider with the correct label text when single', () => {
      const element = render(<ScaleSlider value="Single" />).element;
      expect($(element).find('#label').hasText(' Me ')).to.be.true;
    });

    it('should render the scale slider with the correct label text when couple', () => {
      const element = render(<ScaleSlider value="Couple" />).element;
      expect($(element).find('#label').hasText(' Me and my partner ')).to.be.true;
    });

    it('should map single scale string to 0 index', () => {
      const rendered = render(<ScaleSlider value="Single" />);
      expect($(rendered.element).find('input').hasProp('value', 0)).to.be.true;
    });

    it('should map single scale string to 1 index', () => {
      const rendered = render(<ScaleSlider value="Couple" />);
      expect($(rendered.element).find('input').hasProp('value', 1)).to.be.true;
    });

    it('should throw an error if invalid scale', () => {
      expect(() => render(<ScaleSlider value='extendedFamily' />)).to.throw(Error, 'Invalid value "extendedFamily"');
    });

  });

});
