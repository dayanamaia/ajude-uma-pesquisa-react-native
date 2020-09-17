import { StyleSheet } from 'react-native';

const styles =StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
    },
    header: {
        padding: 40,
        height: 280,
    },
    imgHeader: {
        width: '100%',
        resizeMode: 'contain',
    },
    content: {
        backgroundColor: '#4e78bf',
        justifyContent: 'center',
        flexGrow: 1,
        padding: 40,
    },
    icon: {
        marginBottom: 18,
    },
    line: {
        width: 66,
        height: 7,
        backgroundColor: '#FFFFFF',
        opacity: 0.4,
        borderRadius: 8,
        marginBottom: 18,
    },
    description: {
        fontFamily: 'Catamaran_500Medium',
        fontSize: 18,
        color: '#FFFFFF',
        lineHeight: 24,
        width: 220,
    },
    control: {
        display: 'flex',
        alignItems: 'flex-end',
    }
});

export default styles;