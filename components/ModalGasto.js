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

const ModalIngreso = ({
                       modalGasto,
                       setModalGasto,
                       setTransacciones,
                       balance,
                       setBalance,
                       transacciones,
                    }) => {
    
    const [gastoTitle, setGastoTitle] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [balanceIntroducido,setBalanceIntroducido] = useState('')

    const handleClose = () => {
        setModalGasto(false);
    }

    const handleEditList = () => {
        setBalance(balance - parseInt(balanceIntroducido));
        const time = new Date();
        const fechaTransaccion = time.getDate() + '/' + time.getMonth() + '/' + time.getFullYear() + ' - ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
        const listaTransaccionesNuevas = [{
            title: gastoTitle,
            timestamp: fechaTransaccion,
            coste:'-'+ balanceIntroducido,
            description: descripcion,
            key:String(Math.random())
        },...transacciones]
        setTransacciones(listaTransaccionesNuevas);
        setBalanceIntroducido(0);
        setGastoTitle('');
        handleClose();
        
    }

    return(
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalGasto}
        onRequestClose={() => handleClose()}
    >
        <ModalContainer>
            <ModalView>
                <ModalTitle>Gestionar ingreso</ModalTitle>
                <ModalViewIngreso>
                    <TextOptions>Indique el gasto:</TextOptions>
                    <ModalInput 
                        placeholder="Indique el concepto del gasto"
                        numeric
                        keyboardType="number-pad"
                        maxLength={6}
                        onChangeText={(text) => setGastoTitle(text)}
                        value={gastoTitle}
                    />

                    <TextOptions>Indique una descripción:</TextOptions>
                    <ModalInput 
                        placeholder="Indique la descripción del gasto"
                        numeric
                        keyboardType="number-pad"
                        maxLength={6}
                        onChangeText={(text) => setDescripcion(text)}
                        value={descripcion}
                    />

                    <TextOptions>Indique cuanto se ha gastado:</TextOptions>
                    <ModalInput 
                        placeholder="Ingrese el dinero"
                        numeric
                        keyboardType="number-pad"
                        maxLength={6}
                        onChangeText={(text) => setBalanceIntroducido(text)}
                        value={balanceIntroducido}
                    />
                        <ButtonViewModal>
                            <AntDesign name="check" size={35} color={'green'} onPress={() => handleEditList()}/>
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