import React from 'react';
import { View, Text} from 'react-native'

const Header = props => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}

const styles = {
    viewStyle: {
        backgroundColor: "#f8f8f8",
        justifyContent: 'center',
        height: 120,
        alignItems: "center",
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffSet: {width: 0, height: 2},
        shadowOpacity: .5,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        textTransform: "uppercase",
        fontSize: 20 
    }
}


export {Header};