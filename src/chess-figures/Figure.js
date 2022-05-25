

function Figure(props) {
    // console.log(props)
    return ( 
        <>
        <span>
            <img src={props.image} alt={props.alt} style={{width:'70px'}}/>
        </span>
        </>
     );
}

export default Figure;