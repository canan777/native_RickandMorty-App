import {StyleSheet} from 'react-native';
import Colors from '../theme/colors';

export const characterDetailStyle = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 200,
    borderWidth: 3,
  },
  statusAliveContainer: {
    borderColor: Colors.GREEN,
  },
  statusDeadContainer: {
    borderColor: Colors.RED,
  },
  aliveStatusContainer: {
    backgroundColor: Colors.GREEN,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
    borderRadius: 5,
  },
  deadStatusContainer: {
    backgroundColor: Colors.RED,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
    borderRadius: 5,
  },
  status: {
    color: Colors.WHITE,
    fontSize: 16,
    margin: 5,
    fontWeight: '500',
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    marginVertical: 15,
    fontWeight: 'bold',
    color: Colors.BLACK,
  },
  sectionContainer: {
    margin: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  sectionTitle: {
    textAlign: 'center',
    marginVertical: 10,
    color: Colors.BROWN,
  },
  infoContainer: {
    backgroundColor: '#e5ded1',
    padding: 10,
    flex: 1,
  },
  infoBox: {
    backgroundColor: '#e5ded1',
    flex: 2,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});