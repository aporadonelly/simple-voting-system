import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './assets/scss/styles.scss'
import 'bootstrap/dist/css/bootstrap.css'

import VotingCard from './components/voting-card/voting-card.component'
import './App.css'

import Presidents from './lib/teams.json'

const App = () => {
  const [presidents, setPresident] = useState([])

  useEffect(() => {
    setPresident(Presidents)
  }, [])

  const incrementVoteCount = (presId) => {
    const President = Presidents.map((president) => {
      if (president._id === presId) {
        president.votes = president.votes + 1
      }
      return president
    })
    setPresident(President)
  }

  return (
    <div className="App">
      <h1>President Candidates</h1>
      <Container className="app">
        <Row>
          {Presidents.map((president) => {
            return (
              <Col md={4} key={president._id}>
                <VotingCard
                  president={president}
                  incrementVoteCount={(presId) => incrementVoteCount(presId)}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default App
