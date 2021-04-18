import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.nameHandler}/>
            <h1>This is {props.name} </h1>
            <h4>Age is {props.age}</h4>
            <button onClick={props.nameHandler}>Name Change</button>
        </div>
    );
};

export default UserInput;