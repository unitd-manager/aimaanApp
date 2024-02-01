import React from 'react';
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';
import EHeader from '../components/common/EHeader'
import { useRoute } from '@react-navigation/native';

const AboutUs = () => {
    const route = useRoute();

    return (
        <>
            <EHeader title={route.params.title} />
            <ScrollView>
                <View style={aboutStyles.Img}>
                    <Image
                        style={{
                            resizeMode: 'cover',
                            width: '100%',
                            height: '100%'
                        }}
                        source={require('../assets/images/banner3.png')}
                    />
                </View>
                <View style={aboutStyles.container}>
                    <Text style={aboutStyles.Heading}>Lorem ipsum</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    <Text style={aboutStyles.Heading}>Lorem ipsum</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                </View>
            </ScrollView>
        </>
    )
}
export default AboutUs;

const aboutStyles = StyleSheet.create({
    container: {
        padding: 20
    },
    Heading: {
        fontSize: 20,
        color: '#000',
        marginVertical: 10
    },
    Img: {
        aspectRatio: 1.4 * 1.4,
        height: 200,
        
    },
});
