import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4e78bf',
        flex: 1,
    },
    detailHeader: {
        padding: 20,
    },
    title: {
        fontFamily: 'Montserrat_800ExtraBold',
        fontSize: 18,
        color: '#FFFFFF',
        lineHeight: 24,
        textShadowColor: '#445ADB',
        textShadowOffset: { width: 1, height: 4 },
        textShadowRadius: 5,
        marginBottom: 14,
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    controlsItens: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    infoSmall: {
        fontFamily: 'Catamaran_500Medium',
        fontSize: 12,
        color: '#FFFFFF',
        marginLeft: 10,
    },
    controlsItensIcon: {
        marginLeft: 18,
    },
    detailContent: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 1,
    },
    detailContentScroll: {
        padding: 20,
        flex: 1,
    },
    textContent: {
        fontFamily: 'Catamaran_500Medium',
        fontSize: 16,
        color: '#32264D',
    },
});

export default styles;
