const Product = (props) => {
    return(
        <div>
            <span>{props.name}</span>
            <span>{props.cipher}</span>
            <span>{props.length}</span>
            <span><progress value={props.ready}>{props.ready + "%"}</progress></span>
        </div>
    )
}