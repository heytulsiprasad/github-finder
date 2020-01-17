import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ clearUsers, showClear, searchUsers, setAlert }) => {
  state = {
    text: ""
  };

  const onSubmit = e => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  const onChange = e => this.setState({ [e.target.name]: e.target.value });

  return (
    <div>
      <form onSubmit={this.onSubmit} className="form">
        <input
          type="text"
          name="text"
          value={this.state.text}
          onChange={this.onChange}
          placeholder="Search Users..."
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
