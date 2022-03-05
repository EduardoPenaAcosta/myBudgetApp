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

const ModalIngreso = ({modalIngreso,
                       setModalIngreso,
                       setTransacciones,
                       balance,
                       setBalance,
                       transacciones
                    }) => {

    const [balanceIntroducido,setBalanceIntroducido] = useState('')

    const handleClose = () => {
        setModalIngreso(false);
    }

    const handleNewList = () => {
        setBalance(balance + parseInt(balanceIntroducido));
        const time = new Date();
        const fechaTransaccion = time.getDate() + '/' + time.getMonth() + '/' + time.getFullYear() + ' - ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
        const listaTransaccionesNuevas = [{
            title: 'Ingreso',
            timestamp: fechaTransaccion,
            coste:'+'+ balanceIntroducido,
            description:'Ingreso de balance',
            key:String(Math.random())
        },...transacciones]
        setTransacciones(listaTransaccionesNuevas);
        setBalanceIntroducido(0);
        handleClose();
        
    }

    return(
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalIngreso}
        onRequestClose={() => handleClose()}
    >
        <ModalContainer>
            <ModalView>
                <ModalTitle>Gestionar ingreso</ModalTitle>
                <ModalViewIngreso>
                    <TextOptions>Indique cuanto quiere ingresar:</TextOptions>
                    <ModalInput 
                        placeholder="Ingrese el dinero"
                        numeric
                        keyboardType="number-pad"
                        maxLength={6}
                        onChangeText={(text) => setBalanceIntroducido(text)}
                        value={balanceIntroducido}
                    />
                        <ButtonViewModal>
                            <AntDesign name="check" size={35} color={'green'} onPress={() => handleNewList()}/>
                                <SpacerButton></SpacerButton>
                            <AntDesign name="close" size={35} color={'red'} onPress={() => handleClose()}/>
                        </ButtonViewModal>
                </ModalViewIngreso>

                
                
            </ModalView>
        </ModalContainer>
    
    </Modal>
)
}

export default ModalIngreso;