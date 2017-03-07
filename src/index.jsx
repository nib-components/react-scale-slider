import React from 'react';
import invariant from 'invariant';
import styled from 'styled-components';
import {Padding} from 'styled-components-spacing';
import Grid from 'styled-components-grid';
import Theme from '@nib-components/theme';
import colors from '@nib-styles/colors';

const Wrapper = styled.div`
  background-color: ${colors.sneezy};
`;

const IconButton = styled.button`
  background-color: red;
  border: none;
`;

const options = {
  'Single': 'Me',
  'Couple': 'My partner and me',
  'Family': 'My partner, our kids and me',
  'SingleParentFamily': 'My kids and me'
};

export default class ScaleSlider extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const index = event.target.value;
    console.log('handleChange', event);
    this.props.onChange(Object.keys(options)[index]);
  }

  handleClick(event) {
    const index = event.target.id;
    console.log('handleClick', event);
    this.props.onChange(Object.keys(options)[index]);
  }

  render() {
    const {value, onFocus, onBlur, autoFocus, ...otherProps} = this.props;
    const index = Object.keys(options).indexOf(value);

    //throw an error if value is not a valid option
    invariant(index !== -1, `Invalid value "${value}"`);

    return (
      <Theme onChange={this.handleChange}>
        <Wrapper>
          <Padding all={{xs: '3', md: '4'}}>

          <Grid>
            <Grid.Unit width={1/4}>
              <IconButton id="1" onClick={this.handleClick}>
                <Padding all={3}>
                  Single
                </Padding>
              </IconButton>
            </Grid.Unit>

            <Grid.Unit width={1/4}>
              <IconButton id="2" onClick={this.handleClick}>
                <Padding all={3}>
                  Couple
                </Padding>
              </IconButton>
            </Grid.Unit>

            <Grid.Unit width={1/4}>
              <IconButton id="3" onClick={this.handleClick}>
                <Padding all={3}>
                  Family
                </Padding>
              </IconButton>
            </Grid.Unit>

            <Grid.Unit width={1/4}>
              <IconButton id="4" onClick={this.handleClick}>
                <Padding all={3}>
                  Single Parent Family
                </Padding>
              </IconButton>
            </Grid.Unit>

          </Grid>

            <label
              className="scale-slider__label"
              id="label"
              htmlFor="scale"
            >
              {options[Object.keys(options)[index]]}
            </label>
          </Padding>
        </Wrapper>
      </Theme>
    );
  }
}

ScaleSlider.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func
};

ScaleSlider.defaultProps = {
  value: 'Single',
  onChange: () => {/*do nothing*/}
};
