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
          onChange={this.handleScaleChange}
        >
          <ScaleSlider.Option value="Single" icon="single" label="Me"/>
          <ScaleSlider.Option value="Couple" icon="couple" label="My partner and me"/>
          <ScaleSlider.Option value="Family" icon="family" label="My partner, our kids and me"/>
          <ScaleSlider.Option value="SingleParentFamily" icon="single-parent-family" label="My kids and me"/>
        </ScaleSlider>
      </Theme>
    );
  }

}

export default App;
