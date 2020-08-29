import React from 'react'
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: 'สงขลา', code: '90110' },
    { place: 'ตรัง', code: '92000' },
    { place: 'เชียงใหม่', code: '50000' },
    { place: 'ขอนแก่น', code: '40000' },
    { place: 'ชลบุรี', code: '20000' },
    { place: 'พัทลุง', code: '93000' },

   ]
   

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
    <View style={styles.zipItem}>
        <Text>{place}</Text>
        <Text>{code}</Text>
    </View>
    </TouchableHighlight>
)


export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return(
        
            
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem = {({item}) => <ZipItem{...item} navigation={navigation}/>}
            />
            
                </ImageBackground>
            
            
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    zipPlace: {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    },
    backdrop: {
        
     
        width: '100%',
        height: '100%'
   }
    
})

