import React from 'react';
import styled from 'styled-components';
import {Margin, Padding, p} from 'styled-components-spacing';
import Grid from 'styled-components-grid';
import colors from '@nib-styles/colors';

const Wrapper = styled.div`
  background-color: ${colors.sneezy};
  text-align: center;
`;

const IconWrapper = styled.div`
  position: relative;

  &:before,
  &:after {
    display: block;
    height: 2px;
    position: absolute;
    top: 50%;
    background-color: ${colors.grumpy};
    transform: translateY(-50%);
  }

  &:before {
    ${({first}) => !first && 'content: \'\';'}
    left: 0;
    right: 50%;
  }

  &:after {
    ${({last}) => !last && 'content: \'\';'}
    left: 50%;
    right: 0;
  }
`;

const IconButton = styled.button`
  ${p(0)}
  background-color: ${colors.sneezy};
  color: ${props => props.selected ? colors.elizabeth : colors.doc};
  border: none;
  position: relative;
  z-index: 1;
`;

const Label = styled.label`
  color: ${colors.doc};
  display: block;
  text-align: center;
  text-transform: uppercase;
`;

export default class ScaleSlider extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(option) {
    return () => this.props.onChange(option);
  }

  render() {
    const {value, options, autoFocus} = this.props;
    return (
      <Wrapper>
        <Padding all={{xs: '3', md: '4'}}>

          <Grid>
            {Object.keys(options).map((option, index) => {
              const selected = option === value;
              return (

                <Grid.Unit width={1 / Object.keys(options).length} key={option}>
                  <IconWrapper first={index === 0} last={index === Object.keys(options).length - 1}>
                    <IconButton
                      onClick={this.handleClick(option)}
                      selected={selected}
                      autoFocus={autoFocus && selected}
                    >
                      <Padding all={3}>
                        {option}
                      </Padding>
                    </IconButton>
                  </IconWrapper>
                </Grid.Unit>

              );
            })}
          </Grid>

          <Margin top={3}>
            <Label htmlFor="scale">
              {options[value]}
            </Label>
          </Margin>

        </Padding>
      </Wrapper>
    );
  }
}

ScaleSlider.propTypes = {
  value: React.PropTypes.string,
  onChange: React.PropTypes.func
};

ScaleSlider.defaultProps = {
  onChange: () => {/*do nothing*/}
};
