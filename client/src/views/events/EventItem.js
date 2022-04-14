import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";

const EventItem = ({ event }) => {
  console.log(event);
  const { _id, name, description } = event;
  return (
    <div className="col-12 col-md-6 mt-2">
      <Card>
        <Link to={`/event-detail/${_id}`}>
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText >{description}</CardText>
          </CardBody>
        </Link>
      </Card>
    </div>
  );
}

export default EventItem;