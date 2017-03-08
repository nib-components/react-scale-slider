import React from 'react';
import styled from 'styled-components';
import {Margin, Padding, p} from 'styled-components-spacing';
import Grid from 'styled-components-grid';
import colors from '@nib-styles/colors';

const Wrapper = styled.div`
  background-color: ${colors.sneezy};
  font-family: ${props => props.theme.fonts.copy};
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

const Option = ({autoFocus, first, icon, last, selected, onClick}) => (
  <IconWrapper first={first} last={last}>
    <IconButton
      onClick={onClick}
      selected={selected}
      autoFocus={autoFocus}
    >
      <Padding all={3}>
        {icon}
      </Padding>
    </IconButton>
  </IconWrapper>
);


export default class ScaleSlider extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(option) {
    return () => this.props.onChange(option);
  }

  getSelectedLabel() {
    let selected = '';
    React.Children.forEach(this.props.children, child => {
      if (this.props.value === child.props.value) {
        selected = child.props.label;
      }
    });
    return selected;
  }

  render() {
    const {value, children, autoFocus} = this.props;
    return (
      <Wrapper>
        <Padding all={{xs: '3', md: '4'}}>

          <Grid>
            {React.Children.map(children, (child, index) => {
              const selected = value === child.props.value;
              return (
                <Grid.Unit width={1 / React.Children.count(children)} key={child.props.value}>
                  {React.cloneElement(child, {
                    autoFocus: autoFocus && selected,
                    first: index === 0,
                    last: index === React.Children.count(children) - 1,
                    selected,
                    onClick: this.handleClick(child.props.value)
                  })}
                </Grid.Unit>
              );
            })}
          </Grid>

          <Margin top={3}>
            <Label htmlFor="scale">
              {this.getSelectedLabel()}
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

ScaleSlider.Option = Option;
