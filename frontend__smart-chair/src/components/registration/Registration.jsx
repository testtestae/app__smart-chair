import React from 'react';
import './Registration.css';
import axios from 'axios'
import { useEffect } from 'react';

const Registration = () => {
    let [classGroupList, setClassGroupList] = React.useState([]);
    
    const [firstName, setFirstName] = React.useState('');
    const [secondName, setSecondName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const [classGroup, setClassGroup] = React.useState('');
    const [roles, setRoles] = React.useState(['child']);
    
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');



    useEffect( () => {
        axios.post("http://localhost:8000/api/find_education_organization_by_id",{
            "schoolId": "61d831ec060f5153a1e3143d"
        }).then( res => {
            setClassGroupList(res.data.classGroups);
            console.log(classGroupList);
        })
        .catch(function (error) {
            console.error("AXIOS SCHOOL SEARCH ERROR!");
            console.error(error);
        });
    }, [] )

    
    

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
    //   console.log(e.target);
    

      axios.post('http://localhost:8000/api/add_child', {
          firstName
          ,secondName
          ,email
          ,classGroup
          ,roles
          ,username
          ,password
        })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error("AXIOS ERROR!");
        console.error(error);
      });
    //   api.login(email, password);
    };

    return (
<div className="Registration">
    <div className="Registration__container">
        <form 
            onSubmit={handleSubmit}
            className='registration-form'
        >

            <label htmlFor='first-name'>Имя</label>
            <input type="text" id='first-name' name="first-name" value={firstName} onChange={e => setFirstName(e.target.value)}/>

            <label htmlFor='second-name'>Фамилия</label>
            <input type="text" id='second-name' name="second-name" value={secondName} onChange={e => setSecondName(e.target.value)} />

            <label htmlFor='email'>Mail</label>
            <input type="email" id='email' name="email" value={email} onChange={e => setEmail(e.target.value)} />

            <label htmlFor='Classes'>Класс</label>
            <select id='classes' className='Classes' value={classGroup} onChange={e => setClassGroup(e.target.value)}>
                <option selected></option>

                {classGroupList.map( (elem, elemId) => {
                    {console.log(elem)}
                    return(<option value={elem.currentClassNumber}>{elem.currentClassNumber}</option>)
                } )}
            </select>

            <label htmlFor='username'>Логин</label>
            <input type="text" id='username' name="username" value={username} onChange={e => setUsername(e.target.value)} />

            <label htmlFor='password'>Пароль</label>
            <input type="password" id='password' name="password" value={password} onChange={e => setPassword(e.target.value)} />

            <button type='submit' className='Button'>Регистрация</button>
        </form>
    </div>

</div>
);
}

export default Registration;