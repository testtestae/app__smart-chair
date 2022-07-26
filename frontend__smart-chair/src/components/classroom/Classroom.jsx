// компонент класса (школьного)
import React from 'react';
import './Classroom.css';
import DeskButtonGroup from './components/deskButtonGroup/DeskButtonGroup'
import { useSelector } from 'react-redux';

const Classroom = () => {
    const desks = useSelector( state => state.desks);

    // console.log(desks);

    return (
        <div className='Classroom'>
            <div className="bounding_container">

                <main className='Classroom__main'>
                    {desks.map( (row, rowIndex) => {
                        
                        return(
                            <div className={"Classroom__row-" + String(rowIndex + 1)}>
                                {
                                    row.map(
                                        (desk, deskIndex)=>{
                                            return( <DeskButtonGroup row={rowIndex + 1} desk={deskIndex + 1} payload={desk}/>)
                                        }
                                    )
                                }
                                {/* <DeskButtonGroup row={rowIndex + 1} payload={row} />  */}
                                {/* {
                                    row.map((desk, deskIndex) => {
                                        console.log(desk);
                                        return( <DeskButtonGroup row={rowIndex + 1} desk={deskIndex + 1} payload={desk} /> )
                                    })
                                } */}
                            </div>
                        )
                        
                    })}
                    {/* <DeskButtonGroup /> */}
                </main>
                <footer>

                </footer>

            </div>
        </div>
    );
}

export default Classroom;