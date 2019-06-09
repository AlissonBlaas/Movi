import React from 'react';
import { View, ScrollView, Modal} from 'react-native';
import { GFTextInput } from '../../components/GFTextInput';
import GFButton from '../../components/GFButton'
import Colors from '../../constants/Colors';
import { styles } from './styles';
import {TextButton} from '../../components/TextButton'
import {GFText} from '../../components/GFText'
import {ModalTerms} from '../ModalTerms'

export class ClienteCadastro extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showTermsModal: false,
    };
  }

  setModalVisible = (visible) => {
    this.setState({showTermsModal: visible});
  }


  render() {
    
    const { style, onPress } = this.props;
    const { stl_input, stl_scroll_view } = styles;

    return (
      <View style={style}>
      <ScrollView style={stl_scroll_view}>
          <GFTextInput
            style={stl_input}
            labelColor={Colors.CLR_WHITE}
            borderColor={Colors.CLR_TEXT_GRAY}
            focusColor={Colors.CLR_TEXT_GRAY}
            placeholder="Seu Nome"
          />
          <GFTextInput
            style={stl_input}
            labelColor={Colors.CLR_TEXT_WHITE}
            borderColor={Colors.CLR_TEXT_GRAY}
            focusColor={Colors.CLR_TEXT_GRAY}
            placeholder="E-mail"
          />
          <GFTextInput
            style={stl_input}
            labelColor={Colors.CLR_TEXT_WHITE}
            borderColor={Colors.CLR_TEXT_GRAY}
            focusColor={Colors.CLR_TEXT_GRAY}
            placeholder="CPF"
          />
          <GFTextInput
            style={stl_input}
            labelColor={Colors.CLR_TEXT_WHITE}
            borderColor={Colors.CLR_TEXT_GRAY}
            focusColor={Colors.CLR_TEXT_GRAY}
            placeholder="Senha"
            secureTextEntry={true}
          />
        <GFButton
          style={stl_input}
          title="CADASTRAR"
          color={[Colors.CRL_GREEN, Colors.CRL_GREEN]}
          selectedColor={Colors.CRL_BLACK}
          onPress = {onPress}
        />
         
        <GFText style={styles.stl_terms_text}>Ao se cadastrar, você aceita nossos</GFText>
          <TextButton
            style={styles.stl_terms_text_btn}
            title="termos de serviços"
            color={Colors.CRL_GREEN}
            selectedColor={Colors.CRL_BLACK}
            onPress = {() => this.setModalVisible(true)}
          />
          <Modal  
          transparent={true}
          visible={this.state.showTermsModal} 
          onRequestClose={()=> this.setModalVisible(false)}
          animationType='fade'
        >
          <ModalTerms
          Title='Termos do serviços'
          SubTitle='Moleskine big data workflow parallax intuitive driven driven. Pitch deck earned media bootstrapping ideate co-working convergence engaging human-centered design 360 campaign. 
          Responsive parallax minimum viable product workflow human-centered design responsive workflow affordances pivot long 
          
          shadow engaging. Responsive ship it intuitive ship it convergence actionable insight actionable insight parallax food-truck human-centered design quantitative vs. qualitative venture capital.
          
          Parallax user story unicorn intuitive big data responsive engaging 360 campaign fund 
          quantitative vs. qual
          Moleskine big data workflow parallax intuitive driven driven. Pitch deck earned media bootstrapping ideate co-working convergence engaging human-centered design 360 campaign. 
          Responsive parallax minimum viable product workflow human-centered design responsive workflow affordances pivot long 
          
          shadow engaging. Responsive ship it intuitive ship it convergence actionable insight actionable insight parallax food-truck human-centered design quantitative vs. qualitative venture capital.
          
          Parallax user story unicorn int
          Moleskine big data workflow parallax intuitive driven driven. Pitch deck earned media bootstrapping ideate co-working convergence engaging human-centered design 360 campaign. 
          Responsive parallax minimum viable product workflow human-centered design responsive workflow affordances pivot long 
          
          shadow engaging. Responsive ship it intuitive ship it convergence actionable insight actionable insight parallax food-truck human-centered design quantitative vs. qualitative venture capital.
          
          Parallax user story unicorn int'
          
          onPress={() => this.setModalVisible(!this.state.showTermsModal)}
          onPress2={() => this.setModalVisible(!this.state.showTermsModal)}
          />
        </Modal>
        </ScrollView>
        
      </View>
    );
  }
}