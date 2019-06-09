import intro from './intro'
import CorL from './CorL'
import Cadastro from './Cadastro'
import Login from './Login'

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    intro: intro,
    CorL: CorL,
    Cadastro:Cadastro,
    Login: Login
  })
);

export default Routes;