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
                <ModalTitle>Gestionar ingreso</ModalTitle>
                <ModalViewIngreso>
                    <TextOptions>Indique cuanto quiere ingresar:</TextOptions>
                    <ModalInput 
                        placeholder="Ingrese el dinero"
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