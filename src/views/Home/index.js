import React, { useState } from 'react';
import { Text } from 'react-native';
import PageHeader from '../../components/pageHeader';
import Search from '../../components/Search';

const Home = () => {
    const [textSearch, setTextSearch] = useState('');

    const getTextSearch = (text) => {
        setTextSearch(text);
    }

    return(
        <>
            <PageHeader title='Pesquisas Clínicas' />
            <Search getTextSearch={getTextSearch} />
            <Text>text: {textSearch}</Text>
        </>
    );
}

export default Home;