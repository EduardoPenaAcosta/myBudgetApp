import React from 'react';
import {Text} from 'react-native/Libraries/Core/Devtools/parseErrorStack'

import {
    CardButtons,
    TextOptions,
    ButtonOptions,
    TextTitle
}from '../style/style'

const CardSumRest = ({balance}) => {
    return(
        <>
        <CardButtons>
            <TextTitle>Balance: {balance}€</TextTitle>
            <TextOptions>Elija lo que desea hacer:</TextOptions>
            <ButtonOptions>
                <TextOptions>Ingreso</TextOptions>
            </ButtonOptions>
            <ButtonOptions>
                <TextOptions>Gasto</TextOptions>
            </ButtonOptions>
        </CardButtons>
        </>
    );

}

export default CardSumRest;