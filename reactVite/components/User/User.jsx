import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const { userid } = useParams() // return object;   need this to get userid from Router in main.jsx -
    return (
        <div>
            <h1> User ID: {userid} </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis, perferendis exercitationem omnis quam repudiandae ex laborum, eum inventore ad eveniet! Illum neque quibusdam velit eveniet possimus ipsum voluptas quidem.</p>
        </div>
    );
}

export default User;
