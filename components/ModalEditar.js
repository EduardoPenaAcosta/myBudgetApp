import React, { useState,useEffect } from 'react';
import {Modal,Text} from 'react-native';
import {
    ModalContainer,
    ModalView,
    ModalTitle,
    TextOptions,
    ModalViewIngreso,
    ModalInput,
    ButtonViewModal,
    SpacerButton,

    } from '../style/style'

    import {AntDesign} from '@expo/vector-icons';

const ModalEditar = ({
                        titleGastoaEditar,
                        setTitleGastoaEditar,
                        descripcionaEditar,
                        setDescripcionaEditar,
                        balanceaEditar,
                        setBalanceaEditar,
                        modalEditar,
                        setModalEditar,
                        transacciones,
                        keyEdit,
                        editTransaction,
                        setTransacciones
                    }) => {

    const handleClose = () => {
        setModalEditar(false);
    }

    const handleEdit = () => {
        const time = new Date();
        const fechaTransaccion = time.getDate() + '/' + time.getMonth() + '/' + time.getFullYear() + ' - ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
        const listaGastos = [...transacciones];
        const indexGastos = transacciones.findIndex((transac) => transac.key === keyEdit);
        listaGastos.splice(indexGastos,1,{
            title: titleGastoaEditar,
            timestamp: fechaTransaccion,
            coste: balanceaEditar,
            description: descripcionaEditar,
            key:String(Math.random())
        });
        setTransacciones(listaGastos);
        setModalEditar(false);
    }

    return(
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalEditar}
        onRequestClose={() => handleClose()}
    >
        <ModalContainer>
            <ModalView>
                <ModalTitle>Modificar gasto/ingreso</ModalTitle>
                <ModalViewIngreso>
                    <TextOptions>Indique el nombre del gasto:</TextOptions>
                    <ModalInput 
                        placeholder="Ingrese el nombre"
                        type="text"
                        onChangeText={(text) => setTitleGastoaEditar(text)}
                        value={titleGastoaEditar}
                    />
                    <TextOptions>Indique la descripción del gasto:</TextOptions>
                    <ModalInput 
                        placeholder="Ingrese la descripción"
                        type="text"
                        onChangeText={(text) => setDescripcionaEditar(text)}
                        value={descripcionaEditar}
                    />
                    <TextOptions>Indique el precio del gasto:</TextOptions>
                    <ModalInput 
                        placeholder="Ingrese el dinero"
                        keyboardType="number-pad"
                        maxLength={6}
                        onChangeText={(text) => setBalanceaEditar(text)}
                        value={balanceaEditar}
                    />
                        <ButtonViewModal>
                            <AntDesign name="check" size={35} color={'green'} onPress={() => handleEdit()}/>
                                <SpacerButton></SpacerButton>
                            <AntDesign name="close" size={35} color={'red'} onPress={() => handleClose()}/>
                        </ButtonViewModal>
                </ModalViewIngreso>

                
                
            </ModalView>
        </ModalContainer>
    
    </Modal>
)
}

export default ModalEditar;