"use client";

import { useEffect, useState, use } from "react";
import { Character } from "@/app/types/RicardoYMortirio";
import api from "@/api/api";

const PageCharacterDetail = ({params}: {params: Promise<{id: string}>}) => {

    const {id} = use(params);
    const [character, setCharacter] = useState<Character|null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        api.get(`/character/${id}`).then((e)=>{
            setCharacter(e.data);
        }).finally(()=>{
            setLoading(false);
        });
        
    },[id]);

    if(loading) return <p>Loading...</p>
    if(!character) return <p>Personaje no encontrado</p>

    return(
        <div>
            <img src={character.image}/>
            <h1>{character.name}</h1>
            <p>ID: {character.id}</p>
            <p>Género: {character.gender}</p>
            <p>Estado: {character.status}</p>
            <p>Especie: {character.species}</p>
            <p>Origen: {character.origin.name}</p>
            <p>Localización: {character.location.name}</p>
        </div>
    )
};
export default PageCharacterDetail;