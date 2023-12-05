import React, { useEffect } from 'react';
import {
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import EHeader from '../../../components/common/EHeader';
import PlayAudio from '../../../components/common/PlayAudio';
import TrackPlayer from 'react-native-track-player';

const ListScreen = () => {
    const route = useRoute();
    const navigation = useNavigation()
    // useEffect(() => {
    //     return () => {
    //       console.log('Cleanup function executed');
    //       TrackPlayer.stop();
    //     };
    // }, []);

    return (

        <SafeAreaView style={styles.container}>
            <EHeader title={route.params.title} onPress={() => navigation.pop()} />
            <PlayAudio />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Feedcontainer: {
        marginHorizontal: 10,
    },
});

export default ListScreen;
