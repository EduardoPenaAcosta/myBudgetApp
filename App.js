import { StatusBar } from 'expo-status-bar';

import {
  Container,
} from './style/style'

import Home from './components/Home'

export default function App() {
  return (
    <Container>
      <StatusBar style="dark" />
      <Home/>
    </Container>
  );
}
