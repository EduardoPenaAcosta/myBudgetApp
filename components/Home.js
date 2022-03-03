import React,{useState} from 'react';

import {Text} from 'react-native';

import {
    Container,
    TextResume
} from '../style/style';

import Header from './Header';
import User from './User';
import Transactions from './Transactions'
import CardSumRest from './CardSumRest'

const Home = () => {

    const [balance, setBalance] = useState(0);
    
    const initialTransactions = [
        {
            
            title: 'Mercadona',
            timestamp: '25/02/22 10:25 A.M',
            coste: '- 25.34'
        },
        {
            
            title: 'Ingreso',
            timestamp: '25/02/22 10:25 A.M',
            coste: '+ 25.34'
        }
    ];

    const [transacciones, setTransacciones] = useState(initialTransactions);


    return(
        <>
            <Header/>
            <User />
            <CardSumRest 
                balance={balance}
            />
            <TextResume>Resumen de tu cuenta:</TextResume>
            <Transactions 
                transacciones={transacciones}
            />
        </>
        
    );

}

export default Home;