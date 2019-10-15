import React from "react";
import { ListGroup, ListGroupItem, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';


export default function CharacterCard(props) {

  const id = Number(props.id);
  // const { name, image, species, status, location, origin } = props.character;
  return (

    <Card className="character-card">
      
      <CardTitle style={{fontSize: '2rem', fontWeight: 'bold', paddingLeft: '3%'}}>{props.name}</CardTitle>
      <CardImg src={props.image} style={{borderRadius: '5px'}}>
      </CardImg>
      <CardBody>

        <ListGroup>
          <ListGroupItem>{props.name} is a(n) {props.species} that is currently {props.status}.</ListGroupItem>
          
          <ListGroupItem>Current Location: {props.location}</ListGroupItem>
          <ListGroupItem>Origin: {props.origin}</ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
}
