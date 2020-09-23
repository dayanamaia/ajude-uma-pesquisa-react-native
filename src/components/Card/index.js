import React from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import linkIcon from '../../assets/images/link-icon.png';
import shareIcon from '../../assets/images/compartilhar-icon.png';
import whatsapIcon from '../../assets/images/whatsap-icon.png';


const Card = (props) => {
    const { titulo, id, instituicao, local, anoFinal, contato, categorias } = props;
    const navigation = useNavigation();

    const handleNavigateToDetails = (id) => {
        navigation.navigate('Details', {idItem: id});
    }

    return(
        <View style={styles.container}>
            <View style={styles.info}>
                <View style={styles.infoHeader}>
                    <View style={styles.categories}>
                        <View style={[styles.tag, styles.tagMedicamentos]}></View>
                        <View style={[styles.tag, styles.tagReabilitacao]}></View>
                        <View style={[styles.tag, styles.tagQuestionario]}></View>
                    </View>
                    <BorderlessButton onPress={() => handleNavigateToDetails(id)}>
                        <Image source={linkIcon} resizeMode='contain' />
                    </BorderlessButton>
                </View>
                <View style={styles.infoBody}>
                    <BorderlessButton onPress={() => handleNavigateToDetails(id)}>
                        <Text style={styles.title}>{titulo}</Text>
                    </BorderlessButton>
                    <View style={styles.infoCard}>
                        <Text style={styles.infoCardText}>{instituicao}</Text>
                        <Text style={styles.infoCardText}>{local}</Text>
                        <Text style={styles.infoCardText}>{anoFinal}</Text>
                    </View>
                </View>
                <View style={styles.infoFooter}>
                    <BorderlessButton style={styles.infoBox}>
                        <Image source={shareIcon} resizeMode='contain' style={styles.infoBoxIcon} />
                        <Text style={styles.infoBoxText}>compartilhar</Text>
                    </BorderlessButton>
                    <BorderlessButton style={[styles.infoBox]}>
                        <Image source={whatsapIcon} resizeMode='contain' style={styles.infoBoxIcon} />
                        <Text style={styles.infoBoxCall}>entrar em contato</Text>
                    </BorderlessButton>
                </View>
            </View>
        </View>
    );
}

export default Card;