import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Card from '../../components/Card';
import PageHeader from '../../components/pageHeader';
import Search from '../../components/Search';

import styles from './styles';

const Home = () => {
    const [textSearch, setTextSearch] = useState('');

    const dataCard = {
        titulo: 'Nome da pesquisa a valorização de fatores subjetivos verifica a validade da sensibilia dos não-sentidos.',
        id: 10,
        instituicao: 'Instituto Butantan',
        anoFinal: '2020',
        local: 'São Paulo',
        contatos: {
            'telefone': '55+ 11 55000200',
        },
        categorias: [
            {name: 'medicamentos', slug: 'medicamentos'},
            {name: 'reabilitação', slug: 'reabilitacao'},
            {name: 'questionário', slug: 'questionario'},
        ]
    }

    const getTextSearch = (text) => {
        setTextSearch(text);
    }

    return(
        <>
            <PageHeader title='Pesquisas Clínicas' />
            <Search getTextSearch={getTextSearch} />
            <View style={styles.containerBg}>
                <Card 
                titulo={dataCard.titulo}
                id={dataCard.id}
                instituicao={dataCard.instituicao}
                anoFinal={dataCard.anoFinal}
                local={dataCard.local}
                contatos={dataCard.contatos.telefone}
                categorias={dataCard.categorias} />
            </View>
        </>
    );
}

export default Home;