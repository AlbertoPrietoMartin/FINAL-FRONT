"use client"

type Props = {
    estatus: string,
    setEstatus: (value: string) => void
}

const FilterStatus = ({ estatus, setEstatus }: Props) => {

    const handleClick = () => {
        if (estatus === "") setEstatus("Alive")
        else if (estatus === "Alive") setEstatus("Dead")
        else if (estatus === "Dead") setEstatus("unknown")
        else setEstatus("")
    }

    return (
        <div>
            <button onClick={handleClick}>
                Estado: {estatus || "Todos"}
            </button>
        </div>
    )
}

export default FilterStatus