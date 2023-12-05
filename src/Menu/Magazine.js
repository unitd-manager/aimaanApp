import React from 'react';
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';
import EHeader from '../components/common/EHeader'
import { useRoute } from '@react-navigation/native';

const Magazine = () => {
    const route = useRoute();

  return (
    <>
      <EHeader title={route.params.title} />
    </>
  )
}

export default Magazine