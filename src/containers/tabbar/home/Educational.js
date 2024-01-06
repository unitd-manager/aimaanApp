import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import EHeader from '../../../components/common/EHeader';

const Educational = () => {
    const route = useRoute();
    const navigation = useNavigation()
    return (
        <>
        <EHeader title={route.params.title} onPress={() => navigation.pop()} />
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
             <Text style={{fontSize:25,color:'#222'}}>Educational</Text>
        </View>
            
        </>
    )
}
export default Educational;