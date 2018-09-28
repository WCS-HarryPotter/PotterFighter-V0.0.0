import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.cardTitle}</CardTitle>
          <CardSubtitle>{props.cardSubtitle}</CardSubtitle>
          <CardText>{props.cardText}</CardText>
          <Button>{props.cardButton}</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;