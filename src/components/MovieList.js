function MovieList(props){

    return(
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.categoria}</td>
                <td>{props.descripcion}</td>
            </tr>
        </>
    )
}

export default MovieList;
