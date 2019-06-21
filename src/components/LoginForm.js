import React from 'react';
import { Text } from 'react-native'
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common'

class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    onButtonPress = () => {
        const {email, password} = this.state;
        this.setState({ error: '', loading: true});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess)
                    .catch(this.onLoginFail)
            });
    }

    onLoginSuccess = () => {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    onLoginFail = () => {
        this.setState({
            error: 'Authentication failed!',
            loading: false
        })
    }

    renderButton = () => {
        if(this.state.loading) {
            return <Spinner size="small"/>
        }
        return (
            <Button onPress={this.onButtonPress}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        placeholder="example@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={ email => this.setState({ email })} />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={ password => this.setState({ password })} />
                </CardSection>
                { this.state.error 
                ? <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                : null}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm