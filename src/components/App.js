import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateGrid } from '../store/actions';

import Board from './Board';

import '../styles/styles.scss'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { beginner: 4, intermediate: 8, expert: 12 };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { generateGrid } = this.props;
    let role = event.target.id;
    let grid = this.state[role];
    const rows = parseInt(grid);
    const cols = parseInt(grid);
    generateGrid(rows, cols);
  };

  headerNav() {
    return (
      <nav className="navbar navbar-light bg-white">
        <a className="navbar-brand">MineSweeper</a>
        <form className="form-inline">
            <button className="btn btn-primary" id="beginner" onClick={this.handleSubmit}> Beginner </button>
            <button className="btn btn-primary" id="intermediate" onClick={this.handleSubmit}> Intermediate </button>
            <button className="btn btn-primary" id="expert" onClick={this.handleSubmit}> Expert </button>
        </form>
      </nav>
    )
  }

  render() {
    return (
      <div className="container-fluid">
        {this.headerNav()}
        <Board />
      </div>
    );
  }
}

export default connect(
  null,
  { generateGrid }
)(App);
