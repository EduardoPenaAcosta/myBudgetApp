
import styled from "styled-components";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  TextInput,
  Image,
  Button
} from "react-native";
import Constants from "expo-constants";

// Colors
export const colors = {
  black: '#000000',
  blueHeader: '#6AE5C6',
  white: '#FFFFFF',
  whiteGrey: '#CBCACA',
  blue: '#26A9AF'
};

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.SafeAreaView`
  background-color: ${colors.white};
  padding: 20px;
  padding-bottom: 0px;
  flex: 1;
  padding-top: ${statusBarHeight}px;
`;

// Header
export const HeaderView = styled.View`
  border-radius: 5px;
  background-color: ${colors.blueHeader} ;  
  padding-vertical: 35px;
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: ${colors.black};
  align-items: center;
`;

export const ImageRadius = styled.Image`
  margin-top: 20px;
  margin-right: 20px;
  width: 100px;
  height: 100px;
  borderRadius: 200px;
  
`

export const CardUser = styled.View`
  margin-left: 400;
  width: 600px;
  height: 150px;
  background-color: #A1A1A1;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
`;

export const TextResume = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.black};
  align-items: center;
  padding-top: 45px;
  padding-left: 35px;
`

export const CardSaldo = styled.View`
  margin-top: 10px;
  margin-left: 5%;
  width: 90%;
  height: 45%;
  background-color: ${colors.whiteGrey};
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
`;

export const ListView = styled.View`
  background-color: ${colors.black};
  min-height: 85px;
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  align-items: stretch;
`;

export const ListTitleGasto = styled.Text`
font-size: 25px;
font-weight: bold;
color: ${colors.white};
align-items: center;
`

export const ListInversion = styled.Text`
font-size: 20px;
font-weight: bold;
color: ${colors.white};
align-items: baseline;
margin-left: 90%;
margin-bottom: 10px;
`
export const ListTimeStamp = styled.Text`
font-size: 10px;
color: ${colors.white};
font-style: italic;
align-items: baseline;
margin-left: 92%;
`
export const CardButtons = styled.View`
  margin-top: 10px;
  margin-left: 26%;
  width: 50%;
  height: 15%;
  background-color: ${colors.blue};
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  opacity: 0.9;
`;

export const TextOptions = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.black};
  align-items: center;
`

export const TextTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${colors.black};
  align-items: center;
`

export const ButtonOptions = styled.TouchableHighlight`
  background-color: ${colors.white};
  border-radius:20px;
  margin: 2px;
  padding: 10px;
  color: ${colors.black};
`