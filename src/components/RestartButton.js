function RestartButton(props) {
    return ( 
        <>
        <div>
            <button className='restart-button' onClick={props.RestartGame}>Restart</button>
        </div>
        </>
     );
}

export default RestartButton;