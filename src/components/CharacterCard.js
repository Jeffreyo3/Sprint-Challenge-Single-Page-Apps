import React from "react";
import { ListGroup, ListGroupItem, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default function CharacterCard(props) {

  const id = Number(props.id);
  const { name, image, species, status, location, origin } = props.character;
  return (

    <Card>
      <CardImg src={image}>
        <NavLink to={`/character/${id}`} />
      </CardImg>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>A {species} that is {status}</CardText>
        
        <ListGroup>
          <ListGroupItem>Location: {location}</ListGroupItem>
          <ListGroupItem>Origin: {origin}</ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
  
}
