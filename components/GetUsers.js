import React, { useState } from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { supabase } from "../utils/Utils";

function GetUsers() {
  const [users, setUsers] = useState();
  const [showUsers, setShowUsers] = useState(false);

  async function getUsers() {
    const res = await supabase.from("profiles").select();
    setUsers(res.data);
  }

  return (
    <div>
      <Button
        variant="success"
        onClick={() => {
          getUsers();
          setShowUsers(!showUsers);
        }}
      >
        {!showUsers ? "Show registered users" : "Hide registered users"}
      </Button>
      {showUsers &&
        users &&
        users.map((user) => (
          <Card key={user.id} className="mt-3 mb-3" style={{ width: "15rem" }}>
            <Card.Img variant="top" src={user.avatar} />
            <Card.Body>
              <Card.Title>{user.first_name + " " + user.last_name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem> Email: {user.email}</ListGroupItem>
            </ListGroup>
          </Card>
        ))}
    </div>
  );
}
export default GetUsers;
