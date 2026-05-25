"use client"

type Props = {
    genero: string,
    setGenero: React.Dispatch<React.SetStateAction<string>>
}

const FilterGender = ({ genero, setGenero }: Props) => {

    const handleClick = () => {
        if (genero === "") setGenero("Female")
        else if (genero === "Female") setGenero("Male")
        else if (genero === "Male") setGenero("Genderless")
        else if (genero === "Genderless") setGenero("unknown")
    
        else setGenero("")
    }

    return (
        <div>
            <button onClick={handleClick}>
                Género: {genero || "Todos"}
            </button>
        </div>
    )
}

export default FilterGender;