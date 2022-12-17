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
          // <ul>
          //   {items.map(item => (
          //     <li key={item.id}>
          //       {item.name}<br /><span className="text-muted">({item.type})</span>
          //     </li>
          //   ))}
          // </ul>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Primary Language</th>
                <th scope="col">Perspective</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr> */}
             {items.map(item => (
               <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.primary_language}</td>
                <td>{item.perspective}</td>
               </tr>
             ))}
            </tbody>
          </table>
      )}
      </React.Fragment>
    );
  }
}

let domContainer = document.querySelector('#compare_container');
ReactDOM.render(<Compare />, domContainer);
