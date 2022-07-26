import { useState } from 'react';
import './UserButtonGroup.css'

const UserButtonGroup = (props) => {
return(
<div className='user-button-group'>
{console.log(props.payload)}
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.75 75.5C6.75 75.5 0.5 75.5 0.5 69.25C0.5 63 6.75 44.25 38 44.25C69.25 44.25 75.5 63 75.5 69.25C75.5 75.5 69.25 75.5 69.25 75.5H6.75ZM38 38C42.9728 38 47.7419 36.0246 51.2583 32.5083C54.7746 28.9919 56.75 24.2228 56.75 19.25C56.75 14.2772 54.7746 9.50806 51.2583 5.99175C47.7419 2.47544 42.9728 0.5 38 0.5C33.0272 0.5 28.2581 2.47544 24.7417 5.99175C21.2254 9.50806 19.25 14.2772 19.25 19.25C19.25 24.2228 21.2254 28.9919 24.7417 32.5083C28.2581 36.0246 33.0272 38 38 38Z"
            fill="#026537" />
    </svg>

    <select name="" id="">
        <option value="">--пусто--</option>
        <option value="">asdff</option>
        <option value="">asdfff</option>
        <option value="" selected>asdffff</option>
    </select>
</div>
)
}

export default UserButtonGroup;