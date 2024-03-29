"use strict";

class Compare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("/data/game-software.json")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            // items: result.items
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    return (
      <React.Fragment>
        <div className="row">
          <h1 className="mb-3">Compare game software</h1>
        </div>
        <div className="row">
          <div className="col-md-3 col-xl-2">
            <div className="sticky-top pt-5">
              <p>
                <b>Filters</b>
              </p>
              <p className="mb-2">Type</p>
              <p>
                <select
                  className="form-select"
                  name="type"
                  // value={filters.type}
                  // onChange={this.handleFilterChange}
                  disabled
                >
                  <option>None</option>
                  <option>Game engine</option>
                  <option>Game framework</option>
                </select>
              </p>
              <p className="mb-2">Primary Language</p>
              <p>
                <select
                  className="form-select"
                  name="primary_language"
                  // value={filters.primary_language}
                  // onChange={this.handleFilterChange}
                  disabled
                >
                  <option>None</option>
                </select>
              </p>
              <p className="mb-2">Perspective</p>
              <p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="perspective2d"
                    disabled
                  />
                  <label className="form-check-label" for="perspective2d">
                    2D
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="perspective3d"
                    disabled
                  />
                  <label className="form-check-label" for="perspective3d">
                    3D
                  </label>
                </div>
              </p>
              <p className="mb-2">Multiplayer Features</p>
              <p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="local-multiplayer"
                    disabled
                  />
                  <label className="form-check-label" for="local-multiplayer">
                    Local multiplayer
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="local-multiplayer"
                    disabled
                  />
                  <label className="form-check-label" for="local-multiplayer">
                    Split-screen support
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="internet-play"
                    disabled
                  />
                  <label className="form-check-label" for="internet-play">
                    Internet play
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="client-side-prediction"
                    disabled
                  />
                  <label
                    className="form-check-label"
                    for="client-side-prediction"
                  >
                    Client-side prediction
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="client-side-prediction"
                    disabled
                  />
                  <label
                    className="form-check-label"
                    for="client-side-prediction"
                  >
                    Reconciliation
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="client-side-prediction"
                    disabled
                  />
                  <label
                    className="form-check-label"
                    for="client-side-prediction"
                  >
                    Entity interpolation
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="lag-compensation"
                    disabled
                  />
                  <label className="form-check-label" for="lag-compensation">
                    Lag compensation
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="server-browser"
                    disabled
                  />
                  <label className="form-check-label" for="server-browser">
                    Server browser
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="text-chat"
                    disabled
                  />
                  <label className="form-check-label" for="text-chat">
                    Text chat
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="voice-chat"
                    disabled
                  />
                  <label className="form-check-label" for="voice-chat">
                    Voice chat
                  </label>
                </div>
              </p>
            </div>
          </div>
          <div className="col-md-9 col-xl-10">
            {error ? (
              <div className="pt-5">Error: {error.message}</div>
            ) : !isLoaded ? (
              <div className="pt-5">Loading...</div>
            ) : (
              <div className="pt-5" style={{ marginTop: "-.5rem" }}>
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
                    {items.map((item) => (
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
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

let domContainer = document.querySelector("#compare_container");
ReactDOM.render(<Compare />, domContainer);
