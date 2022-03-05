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
import ModalEditar from './ModalEditar'

const Home = () => {

    const initialTransactions = [
        {
            
            title: 'Mercadona',
            timestamp: '25/02/22 10:25 A.M',
            coste: '- 25.34',
            description:'Gasto en supermercado Mercadona La Cuesta',
            key:String(Math.random())
        },
        {
            
            title: 'Ingreso',
            timestamp: '25/02/22 10:25 A.M',
            description:'Ingreso de dinero',
            coste: '+ 25.34',
            key:String(Math.random())
        }
    ];

    const [transacciones, setTransacciones] = useState(initialTransactions);
    const [balance, setBalance] = useState(0);
    const [modalIngreso, setModalIngreso] = useState(false);
    const [modalGasto, setModalGasto] = useState(false);
    
    const [ modalEditar ,setModalEditar] = useState(false);
    const [ titleGastoaEditar, setTitleGastoaEditar ] = useState();
    const [ descripcionaEditar, setDescripcionaEditar ] = useState();
    const [ balanceaEditar, setBalanceaEditar] = useState();
    const [ keyEdit, setKeyEdit] = useState();
    const [ editTransaction, setEditTransaction] = useState();

    const handleEdit = (transaccion) => {
        setModalEditar(true)
        setTitleGastoaEditar(transaccion.title);
        setDescripcionaEditar(transaccion.description);
        setBalanceaEditar(transaccion.coste);
        setKeyEdit(transaccion.key);
        setEditTransaction(transaccion);
        console.log(keyEdit)
        
    }


    

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
                setTransacciones={setTransacciones}
                handleEdit={handleEdit}
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
                balance={balance} 
                setBalance={setBalance}
                transacciones={transacciones}
            />

            <ModalEditar 
                titleGastoaEditar={titleGastoaEditar}
                setTitleGastoaEditar={setTitleGastoaEditar}
                descripcionaEditar={descripcionaEditar}
                setDescripcionaEditar={setDescripcionaEditar}
                balanceaEditar={balanceaEditar}
                setBalanceaEditar={setBalanceaEditar}
                modalEditar={modalEditar}
                setModalEditar={setModalEditar}
                transacciones={transacciones}
                keyEdit={keyEdit}
                editTransaction={editTransaction}
                setTransacciones={setTransacciones}
            />
        </>
        
    );

}

export default Home;