import Card from 'react-bootstrap/Card'

export default function GetHubCard() {
    return (
            <Card style={{ textAlign:"center" }}>
                <Card.Body>
                    <Card.Title>GitHub User MGCHAMPLIN</Card.Title>
                    <p></p>
                    <Card.Img variant="top" src="./me.jpg" />
                    <Card.Text>
                    I'm a former embedded systems programmer who's branching out to learn full-stack development.
                    </Card.Text>
                </Card.Body>
            </Card>
    )
}