import React from 'react';
import styled from 'styled-components';
import {Margin, Padding, p} from 'styled-components-spacing';
import Grid from 'styled-components-grid';
import Theme from '@nib-components/theme';
import colors from '@nib-styles/colors';

const Wrapper = styled.div`
  background-color: ${colors.sneezy};
`;

const IconButton = styled.button`
  ${p(0)}
  background-color: ${colors.white};
  color: ${props => props.selected ? colors.elizabeth : colors.doc};
  border: none;
`;

const Label = styled.label`
  color: ${colors.doc};
  display: block;
  text-align: center;
  text-transform: uppercase;
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

  handleChange(option) {
    this.props.value = option;
  }

  handleClick(option) {
    this.props.onChange(option);
  }

  render() {
    const {value, onFocus, onChange, onBlur, autoFocus, ...otherProps} = this.props;
    return (
      <Theme onChange={this.handleChange}>
        <Wrapper>
          <Padding all={{xs: '3', md: '4'}}>

            <Grid>
              {Object.keys(options).map(option => {
                const selected = option === value;
                return (

                <Grid.Unit width={1/Object.keys(options).length} key={option}>
                  <IconButton
                    onClick={this.handleClick(option)}
                    selected={value === option}
                    autoFocus={autoFocus && this.props.value === option}
                  >
                    <Padding all={3}>
                      {option}
                    </Padding>
                  </IconButton>
                </Grid.Unit>
                )}
              )}
            </Grid>

            <Margin top={3}>
              <Label htmlFor="scale">
                {options[value]}
              </Label>
            </Margin>

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
