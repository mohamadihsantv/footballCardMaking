import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Button} from "react-bootstrap";
import {Card} from "react-bootstrap";
import { addPlayerToTeam } from "../action/footballaction";
import {Dropdown} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import { useNavigate } from "react-router-dom";



export default function Players() {
  const [player, setPlayer] = useState([]);
  const [teamid, setteamid] = useState();
  const [show, setShow] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
    setSelectedTeam({});
  };
  const handleShow = (player) => {
    setPlayer(player);
    setShow(true);
  };

  const playerData = useSelector((state) => {
    return state.teamsReducer.playerList;
  });
  useEffect(() => {
    // console.log("state", playerData);
  }, [playerData]);

  const teamdData = useSelector((state) => {
    return state.teamsReducer.teams;
  });
  console.log("teamDtata", teamdData);

  const addPlayer = (player) => {
    dispatch(addPlayerToTeam(selectedTeam, player));
    setSelectedTeam({});
    handleClose();
  };
  const onAddPlayer = (team) => {
    setSelectedTeam(team);
  };
  return (
    <>
    
      {/* <h3 className="heding">PLAYERS</h3> */}
      <div style={{ display: "flex", flexWrap: "wrap" }} className='playerstyle'>
        {playerData?.map((player) => {
          //console.log("playerdata", playerData);
          return (
            <>
              <Card
                className="card h-100 text-center p-3 m-2 cardback"
                style={{ width: "18rem" }}
              >
                <Card.Img className="teamimg" variant="top" src={player.photo}
                />
                <Card.Body>
                <Card.Title>{player.name}</Card.Title>
                <Card.Text>{player.position}</Card.Text>
                  <Button disabled={!player.available} variant="primary" onClick={() => handleShow(player)} onChange={(event) => {
                      const id = Number(event.target.value);
                      setteamid(id);
                    }}
                  >
                    ADD TO TEAM
                  </Button>
                </Card.Body>
              </Card>
            </>
          );
        })}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Player To Team</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {" "}
            {/* <Form.Select onClick={(event) => {
                      setSelectedTeam(event.target.value);
                      console.log("form", event.target.value);
                    }}>
              <option> Select Team</option>
              {teamdData?.map((team) => {
                return (
                  <option
                    value={team.id}
                    
                  >
                    {team.id}
                    <img src={team.logo} style={{ width: "30px" }} />
                    {team.name}
                  </option>
                );
              })}
            </Form.Select> */}

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select Team
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {teamdData?.map((team) => {
                  return (
                    <Dropdown.Item
                      href="#"
                      onClick={()=>{setSelectedTeam(team)}}
                    >
                      {team.id}
                      <img src={team.logo} style={{ width: "30px" }} />
                      {team.name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => addPlayer(player)}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
