import Alert from 'react-bootstrap/Alert';

function Welcome() {
  return (
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Choose one of the following books!
      </p>
      
    </Alert>
  );
}

export default Welcome;