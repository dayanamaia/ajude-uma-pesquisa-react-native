import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from './styles';

const Search = (props) => {
    const [text, setText] = useState('');

    const emitText = (text) => {
        setText(text);
        props.getTextSearch(text);
    }

    return(
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="Buscar por nome"
            onChangeText={props.getTextSearch} />
        </View>
    );
}

export default Search;