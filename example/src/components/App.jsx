import React from 'react';
import Theme from '@nib-components/theme';
import ScaleSlider from '@nib-components/react-scale-slider';

const options = {
  'Single': 'Me',
  'Couple': 'My partner and me',
  'Family': 'My partner, our kids and me',
  'SingleParentFamily': 'My kids and me'
};

class App extends React.Component {

  constructor(...args) {
    super(...args);

    this.state = {
      scale: 'Single'
    };

    this.handleScaleChange = this.handleScaleChange.bind(this);
  }

  handleScaleChange(option) {
    this.setState({scale: option});
  }

  render() {
    return (
      <Theme>
        <ScaleSlider
          value={this.state.scale}
          options={options}
          onChange={this.handleScaleChange}
        />
      </Theme>
    );
  }

}

export default App;
