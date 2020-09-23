import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';

import Card from '../../components/Card';
import PageHeader from '../../components/pageHeader';
import Search from '../../components/Search';
import styles from './styles';

import api from '../../services/api';

const Home = () => {
    const [textSearch, setTextSearch] = useState('');
    const [dataCard, setDataCard] = useState([]);

    const getTextSearch = (text) => {
        setTextSearch(text);
    }

    const getData = () => {
        api.get(`posts`).then(response => {
            setDataCard(response.data);
        });
    }
    
    useEffect(() => {
        api.get(`posts`).then(response => {
            setDataCard(response.data);
        });
    }, []);

    return(
        <>
            <View style={styles.container}>
                <PageHeader title='Pesquisas Clínicas' />
                <Search getTextSearch={getTextSearch} />
                {dataCard.length > 0 && 
                    <>
                        <ScrollView style={styles.containerBg}>
                            {dataCard.map(data => (
                                <Card
                                key={data.id} 
                                titulo={data.title}
                                id={data.id}
                                instituicao={'Instituição Butantan'}
                                anoFinal={'2021'}
                                local={'São Paulo'}
                                contato={'55+ 11 973000000'}
                                categorias={[]} />
                            ))}
                        </ScrollView>
                    </>
                }
            </View>
        </>
    );
}

export default Home;