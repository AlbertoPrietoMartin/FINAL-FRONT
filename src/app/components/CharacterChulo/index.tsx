import "./style.css";
import { Character } from "@/app/types/RicardoYMortirio";
import Link from "next/link";

const CharacterChulo = ({character}: {character: Character}) =>{
    return(
        <Link href={`/character/${character.id}`}>
            <div className ="ContainerChulangano">
                <img src = {character.image}/>
                <div className = "InfoContainer">
                    <h1>{character.name}</h1>
                    <p>{character.gender}</p>
                    <p>{character.status}</p>
                    <p>{character.origin.name}</p>
                </div>
            </div>
        </Link>
    )
};
export default CharacterChulo;