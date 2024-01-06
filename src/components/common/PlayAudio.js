import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Slider, TouchableOpacity, View, ScrollView, AppState } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TrackPlayer, { useProgress, Event } from 'react-native-track-player';
import { moderateScale } from '../../common/constants';
import { listData } from '../../api/constant';

const PlayAudio = () => {
  const [isPlayingArray, setIsPlayingArray] = useState(Array(listData.length).fill(false));
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const [progressArray, setProgressArray] = useState(Array(listData.length).fill({ position: 0, duration: 0 }));

  const progress = useProgress();

  const pauseOnUnmount = async () => {
    // Pause and reset the current track when the component is unmounted
    await TrackPlayer.pause();
    setIsPlayingArray(Array(listData.length).fill(false));
    setCurrentTrackIndex(null);
  }

  useEffect(() => {
    const unsubscribe = TrackPlayer.addEventListener(Event.PlaybackTrackChanged, (event) => {
      console.log("Current Track: ", event.nextTrack)
      if (event.nextTrack) {
        const updatedIsPlayingArray = [...isPlayingArray]
        updatedIsPlayingArray[event.nextTrack] = true
        setIsPlayingArray(updatedIsPlayingArray);
        setCurrentTrackIndex(event.nextTrack)
      }
    })
    const subscription = AppState.addEventListener('blur', () => {
      pauseOnUnmount()
    });
    return () => {
      unsubscribe.remove()
      subscription.remove();
    }
  }, [])

  useEffect(() => {
    const setupPlayerAndAddTracks = async () => {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add(listData);
    };
    setupPlayerAndAddTracks();

    return () => {
      TrackPlayer.pause();
    };
  }, [])

  useEffect(() => {
    return () => pauseOnUnmount()
  }, [])

  const playPause = async (index) => {
    const updatedIsPlayingArray = [...isPlayingArray];
    const isCurrentlyPlaying = currentTrackIndex === index;

    if (isCurrentlyPlaying && updatedIsPlayingArray[index]) {
      await TrackPlayer.pause();
      updatedIsPlayingArray[index] = false;
    } else {
      if (currentTrackIndex !== null) {
        updatedIsPlayingArray[currentTrackIndex] = false;
        await TrackPlayer.pause();
      }

      await TrackPlayer.skip(index);
      await TrackPlayer.play();

      updatedIsPlayingArray[index] = true;
      setCurrentTrackIndex(index);
    }

    setIsPlayingArray(updatedIsPlayingArray);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          {listData.map((item, index) => (
            <View style={styles.singleContainer} key={index}>
              <View style={styles.cardTopRow}>
                <View style={styles.halrow}>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.titleText}>{item.title}</Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity onPress={() => playPause(index)}>
                  <AntDesign
                    name={isPlayingArray[index] ? 'pausecircle' : 'play'}
                    size={moderateScale(25)}
                    color={'#000'}
                  />
                </TouchableOpacity>

                <View style={styles.sliderView}>
                  {isPlayingArray[index] ? (
                    <Slider
                      value={progress.position}
                      maximumValue={progress.duration}
                      minimumValue={0}
                      thumbStyle={{ width: 20, height: 20 }}
                      thumbTintColor={'black'}
                      minimumTrackTintColor={'black'}
                      maximumTrackTintColor={'black'}
                      onValueChange={async (value) => {
                        await TrackPlayer.seekTo(value);
                      }}
                    />
                  ) : (
                    <Slider
                      value={progressArray[index].position}
                      minimumValue={0}
                      thumbStyle={{ width: 20, height: 20 }}
                      thumbTintColor={'black'}
                      minimumTrackTintColor={'black'}
                      maximumTrackTintColor={'black'}
                      onValueChange={async (value) => await TrackPlayer.seekTo(value)}
                    />
                  )}
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PlayAudio;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    color: '#117a4c',
    fontWeight:'700'
  },
  textStyle: {
    flex: 1,
    padding: 5,
  },
  buttonPlay: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(00,80,00,1)',
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  buttonStop: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(80,00,00,1)',
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  feature: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 7,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgb(180,180,180)',
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
  sliderView: {
    alignSelf: 'center',
    width: '90%'
  },
});