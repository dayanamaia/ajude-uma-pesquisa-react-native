import React, { useState, useEffect } from  'react';
import { Image, Text, View, ScrollView } from 'react-native';

import PageHeader from '../../components/pageHeader';
import logo from './../../assets/images/logo-instituicao.png';
import shareIcon from './../../assets/images/whatsap-light-icon.png';
import whatsapIcon from './../../assets/images/whatsap-light-icon.png';
import mapIcon from './../../assets/images/map-light-icon.png';
import styles from './styles';

import api from '../../services/api';

const Details = () => {

    const [data, setData] = useState({});

    const getData = () => {
        api.get(`posts/1`).then(response => {
            setData(response.data);
        });
    }

    useEffect(() => {
        getData();
    }, {});

    return(
        <>
            {data.title &&
                <View style={styles.container}>
                    <PageHeader btnBack={true} bg='dark' />
                    <View style={styles.detailHeader}>
                        <Text style={styles.title}>{data.title}</Text>
                        <View style={styles.controls}>
                            <View style={styles.controlsItens}>
                                <Image source={logo} resizeMode="contain" />
                                <Text style={styles.infoSmall}>Instituição Butantan</Text>
                            </View>
                            <View style={styles.controlsItens}>
                                <Image source={whatsapIcon} resizeMode="contain" style={styles.controlsItensIcon} />
                                <Image source={mapIcon} resizeMode="contain" style={styles.controlsItensIcon} />
                                <Image source={shareIcon} resizeMode="contain" style={styles.controlsItensIcon} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.detailContent}>
                        <ScrollView style={styles.detailContentScroll}>
                            <View>
                                <Text style={styles.textContent}>{data.body}</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            }
        </>
    );
}

export default Details;