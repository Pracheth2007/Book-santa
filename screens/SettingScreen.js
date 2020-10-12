import React, { Component } from 'react';
import { View, StyleSheet, Text,TouchableOpacity, TextComponent, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';
import { TextInput } from 'react-native-gesture-handler';

export default class SettingScreen extends Component{
    constructor(){
        super();
        this.state={
            emailId: '',
            firstName: '',
            lastName: '',
            address: '',
            contact: '',
            docId: '',
        }
    }
    getUserDetails = ()=>{
        var email = firebase.auth().currentUser.email;
        db.collection('users').where('email_id', '==', email).get()
        .then(snapshot=>{
            var data = doc.data()
            this.setState({
                emailId: data.email_id,
                firstName: data.first_name,
                lastName: data.last_name,
                address: data.address,
                contact: data.contact,
                docId: doc.id,
            })
        })
    }

    updateUserDetails = ()=>{
        db.collection('users').doc(this.state.docId)
        .update({
            "first_name" : this.state.firstName,
            "last_name" : this.state.lastName,
            "contact" : this.state.contact,
            "address" : this.state.address,
        })
        Alert.alert("Profile Updated Succesfully")
    }

    componentDidMount(){
        this.getUserDetails    
    }
    render(){
        return(
            <View style = {styles.container}>
              <MyHeader title = "settings" navigation={this.props.navigation}/>   
              <View style ={styles.formContainer}>
                 <TextInput style ={styles.formTextInput}
                 placeholder= {"First Name"}
                 maxLength = {8}
                 onChangeText={(text)=>{
                     this.setState({
                         firstName : text
                     })
                 }}
                 value = {this.state.firstName}/> 
                 <TextInput style ={styles.formTextInput}
                 placeholder= {"Last Name"}
                 maxLength = {8}
                 onChangeText={(text)=>{
                     this.setState({
                         lastName : text
                     })
                 }}
                 value = {this.state.lastName}/>                  
                 <TextInput style ={styles.formTextInput}
                 placeholder= {"Contact"}
                 maxLength = {10}
                 onChangeText={(text)=>{
                     this.setState({
                         contact : text
                     })
                 }}
                 keyboardType={'numeric'}
                 value = {this.state.contact}/> 
                 <TextInput style ={styles.formTextInput}
                 placeholder= {"Address"}
                 multiline = {true}
                 onChangeText={(text)=>{
                     this.setState({
                         address : text
                     })
                 }}
                 value = {this.state.address}/> 
                 <TouchableOpacity style={styles.button}
                 onPress = {()=>{
                     this.updateUserDetails()
                 }}>
                 <Text style={styles.buttonText}>Update Profile</Text>    
                 </TouchableOpacity> 
              </View>       
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    formTextInput: {
        width: '75%',
        height: 35,
        alignSelf: 'center',
        borderColor: 'blue',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10
    },
    button: {
        width: '75%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'turquoise',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10.3,
        elevation: 16,
        marginTop: 20
    },
    buttonText: {
        fontSize: 25,
        fontWeight: "bold",
        Color: "white",
    }
})