import React, { useEffect } from 'react';
import { ScrollView, Text, View, ActivityIndicator, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import EHeader from '../../../components/common/EHeader';
import api from '../../../api/api';
import HTMLView from 'react-native-htmlview';

const News = () => {
  const route = useRoute();
  const navigation = useNavigation()
  const [selectedItem, setSelectedItem] = React.useState();

  useEffect(() => {
    api
      .post('/content/getContentBySectionId', { section_id: route.params.id })
      .then((res) => {
        setSelectedItem(res.data.data);
      })
      .catch((error) => {
        console.log('Error fetching client details by ID:', error);
      });
  }, [route.params.id])

  // Conditional rendering based on the state of selectedItem
  if (selectedItem === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // hide space and set image in about description 
  const renderNode = (node, index, siblings, parent, defaultRenderer) => {

    if (node.name === 'img') {
      const width = node.attribs.width || 300;
      const height = node.attribs.height || 150;

      const { src } = node.attribs;

      return (
        <View key={index} style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image
            source={{ uri: src }}
            style={{ width: Number(width), height: Number(height), resizeMode: 'contain' }}
          />
        </View>
      );
    }

    if (node.name === 'p' && node.children && node.children.length > 0 && node.children[0].type === 'text' && node.children[0].data === '\u00a0') {
      return null;
    }

    if (node.name === 'p') {
      // Remove margin and padding for paragraphs
      return <Text key={index} style={{ margin: 0, padding: 0, color: '#000' }}>{defaultRenderer(node.children, parent)}</Text>;
    }

    if (node.name === 'li' && parent.name === 'ul') {
      return <Text key={index} style={{ color: '#000' }}>{'\u2022 '} {defaultRenderer(node.children, parent)} {'\n'}</Text>;
    }

    if (node.name === 'li' && parent.name === 'ol') {
      const listNumber = index + 1;
      return <Text key={index} style={{ color: '#000' }}>{`${listNumber}. `}{defaultRenderer(node.children, parent)} {'\n'} </Text>;
    }

    if (node.name === 'h4') {
      return (
        <Text key={index} style={{ fontWeight: 'bold', color: '#000' }}>
          {defaultRenderer(node.children, parent)}
        </Text>
      );
    }
  };

  return (
    <>
      <EHeader title={route.params.title} onPress={() => navigation.pop()} />
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <HTMLView value={selectedItem.map((item, index) =>
            `<h4><b>${index + 1}. ${item.title}</b></h4>
            ${item.description}
            \n`
          )}
            renderNode={renderNode} />
        </View>
      </ScrollView>
    </>
  )
}
export default News;