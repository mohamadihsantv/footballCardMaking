import {React, useEffect } from "react";
import { PlayerList } from "./playelist";
import {Card} from "react-bootstrap";
import { TeamList } from "./Teamlist";

import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addPlayer, addTeam } from "../action/footballaction";
import { Navigate, useNavigate } from "react-router-dom";
import { teamReducer } from "../reducer/footballreducer";
import { LeaugesList } from "./list";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //add team
  const onAddTeam = (id,name,logo) => {
    const teamData1={id:id,logo:logo,name:name}
    fetch('http://localhost:3000/team', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(teamData1),
})
    // dispatch(addTeam(teamData));
  };

  //add player
  // const onAddPlayer=()=>{
  //   dispatch(addPlayer());
  // }

  const Players = PlayerList.map((player) => {
    return (
      <>
        <div style={{ marginBottom: "50px",paddingLeft:"1.3cm" }} className="shadowcard ">
          <Card
            className="card h-100 text-center p-3 m-2 border cardimgbackground"
            style={{ width: "18rem" }}
          >
            <Card.Img variant="top" className="teamimg" src={player.photo} height250px
            />
            <Card.Body className="card-body bdcolor">
              <div className=" text-center cardtxt">
              <Card.Title>{player.name}</Card.Title>
                <Card.Text>{player.position}</Card.Text>
                  <Button  variant="primary">
                    ADD TO TEAM
                  </Button>
              </div>
              {/* <div><Button onClick={()=>{onAddPlayer(player);navigate("/players")}}>Add Player</Button></div> */}
            </Card.Body>
          </Card>
        </div>
      </>
    );
  });
  const teams = TeamList.map((p) => {
    return (
      <>
        <div style={{ marginBottom: "50px" ,paddingLeft:"1.3cm"  }} className="shadowcard">
          <Card
            className="card h-100 text-center p-3 m-2 cardimgbackground"
            style={{ width: "18rem" }}
          >
            <Card.Img
              variant="top"
              className="teamimg"
              src={p.logo}
              height250px
            />
            <Card.Body className="card-body bdcolor">
              <div className=" text-center cardtxt">
                <Card.Title>{p.name}</Card.Title>
              </div>
              {/* <div>
                
               <h4> Players:</h4>
                
              </div>
              {
                p.players.map(player=>{
                  return <div><h4>{player.name}</h4></div>
                })
                
              } */}

              <div className="addcartbtn">
                {" "}
                {/* <form onSubmit={()=>{
                  onAddTeam(p.name)
                }}>
              
                <input type="text"value={p.name}/>name
               <input type="submit">ok</input>
                </form> */}
                <Button
                  onClick={() => {
                    onAddTeam(p.id,p.name,p.logo);
                  }}
                >
                  Add team
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  });

 
  return (
    <>
      <div className="cardbackground">
      {/* <div className="d-flex flex-wrap border">{leagues}</div> */}
      <div className="d-flex flex-wrap border team-card">{teams}</div>
      <div className="d-flex flex-wrap border">{Players}</div>
      </div>
      
    </>
  );
}