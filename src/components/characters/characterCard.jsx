import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import GenderIcon from './genderIcon';
import {ArrowRight} from 'iconsax-react-native';
import Colors from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {CHARACTERDETAIL} from '../../utils/routes';

const CharacterCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(CHARACTERDETAIL, {characterID: item.id})
      }
      style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.species}>{item.species}</Text>
        <View style={styles.statusContainer}>
          <View>
            <Text style={styles.status}>{item.status}</Text>
          </View>
          <View style={styles.genderContainer}>
            <GenderIcon size={15} gender={item.gender} />
            <Text style={styles.gender}>{item.gender}</Text>
          </View>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <ArrowRight size={20} color={Colors.BLACK} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e4dccf',
    flex: 1,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
  },
  image: {width: 100, height: 100, borderRadius: 5},
  infoContainer: {
    flex: 2,
    justifyContent: 'center',
    gap: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  species: {
    color: '#7f7558',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  status: {
    color: '#7f7558',
  },
  gender: {
    color: '#7f7558',
    marginLeft: 5,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    marginLeft: 10,
    alignItems: 'flex-end',
  },
});

export default CharacterCard;
