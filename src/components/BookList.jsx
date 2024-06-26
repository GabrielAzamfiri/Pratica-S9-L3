import { Component } from "react";
import { Row } from "react-bootstrap";
import SingleBook from "./SingleBook";




class BookList extends Component  {
    state={
       
    }
  
  render() {
    return (
      <Row>
        {/* faccio il map su state[nome array passato tramite props] */}
        {this.props.category.map(book => {
            
          return (
            <SingleBook book={book}/>
          );
        })}
      </Row>
    );
  }
}
export default BookList;
