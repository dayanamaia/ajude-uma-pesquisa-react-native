import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';

import bgLanding from '../../assets/images/background-landing.png';
import imageHeader from '../../assets/images/desenho.png';
import styles from './styles';

const Landing = () => {
    return (
        <View style={styles.container}>
            <ImageBackground 
            source={bgLanding} 
            resizeMode='cover'
            style={styles.bgLanding}>
                <Image source={imageHeader} style={styles.imageHeader} />
                <View style={styles.logoView}>
                    <Text style={styles.logoText}><Text style={styles.logoTextContrast}>#</Text>AjudeUmaPesquisa</Text>
                    <View style={styles.line} />
                    <Text style={styles.logoDescription}>Sua plataforma de pesquisas clínicas no Brasil.</Text>
                </View>

            </ImageBackground>
        </View>
    );
}

export default Landing;