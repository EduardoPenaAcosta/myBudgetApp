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
import ModalIngreso from './ModalIngreso'
import ModalGasto from './ModalGasto'

const Home = () => {

    const initialTransactions = [
        {
            
            title: 'Mercadona',
            timestamp: '25/02/22 10:25 A.M',
            coste: '- 25.34',
            key:String(Math.random())
        },
        {
            
            title: 'Ingreso',
            timestamp: '25/02/22 10:25 A.M',
            coste: '+ 25.34',
            key:String(Math.random())
        }
    ];

    const [transacciones, setTransacciones] = useState(initialTransactions);
    const [balance, setBalance] = useState(0);
    const [modalIngreso, setModalIngreso] = useState(false);
    const [modalGasto, setModalGasto] = useState(false);

    return(
        <>
            <Header/>
            <User />
            <CardSumRest 
                balance={balance}
                setModalIngreso={setModalIngreso}
                setModalGasto={setModalGasto}
            />
            <TextResume>Resumen de tu cuenta:</TextResume>
            <Transactions 
                transacciones={transacciones}
            />
            <ModalIngreso 
                modalIngreso={modalIngreso}
                setModalIngreso={setModalIngreso}
                setTransacciones={setTransacciones}
                balance={balance} 
                setBalance={setBalance}
                transacciones={transacciones}
            />
            <ModalGasto 
                modalGasto={modalGasto}
                setModalGasto={setModalGasto}
                setTransacciones={setTransacciones}
            />
        </>
        
    );

}

export default Home;