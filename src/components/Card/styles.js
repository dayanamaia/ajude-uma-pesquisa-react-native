import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingTop: 20,
    },
    infoHeader: {
        paddingLeft: 20,
        paddingRight: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    categories: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    tag: {
        width: 9,
        height: 9,
        backgroundColor: '#EBEAEA',
        borderRadius: 50,
        marginLeft: 2,
    },
    tagMedicamentos: {
        backgroundColor: '#C8C9CB',
    },
    tagReabilitacao: {
        backgroundColor: '#FF6C6C',
    },
    tagQuestionario: {
        backgroundColor: '#FF9800',
    },
    infoBody: {
        marginTop: 9,
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
        fontFamily: 'Montserrat_800ExtraBold',
        fontSize: 14,
        color: '#32264D',
        lineHeight: 18,
        marginBottom: 6,
    },
    infoCard: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoCardText: {
        fontFamily: 'Catamaran_400Regular',
        fontSize: 12,
        color: '#6A6180',
        marginRight: 10,
    },
    infoFooter: {
        borderTopWidth: 1,
        borderTopColor: '#EEF0FF',
        borderStyle: 'solid',
        marginTop: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    infoBox: {
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 20,
        paddingRight: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        flex: 1,
    },
    infoBoxIcon: {
        marginRight: 4,
    },
    infoBoxText: {
        color: '#3762CC',
    },
    infoBoxCall: {
        color: '#25D366',
    }
});

export default styles;
