import { Component } from "react";
import { Form, InputGroup, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";




class BookList extends Component  {
    state={
       ricerca: null,
    }
  
  render() {
    
    return (
      <Row>
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Cerca Libro</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={e => this.setState({ricerca :  e.target.value  })}
        />
      </InputGroup>
      
        {/* faccio un filtro che controlla se nel titolo dei vari libri è incusa la striga che ho in state.ricerca */}
        {/* se passa la condizione mi faccio un map del nuovo array e ci creo le carte */}
        {this.state.ricerca ? this.props.category.filter(libro=>libro.title.toLowerCase().includes(this.state.ricerca.toLowerCase())).map(book => {
            
            return (
              
              <SingleBook book={book}/>
            )})
            
          // altrimenti creo tutte le carte della categoria
           : this.props.category.map(book => {
            
            return (
              <SingleBook book={book}/>
            );
          })}
      </Row>
    );
  }
}
export default BookList;
