import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from './SearchStyle';
export class Search extends Component {
  searchUserName = e => {
  
    const name = e.currentTarget.value;
    this.props.contacts(name);
  };
  render() {
    return (
      <>
        <h3>Search Contacts</h3>
        <Input onChange={this.searchUserName} />
      </>
    );
  }
}
Search.propTypes = {
  contacts: PropTypes.func,
};
