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

const ModalIngreso = () => {
    return(
    <Modal
        animationType="slide"
        transparent={true}
        visible={false}
        onRequestClose={() => handleClose()}
    >
        <ModalContainer>
            <ModalView>
                <ModalTitle>Gestionar gasto</ModalTitle>
                <ModalViewIngreso>
                    <TextOptions>Indique concepto del gasto:</TextOptions>
                        <ModalInput 
                        placeholder="Ingrese el concepto"
                        type="number"
                        keyboardType="text"
                        />
                    <TextOptions>Indique el importe del gasto:</TextOptions>
                    <ModalInput 
                        placeholder="Ingrese la cantidad"
                        type="number"
                        keyboardType="number-pad"
                        />
                        <ButtonViewModal>
                            <AntDesign name="check" size={35} color={'green'}/>
                                <SpacerButton></SpacerButton>
                            <AntDesign name="close" size={35} color={'red'} />
                        </ButtonViewModal>
                </ModalViewIngreso>

                
                
            </ModalView>
        </ModalContainer>
    
    </Modal>
)
}

export default ModalIngreso;