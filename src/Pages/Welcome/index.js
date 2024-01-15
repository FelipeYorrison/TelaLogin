import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

export default function Welcome(){
  const navigation = useNavigation();

    return(
        <View style={styles.container}>
            
        <Animatable.View style={styles.containerlogo}>
            <Animatable.Image
            Animation="flipInY"
             source={require('../Signin/logo.png')}
             style={{width: '100%'}}
             resizeMode="contain"
            /> 
        </Animatable.View>

        <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
         <Text style={styles.title}>Organize Seus gastos de qualquer lugar!</Text>
         <Text style={styles.tex}>Faça o login agora mesmo!</Text>

         <TouchableOpacity 
         style={styles.button}
         onPress={() => navigation.navigate('Signin')}
         >
            <Text style={styles.buttontext}>Acessar</Text>
         </TouchableOpacity>
       </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor: '#38a69d'
    },
    containerlogo: {
        flex:2,
        backgroundColor: '#38a69d',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex:1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    tex: {
        color: '#a1a1a1'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttontext: {
        fontSize: 18,
        color: "#ffff",
        fontWeight: 'bold'
    }
})