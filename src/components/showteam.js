import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Button} from "react-bootstrap";
import {Card} from "react-bootstrap";
import { addPlayerToTeam } from "../action/footballaction";
import {Dropdown} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import ReactNotifications from 'react-notifications-component';
import { json, useNavigate } from "react-router-dom";



export default function ShowTeam() {
 
  const[team,setTeam]=useState([])
  const[notification,setNotification]=useState(false);


 
  useEffect(() => {
    // console.log("state", playerData);
    loadTeam();
  }, [team.length>0]);

 function loadTeam(){
    fetch('http://localhost:3000/team').then((response) => response.json())
    .then((data) =>{ setTeam(data) ;console.log(data,'console')})
  }
  
 const deleteTeam=(teamId)=>{
  console.log("teamId",teamId)
    fetch(`http://localhost:3000/team/${teamId}`, {
      method: 'DELETE'
      }).then((response) => response.json())
    .then((data) =>{ console.log(data,'console')
  if(data){
   setNotification(true);
  }else{
    setNotification(false);
  }
  })
    loadTeam();
  }

  return(
    <>
    <div className="team-style">
    {
      team.map((team)=>{
        return(
          <>
          {notification&&
          <div class="alert alert-danger" role="alert">
           Deleted Successfully
           </div>
          }
         <Card
                className="card h-100 text-center p-3 m-2 cardback" style={{ width: "18rem" }}>
                <Card.Img variant="top" className="teamimg" src={team.logo} height250px />
                <Card.Body className="card-body">
                  <div className=" text-center cardtxt">
                    <Card.Title>{team.name}</Card.Title>
                    <Button onClick={()=>{
                      deleteTeam(team.id)
                    }}> delete</Button>
                    </div>
                </Card.Body>
              </Card>
             
          </>
        )
      })
    }
    </div>
    </>
  )
}