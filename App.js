import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm'
class App extends React.Component {
  state = {
    isLoggedIn: null
  }
  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDyAR6fCC2l6W-YuhKsz3jA4L8J42a-EmI",
      authDomain: "authentication-15fd0.firebaseapp.com",
      databaseURL: "https://authentication-15fd0.firebaseio.com",
      projectId: "authentication-15fd0",
      storageBucket: "authentication-15fd0.appspot.com",
      messagingSenderId: "482346020284",
      appId: "1:482346020284:web:be98357e0d614a9f"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ isLoggedIn: true })
      } else {
        this.setState({ isLoggedIn: false })
      }
    });
  }

  renderContent = () => {
    switch(this.state.isLoggedIn){
      case true: return <Button>Log out</Button>;
      case false: return <LoginForm/>
      default : return <Spinner size="small"/> 
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"></Header>
        {this.renderContent()}
      </View>
    );
  }
}

export default App

