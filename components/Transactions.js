import React from 'react';
import {FlatList,Text} from 'react-native'

import {
    CardSaldo,
    ListView,
    ListTitleGasto,
    ListInversion,
    ListTimeStamp
    } from '../style/style'

const Transactions = ({transacciones}) => {
    return(
        <>
            <CardSaldo>
                
                <FlatList  data={transacciones} renderItem={ itemData => (
                    <>
                    <ListView>
                        <ListTitleGasto>{itemData.item.title}</ListTitleGasto>
                        <ListInversion>{itemData.item.coste}€</ListInversion>
                        <ListTimeStamp>{itemData.item.timestamp}</ListTimeStamp>
                    </ListView>
                    </>
                )}/>
                
            </CardSaldo>
        </>
    );
}

export default Transactions;