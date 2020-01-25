import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false
    };
  }

  onClick = e => {
    this.props.increment();
  }

  render() {
    var { collapsed } = this.state;
    var { value, increment } = this.props;
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
            <button type="button" className="btn btn-info" onClick={increment}>Increment</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { value: state.value };
}

var mapDispatchToProps = {
  increment: () => ({ type: 'INCREMENT' })
};

var connectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export {
  connectedCounter as Counter,
};
