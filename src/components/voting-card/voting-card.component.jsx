import { Card, Button } from 'react-bootstrap'

const VotingCard = ({
  president: { name, logo, _id, votes },
  incrementVoteCount,
}) => {
  return (
    <div style={{ display: 'flex' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={logo} style={{ height: '40vh' }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button variant="success" onClick={() => incrementVoteCount(_id)}>
            Vote
          </Button>
        </Card.Body>
        <Card.Footer>Vote count: {votes} </Card.Footer>
      </Card>
    </div>
  )
}
export default VotingCard
