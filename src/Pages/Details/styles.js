import React from 'react'

import { StyleSheet } from 'react-native'


const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff",
        justifyContent: 'center',
        alignItems: 'center'
    },
    label:{
        width:"90%",
        marginTop:20,
        marginLeft:'auto',
        marginRight:'auto',
        fontSize:16,
        color:"#1E90FF",
        fontWeight:'bold'
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        
        borderRadius:30
    },
    button: {
        backgroundColor: '#1E90FF',
        padding: 15,
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        fontWeight:'bold',
        textAlign: 'center'
    }
})

export default styles