import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container: {
        alignItems:'center', 
        justifyContent:'center', 
        flex:1,
        backgroundColor: "#CCE1F6"
    }, 
    appName:{
        fontSize: 38,
        fontWeight: 'bold',
        color: "#2B8BB7"

    },
    appQuote:{
        fontSize: 18,
        marginTop: "5%",
        color: "#2B8BB7"

    },
    appQuote2:{
        fontSize: 18,
        marginTop: "1%",
        color: "#2B8BB7"

    },
    yellowButton: {
        backgroundColor: '#2B8BB7',
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 5,
        marginTop: 50
    },
    buttonText:{
        fontSize: 20,
        color: '#CCE1F6'

    },
    welcomeImage:{
        height: '30%',
        width: '100%',
        marginTop: 30
    }
})