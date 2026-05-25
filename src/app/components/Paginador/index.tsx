import "./style.css";

const Paginador = ({next,prev,page,setPage}: {
    next: boolean,
    prev: boolean,
    page: number,
    setPage: (page: number) => void
}) => {

    return(
        <div className="PaginadorContainer">
            {prev && <div className="arrowContainer" onClick={()=>{
                setPage(page-1);
            }}><p>{"<"}</p></div>}
            
            <h1>{page}</h1>

            {next && <div className="arrowContainer" onClick={()=>{
                setPage(page+1);
            }}><p>{">"}</p></div>}

            {next && <div onClick={()=>{
                setPage(1);
            }}><p>{"Primera"}</p></div>}            

            {next && <div onClick={()=>{
                setPage(2);
            }}><p>{"Segunda"}</p></div>} 
            
            {next && <div onClick={()=>{
                setPage(3);
            }}><p>{"Tercera"}</p></div>}           


            {next && <div onClick={()=>{
                setPage(42);
            }}><p>{"Ultima"}</p></div>}       

            {next && <div onClick={()=>{
                setPage(41);
            }}><p>{"Penultima"}</p></div>}  

            {next && <div onClick={()=>{
                setPage(40);
            }}><p>{"Antepenultima"}</p></div>}         

        </div>
    )
}


export default Paginador;