import React from 'react'
import { View, Text } from 'react-native'

export default function Forecast(props){
    return(
        <View>
            <Text>{props.main}</Text>
            <Text>{props.description} {props.temp} °C</Text>
           
        </View>
    )
}