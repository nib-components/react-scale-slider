'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var options = {
  'single': 'Me',
  'couple': 'Me and my partner',
  'family': 'Me, my partner and our kids',
  'singleParentFamily': 'Me and my kids'
};

var ScaleSlider = (function (_React$Component) {
  _inherits(ScaleSlider, _React$Component);

  function ScaleSlider(props) {
    _classCallCheck(this, ScaleSlider);

    _get(Object.getPrototypeOf(ScaleSlider.prototype), 'constructor', this).call(this, props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  _createClass(ScaleSlider, [{
    key: 'handleChange',
    value: function handleChange(event) {
      var index = event.target.value;
      this.props.onChange(Object.keys(options)[index]);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      var index = event.target.id;
      this.props.onChange(Object.keys(options)[index]);
      this.refs.scaleInput.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var value = this.props.value;

      var index = Object.keys(options).indexOf(value);

      //throw an error if value is not a valid option
      (0, _invariant2['default'])(index !== -1, 'Invalid value "' + value + '"');

      return _react2['default'].createElement(
        'div',
        { className: 'scale-slider' },
        _react2['default'].createElement(
          'ul',
          { className: 'scale-slider__icons' },
          _react2['default'].createElement(
            'li',
            { className: 'scale-slider__icon-holder' },
            _react2['default'].createElement('i', { className: 'scale-slider__icon v2-icon v2-icon--small v2-icon--single', id: '0', name: 'single', onClick: this.handleClick })
          ),
          _react2['default'].createElement(
            'li',
            { className: 'scale-slider__icon-holder' },
            _react2['default'].createElement('i', { className: 'scale-slider__icon v2-icon v2-icon--small v2-icon--couple', id: '1', name: 'couple', onClick: this.handleClick })
          ),
          _react2['default'].createElement(
            'li',
            { className: 'scale-slider__icon-holder' },
            _react2['default'].createElement('i', { className: 'scale-slider__icon v2-icon v2-icon--small v2-icon--family', id: '2', name: 'family', onClick: this.handleClick })
          ),
          _react2['default'].createElement(
            'li',
            { className: 'scale-slider__icon-holder' },
            _react2['default'].createElement('i', { className: 'scale-slider__icon v2-icon v2-icon--small v2-icon--single-parent-family', id: '3', name: 'singleParentFamily', onClick: this.handleClick })
          )
        ),
        _react2['default'].createElement('input', {
          className: 'scale-slider__input',
          id: 'scale',
          type: 'range',
          min: 0,
          max: Object.keys(options).length - 1,
          step: '1',
          value: index,
          onChange: this.handleChange,
          autoFocus: true,
          ref: 'scaleInput'
        }),
        _react2['default'].createElement(
          'label',
          {
            className: 'scale-slider__label',
            id: 'label',
            htmlFor: 'scale'
          },
          options[Object.keys(options)[index]]
        )
      );
    }
  }]);

  return ScaleSlider;
})(_react2['default'].Component);

exports['default'] = ScaleSlider;

ScaleSlider.propTypes = {
  value: _react2['default'].PropTypes.string.isRequired,
  onChange: _react2['default'].PropTypes.func,
  onClick: _react2['default'].PropTypes.func
};

ScaleSlider.defaultPropTypes = {
  value: 'single'
};
module.exports = exports['default'];
//# sourceMappingURL=index.js.map