import React, {Component} from 'react';
const axios = require('axios');


class Books extends Component 
{

  state = {
    books: []
  }

  loadBooks = event => {
    axios.get('http://127.0.0.1:8000/api/books/', {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("JWTToken")}`
      },
      book: this.state.credentials
    })
    .then(data => this.setState({books: data.conversations}))
    .catch(error => console.log(error))
  }

  render()
  {
    return (
      <div>
        <h1>Books</h1>
        {this.state.books.map(book => {return <h3 key={book.id}>{book.title}</h3>})}

        <button onClick={this.loadBooks}>Load Books</button>
      </div>
    );
  }
}

export default Books;
