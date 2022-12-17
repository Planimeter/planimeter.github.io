"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Compare = function (_React$Component) {
  _inherits(Compare, _React$Component);

  function Compare(props) {
    _classCallCheck(this, Compare);

    var _this = _possibleConstructorReturn(this, (Compare.__proto__ || Object.getPrototypeOf(Compare)).call(this, props));

    _this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    return _this;
  }

  _createClass(Compare, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch("/data/game-software.json").then(function (res) {
        return res.json();
      }).then(function (result) {
        _this2.setState({
          isLoaded: true,
          // items: result.items
          items: result
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      function (error) {
        _this2.setState({
          isLoaded: true,
          error: error
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          error = _state.error,
          isLoaded = _state.isLoaded,
          items = _state.items;

      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "h1",
            { className: "mb-3" },
            "Compare game software"
          )
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-3 col-xl-2" },
            React.createElement(
              "div",
              { className: "sticky-top pt-5" },
              React.createElement(
                "p",
                null,
                React.createElement(
                  "b",
                  null,
                  "Filters"
                )
              ),
              React.createElement(
                "p",
                { className: "mb-2" },
                "Type"
              ),
              React.createElement(
                "p",
                null,
                React.createElement(
                  "select",
                  {
                    className: "form-select",
                    name: "type"
                    // value={filters.type}
                    // onChange={this.handleFilterChange}
                    , disabled: true
                  },
                  React.createElement(
                    "option",
                    null,
                    "None"
                  ),
                  React.createElement(
                    "option",
                    null,
                    "Game engine"
                  ),
                  React.createElement(
                    "option",
                    null,
                    "Game framework"
                  )
                )
              ),
              React.createElement(
                "p",
                { className: "mb-2" },
                "Primary Language"
              ),
              React.createElement(
                "p",
                null,
                React.createElement(
                  "select",
                  {
                    className: "form-select",
                    name: "primary_language"
                    // value={filters.primary_language}
                    // onChange={this.handleFilterChange}
                    , disabled: true
                  },
                  React.createElement(
                    "option",
                    null,
                    "None"
                  )
                )
              ),
              React.createElement(
                "p",
                { className: "mb-2" },
                "Perspective"
              ),
              React.createElement(
                "p",
                null,
                React.createElement(
                  "div",
                  { className: "form-check" },
                  React.createElement("input", {
                    className: "form-check-input",
                    type: "checkbox",
                    value: "",
                    id: "perspective2d",
                    disabled: true
                  }),
                  React.createElement(
                    "label",
                    { className: "form-check-label", "for": "perspective2d" },
                    "2D"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "form-check" },
                  React.createElement("input", {
                    className: "form-check-input",
                    type: "checkbox",
                    value: "",
                    id: "perspective3d",
                    disabled: true
                  }),
                  React.createElement(
                    "label",
                    { className: "form-check-label", "for": "perspective3d" },
                    "3D"
                  )
                )
              ),
              React.createElement(
                "p",
                { className: "mb-2" },
                "Multiplayer Features"
              ),
              React.createElement(
                "p",
                null,
                React.createElement(
                  "div",
                  { className: "form-check" },
                  React.createElement("input", {
                    className: "form-check-input",
                    type: "checkbox",
                    value: "",
                    id: "local-multiplayer",
                    disabled: true
                  }),
                  React.createElement(
                    "label",
                    { className: "form-check-label", "for": "local-multiplayer" },
                    "Local multiplayer"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "form-check" },
                  React.createElement("input", {
                    className: "form-check-input",
                    type: "checkbox",
                    value: "",
                    id: "local-multiplayer",
                    disabled: true
                  }),
                  React.createElement(
                    "label",
                    { className: "form-check-label", "for": "local-multiplayer" },
                    "Split-screen support"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "form-check" },
                  React.createElement("input", {
                    className: "form-check-input",
                    type: "checkbox",
                    value: "",
                    id: "internet-play",
                    disabled: true
                  }),
                  React.createElement(
                    "label",
                    { className: "form-check-label", "for": "internet-play" },
                    "Internet play"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "form-check" },
                  React.createElement("input", {
                    className: "form-check-input",
                    type: "checkbox",
                    value: "",
                    id: "client-side-prediction",
                    disabled: true
                  }),
                  React.createElement(
                    "label",
                    {
                      className: "form-check-label",
                      "for": "client-side-prediction"
                    },
                    "Client-side prediction"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "form-check" },
                  React.createElement("input", {
                    className: "form-check-input",
                    type: "checkbox",
                    value: "",
                    id: "client-side-prediction",
                    disabled: true
                  }),
                  React.createElement(
                    "label",
                    {
                      className: "form-check-label",
                      "for": "client-side-prediction"
                    },
                    "Reconciliation"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "form-check" },
                  React.createElement("input", {
                    className: "form-check-input",
                    type: "checkbox",
                    value: "",
                    id: "client-side-prediction",
                    disabled: true
                  }),
                  React.createElement(
                    "label",
                    {
                      className: "form-check-label",
                      "for": "client-side-prediction"
                    },
                    "Entity interpolation"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "form-check" },
                  React.createElement("input", {
                    className: "form-check-input",
                    type: "checkbox",
                    value: "",
                    id: "lag-compensation",
                    disabled: true
                  }),
                  React.createElement(
                    "label",
                    { className: "form-check-label", "for": "lag-compensation" },
                    "Lag compensation"
                  )
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-9 col-xl-10" },
            error ? React.createElement(
              "div",
              { className: "pt-5" },
              "Error: ",
              error.message
            ) : !isLoaded ? React.createElement(
              "div",
              { className: "pt-5" },
              "Loading..."
            ) : React.createElement(
              "div",
              { className: "pt-5", style: { marginTop: "-.5rem" } },
              React.createElement(
                "table",
                { className: "table" },
                React.createElement(
                  "thead",
                  null,
                  React.createElement(
                    "tr",
                    null,
                    React.createElement(
                      "th",
                      { scope: "col" },
                      "#"
                    ),
                    React.createElement(
                      "th",
                      { scope: "col" },
                      "Name"
                    ),
                    React.createElement(
                      "th",
                      { scope: "col" },
                      "Type"
                    ),
                    React.createElement(
                      "th",
                      { scope: "col" },
                      "Primary Language"
                    ),
                    React.createElement(
                      "th",
                      { scope: "col" },
                      "Perspective"
                    )
                  )
                ),
                React.createElement(
                  "tbody",
                  null,
                  items.map(function (item) {
                    return React.createElement(
                      "tr",
                      { key: item.id },
                      React.createElement(
                        "th",
                        { scope: "row" },
                        item.id
                      ),
                      React.createElement(
                        "td",
                        null,
                        item.name
                      ),
                      React.createElement(
                        "td",
                        null,
                        item.type
                      ),
                      React.createElement(
                        "td",
                        null,
                        item.primary_language
                      ),
                      React.createElement(
                        "td",
                        null,
                        item.perspective
                      )
                    );
                  })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Compare;
}(React.Component);

var domContainer = document.querySelector("#compare_container");
ReactDOM.render(React.createElement(Compare, null), domContainer);