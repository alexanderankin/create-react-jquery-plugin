import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: parseInt(props.value, 10),
      collapsed: false
    };
  }

  onClick = e => {
    this.setState(state => {
      state.value++; return state;
    });
  }

  render() {
    var { value, collapsed } = this.state;
    return (
      <div className="card text-center">
        <div className="card-header text-left">
          <span className="mr-2" style={{ marginBottom: 0 }}>Counter</span>
          <button
            type="button"
            className="btn btn-info btn-sm"
            onClick={() => this.setState({ collapsed: !collapsed })}
            >
            {this.state.collapsed ? 'Show' : 'Hide'}
          </button>
        </div>
        <div style={{ maxHeight: collapsed ? 0 : 1000, transition: 'max-height .25s' }}>
          <div className="card-body text-left" style={collapsed ? { visibility: 'hidden' } : {}}>
            <h4 className="card-title">Value</h4>
            <p className="card-text">The counter is now <b>{value}</b>. I was updated on {new Date() + ''}.</p>
            <button type="button" className="btn btn-info" onClick={this.onClick}>Increment</button>
          </div>
        </div>
      </div>
    );
  }
}
