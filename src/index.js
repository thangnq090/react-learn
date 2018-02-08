import React from 'react';
import { render } from 'react-dom';

import Search from './component/search';
import Table from './component/table';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      searchTerm: ''
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({list : updatedList});
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="App">
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}>
        </Search>
        <Table 
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}>
        </Table>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
