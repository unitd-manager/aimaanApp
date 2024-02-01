import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import EHeader from '../../../components/common/EHeader';
import api from '../../../api/api';
import ShowImage from './ShowImage';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const Gallery = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = useState(null);

    const openModal = (url) => {
        setSelectedImageUrl(url);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedImageUrl(null);
    };

    const [gallery, setGallery] = useState([])
    const [loading, setLoading] = useState(true);

    const ImgGallery = () => {
        api
            .get('/content/getPhotoGallery')
            .then((res) => {
                setGallery(res.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log('Error fetching data:', error);
            });
    };

    useEffect(() => {
        ImgGallery();
    }, [])


    return (
        <>
            <EHeader title="Photo Gallery" />
            {loading && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#163a71" />
                </View>
            )}
            <ScrollView>

                <View style={styles.galleryContainer}>
                    {gallery.map((img, i) => (
                        <TouchableOpacity key={i} onPress={() => openModal(img.file_name)}>
                            <Image source={{ uri: `http://43.228.126.245/aimaanAPI/storage/uploads/${img.file_name}` }} style={{
                                height: deviceHeight / 7,
                                width: deviceWidth / 3 - 6,
                                borderRadius: 10, margin: 2,
                            }}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
                <ShowImage
                    visible={modalVisible}
                    imageUrl={selectedImageUrl}
                    onClose={closeModal}
                />
            </ScrollView>
        </>
    )
}

export default Gallery;

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    galleryContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 2
    }
});
