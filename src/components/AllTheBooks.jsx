import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fantasy from "../data/books/fantasy.json";
import horror from "../data/books/horror.json"
import history from "../data/books/history.json"
import scifi from "../data/books/scifi.json"
import romance from "../data/books/romance.json"
import { Row, Col } from "react-bootstrap";



//  this.state.books.filter(x=>x.category===this.props.category).map()

class AllTheBooks extends Component  {
    state={
        horror:[...horror],
        history:[...history] ,
        scifi: [...scifi],
        fantasy:[...fantasy],
        romance:[...romance] 
    }
  
  render() {
    return (
      <Row>
        {/* faccio il map su state[nome array passato tramite props] */}
        {this.state[`${this.props.category}`].map(book => {
            
          return (
            <Col sm={4} md={3} lg={2} key={`book-${book.asin}`}>
              <Card >
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>Price: {book.price}$ </Card.Text>
                  <Button variant="primary">Take a look</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}
export default AllTheBooks;
