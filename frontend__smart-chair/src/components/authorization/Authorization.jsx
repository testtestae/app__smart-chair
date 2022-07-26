// компонент регистрации
// import React from 'react';
import './Authorization.css';
import logo1 from './src/img/logo1.png'

const Authorization = () => {
return (
<div className="Authorization">
        <div className="Authorization__container bounding_container">
            <form className='Authorization__form form'>
                <label htmlFor='Authorization__login'>Логин</label>
                <input type="text" className="login" id='Authorization__login' />

                <br />

                <label htmlFor='Authorization__password'>Пароль</label>
                <input type="text" className="password" id='Authorization__password' />

                <br />
                <input type="submit" className='Button' value="Войти" />
            </form>
            <div className='Authorization__title'>
                <h2>
                    Комплекс по формированию правильной осанки и контроля прилежания у детей
                </h2>
            </div>
        </div>

</div>
);
}

export default Authorization;