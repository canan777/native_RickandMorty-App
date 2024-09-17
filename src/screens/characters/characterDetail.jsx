import {View, Text, ScrollView, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getSingleCharacter} from '../../store/actions/charactersActions';
import Spinner from '../../components/ui/spinner';
import screenStyle from '../../styles/screenStyle';
import {characterDetailStyle} from '../../styles/charactersStyle';
import {statusTypes} from '../../utils/constants';

export default function CharacterDetail({route}) {
  const {characterID} = route?.params;
  const dispatch = useDispatch();

  const {pendingSingleCharacter, singleCharacter} = useSelector(
    state => state.characters,
  );

  useEffect(() => {
    dispatch(getSingleCharacter(characterID));
  }, []);

  return (
    <View style={screenStyle.container}>
      {pendingSingleCharacter ? (
        <Spinner />
      ) : (
        <ScrollView>
          <View style={characterDetailStyle.imageContainer}>
            <Image
              style={[
                characterDetailStyle.image,

                singleCharacter.status == statusTypes.ALIVE
                  ? characterDetailStyle.statusAliveContainer
                  : characterDetailStyle.statusDeadContainer,
              ]}
              source={{uri: singleCharacter.image}}
            />
            <View
              style={[
                singleCharacter.status == statusTypes.ALIVE
                  ? characterDetailStyle.aliveStatusContainer
                  : characterDetailStyle.deadStatusContainer,
              ]}>
              <Text style={characterDetailStyle.status}>
                {singleCharacter.status}
              </Text>
            </View>
          </View>
          <View style={characterDetailStyle.nameContainer}>
            <Text style={characterDetailStyle.name}>
              {singleCharacter.name}
            </Text>
          </View>
          <View style={characterDetailStyle.sectionContainer}>
            <Text style={characterDetailStyle.sectionTitle}>PROPERTIES</Text>
            <View style={characterDetailStyle.rowContainer}>
              <View style={characterDetailStyle.infoContainer}>
                <Text>Gender</Text>
              </View>
              <View style={characterDetailStyle.infoBox}>
                <Text>{singleCharacter.gender}</Text>
              </View>
            </View>
            <View style={characterDetailStyle.rowContainer}>
              <View style={characterDetailStyle.infoContainer}>
                <Text>Species</Text>
              </View>
              <View style={characterDetailStyle.infoBox}>
                <Text>{singleCharacter.species}</Text>
              </View>
            </View>
            <View style={characterDetailStyle.rowContainer}>
              <View style={characterDetailStyle.infoContainer}>
                <Text>Status</Text>
              </View>
              <View style={characterDetailStyle.infoBox}>
                <Text>{singleCharacter.status}</Text>
              </View>
            </View>
          </View>
          <View style={characterDetailStyle.sectionContainer}>
            <Text style={characterDetailStyle.sectionTitle}>WHERE ABOUTS</Text>
            <View style={characterDetailStyle.rowContainer}>
              <View style={characterDetailStyle.infoContainer}>
                <Text>Origin</Text>
              </View>
              <View style={characterDetailStyle.infoBox}>
                <Text>{singleCharacter.origin?.name}</Text>
              </View>
            </View>
            <View style={characterDetailStyle.rowContainer}>
              <View style={characterDetailStyle.infoContainer}>
                <Text>Location</Text>
              </View>
              <View style={characterDetailStyle.infoBox}>
                <Text>{singleCharacter.location?.name}</Text>
              </View>
            </View>
          </View>
          <View style={characterDetailStyle.sectionContainer}>
            <Text style={characterDetailStyle.sectionTitle}>
              FEATURE CHAPTERS
            </Text>
            <View style={characterDetailStyle.rowContainer}>
              <View style={characterDetailStyle.infoContainer}>
                <Text>Origin</Text>
              </View>
              <View style={characterDetailStyle.infoBox}>
                <Text>{singleCharacter.created}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
}
