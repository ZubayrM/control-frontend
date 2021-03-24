const PlanDetail = (props) => {
    return (
        <div>
            <div>
                <span>{props.name}</span>
            </div>
            <div>
                <span>{props.cipher}</span>
            </div>
            <div>
                <span>{props.status}</span>
            </div>
        </div>
    )
}

export default PlanDetail