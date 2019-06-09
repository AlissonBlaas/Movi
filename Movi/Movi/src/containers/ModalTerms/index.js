import React from 'react';
import { 
    Text, 
    View,
    ScrollView
   } from 'react-native';
import styles, {cancel_btn} from './styles';
import GFButton from '../../components/GFButton';
import Colors from '../../constants/Colors'

export class ModalTerms extends React.Component {

    

  render() {

    const {Title, SubTitle, onPress2} = this.props;

    return (

            <View style={styles.modal_container}>
                
                <View style={styles.text_container}>
                    <Text style={styles.header} >{Title}</Text>
                        <ScrollView>
                            <Text style={styles.sub_text}>{SubTitle}</Text>
                        </ScrollView>
                </View>
                    <View style={styles.baixo}>
                        <GFButton
                           title="Li e Concordo"
                           color={[Colors.CRL_GREEN, Colors.CRL_GREEN]}
                           selectedColor={Colors.CLR_TEXT_GRAY}
                           onPress={onPress2}
                        />
                    </View> 
            </View>    
    );

  }
}