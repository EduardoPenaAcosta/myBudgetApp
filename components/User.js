import React from 'react';

import {Image} from 'react-native'

import {
    ImageRadius,
    CardUser,
    HeaderTitle
} from '../style/style'

const User = () => {
    return(
        <>
            <CardUser>
                <ImageRadius source={require('../assets/user.jpeg')}/>
                <HeaderTitle>Bienvenido, Goyo</HeaderTitle>
            </CardUser>
        </>
    );
}

export default User;