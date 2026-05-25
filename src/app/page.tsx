"use client";

import { useEffect, useState } from "react";
import { ResultsCharacter } from "./types/RicardoYMortirio";
import api from "@/api/api";
import CharacterChulo from "./components/CharacterChulo";
import Paginador from "./components/Paginador";
import FilterStatus from "./components/FilterStatus";
import FilterGender from "./components/FilterGender";
import "./style.css";

const PageCharacter =() =>{
    
    const [resultCharacter, setResultCharacter] = useState<ResultsCharacter|null>(null);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState("");
    const [page,setPage] = useState(1);
    const [inputValue, setInputValue] = useState("");
    const [search, setSearch] = useState("");
    const [estatus, setEstatus] = useState("");
    const [genero, setGenero] = useState("");

    const getCharacters = async(page?: number, name?: string, estatus?: string, genero?: string)=>{
        
        setError("");

        try{
            await api.get(`/character?page=${page}&name=${name ?? ""}&status=${estatus ?? ""}&gender=${genero ?? ""}`).then((e)=>{
                const {data}: {data:ResultsCharacter}=e;
                setResultCharacter(data);
                setLoading(false);
            }).finally(()=>{
                setLoading(false);
            })
        }catch(e:any){
            setResultCharacter(null);
            setError(String(e));
        }
    }

    useEffect(()=>{
        getCharacters(page, search, estatus, genero);
    },[page, search, estatus, genero]);

    useEffect(()=>{
        setPage(1);
    },[search, estatus, genero]);

    if(loading){
        return <p>Loading...</p>
    }

    return(
        <div>
            <div className = "SearchContainer">
                <input 
                    value = {inputValue}
                    onChange = {(e=>setInputValue(e.target.value))}
                    onKeyDown={(e) => { if(e.key === "Enter") setSearch(inputValue); }}
                    placeholder="Buscar personajes..."
                />
                <button onClick={()=> setSearch(inputValue)}>Search</button>
            </div>

            <div className="FiltersContainer">
                <FilterStatus estatus={estatus} setEstatus={setEstatus}/>
                <FilterGender genero={genero} setGenero={setGenero}/>
            </div>

            {!resultCharacter && search && <p>No se encontraron personajes</p>}

            <div className = "CharactersContainer">
                {resultCharacter && resultCharacter.results.map((e)=>(
                    <CharacterChulo key={e.id} character={e}/>
                ))}

                <Paginador next={!!resultCharacter?.info.next}prev={!!resultCharacter?.info.prev}page={page} setPage={(e)=>{
                    setPage(e);
                }}/>
            </div>
        </div>
    )
};

export default PageCharacter;