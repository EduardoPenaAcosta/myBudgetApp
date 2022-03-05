import React from 'react';
import {Text} from 'react-native/Libraries/Core/Devtools/parseErrorStack'

import {
    CardButtons,
    TextOptions,
    ButtonOptions,
    TextTitle
}from '../style/style'

const CardSumRest = ({balance,setModalIngreso,setModalGasto}) => {

    const onOpenIngreso = () => {
        setModalIngreso(true);
    }
    const onOpenGasto= () => {
        setModalGasto(true);
    }

    return(
        <>
        <CardButtons>
            <TextTitle>Balance: {balance}€</TextTitle>
            <TextOptions>Elija lo que desea hacer:</TextOptions>
            <ButtonOptions onPress={() => onOpenIngreso()}>
                <TextOptions>Ingreso</TextOptions>
            </ButtonOptions>
            <ButtonOptions onPress={() => onOpenGasto()}>
                <TextOptions>Gasto</TextOptions>
            </ButtonOptions>
        </CardButtons>
        </>
    );

}

export default CardSumRest;