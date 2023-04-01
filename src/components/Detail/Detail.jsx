import React, { Component, useEffect } from 'react'
import { useParams} from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react'


export default function Details (){
  const {id} = useParams();

  const [character,setCharacter]=useState({})

  useEffect(()=>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response)=> setCharacter(response.data)
    );
  },[]);

  return(
    <div>
      
        {character.name ? (
      <>
        <h2>{character.name}</h2>
        <p>{character.status}</p>
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <p>{character.origin?.name}</p>
        <img src={character.image} alt="img" />
      </>
        ) :  (
          <h3>Loading...</h3>
    )}
    </div>
  );
};

