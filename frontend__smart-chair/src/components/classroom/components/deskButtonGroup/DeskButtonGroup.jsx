import UserButtonGroup from './components/userButtonGroup/UserButtonGroup';
import './DeskButtonGroup.css'

const DeskButtonGroup = (props) => {
    
    // console.log(props);

    return(
        <div className="card">
            <h3 className='card__title'>Ряд {props.row} парта {props.desk}</h3>
            <div className="card__chairs">
            {
                props.payload.map((chair, chairIndex)=>{
                    return(
                        <UserButtonGroup row desk payload={chair} />
                    )
                })
            }
            </div>
        </div>
    )
}

export default DeskButtonGroup;