import React,{useState} from 'react';
import {FlatList,Text} from 'react-native'
import {SwipeListView} from "react-native-swipe-list-view";

import {
    CardSaldo,
    ListView,
    ListTitleGasto,
    ListInversion,
    ListTimeStamp,
    ListDescriptionGasto,
    ListViewHidden,
    HiddenButton,
    } from '../style/style'

    import { Entypo } from '@expo/vector-icons';

const Transactions = ({transacciones, setTransacciones,handleEdit,setBalance, balance}) => {

    const [swipedRow, setSwipedRow] = useState(null);

    const handleDelete = (rowKey) => {
       const transaccionesLista = [...transacciones];
       const indexTransaccion = transacciones.findIndex((item) => item.key = rowKey.key);
       transaccionesLista.splice(indexTransaccion,1);
       setTransacciones(transaccionesLista)
       const coste = rowKey.coste.slice(2, rowKey.key.length)
       setBalance(balance + parseFloat(coste))
    }


    return(
        <CardSaldo>
            
            <SwipeListView 
                        data={transacciones}
                        renderItem={(data) => {
                            return(
                                
                                    <ListView>
                                        <ListTitleGasto>{data.item.title}</ListTitleGasto>
                                        <ListDescriptionGasto>{data.item.description}</ListDescriptionGasto>
                                        <ListInversion>{data.item.coste}€</ListInversion>
                                        <ListTimeStamp>{data.item.timestamp}</ListTimeStamp>
                                    </ListView>
                            );
                        }}
                        renderHiddenItem={(data) => {
                            return(
                                <ListViewHidden>
                                    <HiddenButton
                                        onPress={() => handleDelete(
                                            data.item) }
                                    >
                                        <Entypo name="trash" size={25} color={'black'} />
                                    </HiddenButton>
                                    <HiddenButton>
                                        <Entypo name="edit" size={25} color={'black'} 
                                                onPress={() => {
                                                    handleEdit(data.item)
                                                }}
                                        />
                                    </HiddenButton>
                                </ListViewHidden>
                            )
                            
                        }}
            leftOpenValue={80}
            previewRowKey={"1"}
            previewOpenValue={80}
            previewOpenDelay={3000}
            showsVerticalScrollIndicator={false}
            disableLeftSwipe={true}
            onRowOpen={( (rowKey) => {
                setSwipedRow(rowKey);
            })}
            onRowClose={() => {
                setSwipedRow(null);
            }}
        />
            
            </CardSaldo>
    );
}

export default Transactions;