import React from 'react';
import invariant from 'invariant';

const options = {
  'single': 'Me',
  'couple': 'Me and my partner',
  'family': 'Me, my partner and our kids',
  'singleParentFamily': 'Me and my kids'
};

export default class ScaleSlider extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const index = event.target.value;
    this.props.onChange(Object.keys(options)[index]);
  }

  handleClick(event) {
    const index = event.target.id;
    this.props.onChange(Object.keys(options)[index]);
    this.refs.scaleInput.focus();
  }

  render() {
    const {value} = this.props;
    const index = Object.keys(options).indexOf(value);

    //throw an error if value is not a valid option
    invariant(index !== -1, `Invalid value "${value}"`);

    return (
      <div className="scale-slider">
        <ul className="scale-slider__icons">
          <li className="scale-slider__icon-holder" >
            <i className="scale-slider__icon v2-icon v2-icon--small v2-icon--single" id="0" name="single" onClick={this.handleClick} />
          </li>
          <li className="scale-slider__icon-holder">
            <i className="scale-slider__icon v2-icon v2-icon--small v2-icon--couple" id="1" name="couple" onClick={this.handleClick} />
          </li>
          <li className="scale-slider__icon-holder">
            <i className="scale-slider__icon v2-icon v2-icon--small v2-icon--family" id="2" name="family" onClick={this.handleClick} />
          </li>
          <li className="scale-slider__icon-holder">
            <i className="scale-slider__icon v2-icon v2-icon--small v2-icon--single-parent-family" id="3" name="singleParentFamily" onClick={this.handleClick} />
          </li>
        </ul>

        <input
          className="scale-slider__input"
          id="scale"
          type="range"
          min={0}
          max={Object.keys(options).length - 1}
          step='1'
          value={index}
          onChange={this.handleChange}
          autoFocus
          ref="scaleInput"
        />

        <label
          className="scale-slider__label"
          id="label"
          htmlFor="scale"
        >
          {options[Object.keys(options)[index]]}
        </label>
      </div>
    );
  }
}

ScaleSlider.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func,
  onClick: React.PropTypes.func
};

ScaleSlider.defaultPropTypes = {
  value: 'single'
};
