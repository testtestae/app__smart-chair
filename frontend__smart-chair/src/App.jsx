import './App.css';
import Registration from "./components/registration/Registration";
import Authorization from "./components/authorization/Authorization"
import Classroom from "./components/classroom/Classroom"
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
    const dispatch = useDispatch();
    const cash = useSelector( state => state.cash);

    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
    }

    return (
        <div className="App">
            <Registration/>
            {/* <Authorization/> */}
            {/* <Classroom /> */}
        </div>
    );
}

export default App;
