import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4e78bf',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40
    },
    bgLanding: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
    },
    logoView: {
        textAlign: 'left',
        fontFamily: 'Catamaran_400Regular',
    },  
    logoText: {
        fontSize: 28,
        color: '#F8F889',
    },
    logoTextContrast: {
        color: '#FFFFFF'
    },
    logoDescription: {    
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 24,
        width: 208,
    },
    imageHeader: {
        width: '100%',
        height: 155,
        resizeMode: 'contain',
        marginBottom: 30,
    },
    line: {
        width: 33,
        height: 3,
        backgroundColor: '#FFFFFF',
        opacity: 0.6,
        borderRadius: 8,
        marginTop: 14,
        marginBottom: 6,
    }
});

export default styles;