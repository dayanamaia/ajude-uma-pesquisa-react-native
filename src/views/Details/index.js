import React, { useState } from  'react';
import { Image, Text, View, ScrollView } from 'react-native';

import PageHeader from '../../components/pageHeader';
import logo from './../../assets/images/logo-instituicao.png';
import shareIcon from './../../assets/images/whatsap-light-icon.png';
import whatsapIcon from './../../assets/images/whatsap-light-icon.png';
import mapIcon from './../../assets/images/map-light-icon.png';
import styles from './styles';

const Details = () => {
    const dataCard = {
        title: 'Nome da pesquisa a valorização de fatores subjetivos verifica a validade da sensibilia dos não-sentidos.',
        instituicao: 'Instituto Butantan',
        logoInstituicao: 'logo-instituicao.png',
        description: [
            {
                text: 'Pignut hamburg parsley tigernut. Carrot burdock scorzonera chaya samphire corn salad prussian asparagus, lettuce, bitterleaf. Indian pea orache ginger potato brussels sprout paracress tinda — potato collard greens; urad bean. Jujubes tart wafer cheesecake chocolate chocolate candy canes cotton candy. Cotton candy toffee dessert chocolate. Cookie jelly toffee gummi bears halvah croissant apple pie cupcake.',
            },
            {
                text: 'Powder sugar plum cotton candy muffin.Pignut hamburg parsley tigernut. Carrot burdock scorzonera chaya samphire corn salad prussian asparagus, lettuce, bitterleaf. Indian pea orache ginger potato brussels sprout paracress tinda — potato collard greens; urad bean.',
            },
        ]
    }

    const [data, useData] = useState({ ...dataCard});

    return(
        <View style={styles.container}>
            <PageHeader btnBack={true} bg='dark' />
            <View style={styles.detailHeader}>
                <Text style={styles.title}>{data.title}</Text>
                <View style={styles.controls}>
                    <View style={styles.controlsItens}>
                        <Image source={logo} resizeMode="contain" />
                        <Text style={styles.infoSmall}>{data.instituicao}</Text>
                    </View>
                    <View style={styles.controlsItens}>
                        <Image source={whatsapIcon} resizeMode="contain" style={styles.controlsItensIcon} />
                        <Image source={mapIcon} resizeMode="contain" style={styles.controlsItensIcon} />
                        <Image source={shareIcon} resizeMode="contain" style={styles.controlsItensIcon} />
                    </View>
                </View>
            </View>
            <ScrollView style={styles.detailContent}>
                <Text style={styles.textContent}>{data.description[0].text}</Text>
                <Text style={styles.textContent}>{data.description[1].text}</Text>
                <Text style={styles.textContent}>{data.description[1].text}</Text>
                <Text style={styles.textContent}>{data.description[1].text}</Text>
            </ScrollView>
        </View>
    );
}

export default Details;