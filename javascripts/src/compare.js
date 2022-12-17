'use strict';

class Compare extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Compare game software</h1>
        <p>Coming soon.</p>
      </React.Fragment>
    );
  }
}

let domContainer = document.querySelector('#compare_container');
ReactDOM.render(<Compare />, domContainer);
