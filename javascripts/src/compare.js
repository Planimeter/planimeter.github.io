'use strict';

class Compare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("/data/game-software.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            // items: result.items
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    return (
      <React.Fragment>
        <h1>Compare game software</h1>
        {error ? (
          <div>Error: {error.message}</div>
        ) : !isLoaded ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name}<br /><span className="text-muted">({item.type})</span>
              </li>
            ))}
          </ul>
      )}
      </React.Fragment>
    );
  }
}

let domContainer = document.querySelector('#compare_container');
ReactDOM.render(<Compare />, domContainer);
