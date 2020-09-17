import React from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import imgHeader from './../../assets/images/ajude-uma-pesquisa-info.png'
import imgIconPesquisa from '../../assets/images/icon-pesquisa.png';
import arrowRightIcon from '../../assets/images/arrow-right-icon.png';
import styles from './styles';

const Onboarding = () => {

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={imgHeader} style={styles.imgHeader} />
            </View>
            <View style={styles.content}>
                <View style={styles.item}>
                    <Image source={imgIconPesquisa} style={styles.icon} />
                    <View style={styles.line} />
                    <Text style={styles.description}>Encontre pesquisas clínicas sendo desenvolvidas no Brasil, que estão na busca por voluntários.</Text>
                </View>
                <View style={styles.control}>
                    <BorderlessButton>
                        <Image source={arrowRightIcon} resizeMode='contain' />
                    </BorderlessButton>
                </View>
            </View>
        </View>
    );
}

export default Onboarding;