import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
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
        getData();
    }, []);

    return(
        <>
            <PageHeader title='Pesquisas Clínicas' />
            {dataCard.length > 0 && 
                <>
                    <Search getTextSearch={getTextSearch} />
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
        </>
    );
}

export default Home;