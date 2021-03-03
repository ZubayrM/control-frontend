import Operation from "./Operation";

const DetailInfo = (props) => {
    return(
        <div>
            <div>
                <span>маршрут: {props.route}</span>
            </div>
            <div>
                <span>материал: {props.material}</span>
            </div>
            <div>
                <span>изделие: {props.product}</span>
            </div>
        </div>
    )
}

export default DetailInfo