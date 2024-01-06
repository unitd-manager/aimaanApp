import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import EHeader from '../../../components/common/EHeader';

const AimanBaithulmal = () => {
    const route = useRoute();
    const navigation = useNavigation()
    return (
        <>
        <EHeader title={route.params.title} onPress={() => navigation.pop()} />
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
             <Text style={{fontSize:25,color:'#222'}}>AimanBaithulmal</Text>
        </View>
            
        </>
    )
}
export default AimanBaithulmal;