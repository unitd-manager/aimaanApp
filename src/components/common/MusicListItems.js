import React, { useEffect, useState, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Slider,
    FlatList,
} from 'react-native';
import TrackPlayer, { Capability, usePlaybackState, useProgress, State } from 'react-native-track-player';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { moderateScale } from '../../common/constants';
import { listData } from '../../api/constant';

const MusicListItems = ({ item, index }) => {

    console.log("index",index )

    const [currentAudio, setCurrentAudio] = useState(index);

    const progress = useProgress();
    const playbackState = usePlaybackState()
    const ref = useRef()


    useEffect(() => {
        setupPlayer();
    }, []);

    const setupPlayer = async () => {
        try {
            await TrackPlayer.setupPlayer();
            await TrackPlayer.updateOptions({
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToNext,
                    Capability.SkipToPrevious,
                    Capability.Stop,
                ],
                compactCapabilities: [Capability.Play, Capability.Pause],
            });
            await TrackPlayer.add(listData);
            await TrackPlayer.skip(currentAudio);
            togglePlayback(playbackState);
        } catch (error) {
            console.error('Error setting up player', error);
        }
    };

    const togglePlayback = async playbackState => {
        console.log(playbackState)
        if (playbackState === State.Paused || playbackState === State.Ready || playbackState === State.Buffering || playbackState === State.Connecting) {
            await TrackPlayer.play();
        } else {
            await TrackPlayer.pause();
        }
    }

    return (
        <View style={styles.singleContainer}>

            <View style={styles.cardTopRow}>
                <View style={styles.halrow}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.head}>{item.title}</Text>
                    </View>
                </View>
            </View>

            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                
                <TouchableOpacity
                    onPress={async () => {
                        togglePlayback(playbackState);
                    }}>
                    {playbackState == State.Paused || playbackState == State.Ready ? <AntDesign
                        name="play"
                        size={moderateScale(25)}
                        color={'#000'}
                    /> : <AntDesign
                        name="pausecircle"
                        size={moderateScale(25)}
                        color={'#000'}
                    />}

                </TouchableOpacity>

                <View style={styles.sliderView}>
                    <Slider
                        value={progress.position}
                        maximumValue={progress.duration}
                        minimumValue={0}
                        thumbStyle={{ width: 20, height: 20 }}
                        thumbTintColor={'black'}
                        onValueChange={async value => {
                            await TrackPlayer.seekTo(value);
                        }}
                    />
                </View>

            </View>
        </View>
    );
};

export default MusicListItems;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginBottom: 5,
        borderRadius: 3
    },
    buttonText: {
        color: '#fff'
    },
    singleContainer: {
        backgroundColor: '#fff',
        marginTop: 20,
        borderRadius: 10,
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 5,
        paddingHorizontal: 20,
        paddingBottom: 15,
    },
    cardTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
    },
    halrow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    moredot: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    smallDot: {
        width: 5,
        height: 5,
        borderRadius: 5,
    },
    head: {
        fontSize: 16,
        color: '#095225',
        fontWeight: '600'
    },
    headdesp: {
        fontSize: 12,
        color: '#222',
    },

    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#4C4E66',
        lineHeight: 36,
        marginLeft: 10,
    },
    sliderView: {
        alignSelf: 'center',
        width: '90%'
    },
});