import style from "./PlanDetail.module.css"
const PlanDetail = (props) => {
    return (
        <div className={style.detail}>
            <div className={style.name}>
                <span>{props.name}</span>
            </div>
            <div className={style.cipher}>
                <span>{props.cipher}</span>
            </div>
            <div className={style.size}>
                <span>{props.sizeNotDone}</span>
            </div>
            <div className={style.sizeInWork}>
                <span>{props.sizeInWork}</span>
            </div>
            <div className={style.sizeCompleted}>
                <span>{props.sizeCompleted}</span>
            </div>
        </div>
    )
}

export default PlanDetail