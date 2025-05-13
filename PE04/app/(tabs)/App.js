import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

const userImage = require('../../assets/images/user.png');
const SCREEN_WIDTH = Dimensions.get('window').width;

const data = [
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John builds mobile apps using React Native.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Jane Smith',
    occupation: 'Mobile Engineer',
    description: 'Jane optimizes performance for cross-platform apps.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Alice Johnson',
    occupation: 'Frontend Architect',
    description: 'Alice leads UI architecture across mobile and web.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Mark Lee',
    occupation: 'UI/UX Designer',
    description: 'Mark creates intuitive designs for user interfaces.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Emily Chen',
    occupation: 'Full-Stack Developer',
    description: 'Emily works across the full web and app stack.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Robert Kim',
    occupation: 'DevOps Engineer',
    description: 'Robert handles pipelines and cloud deployment.',
    showThumbnail: true
  }
];

const ProfileCard = ({ image, name, occupation, description, onPress, showThumbnail }) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.cardWrapper}>
      <View style={[styles.cardContainer, showThumbnail ? styles.cardThumbnail : styles.cardFull]}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        {!showThumbnail && (
          <>
            <Text style={styles.cardName}>{name}</Text>
            <View style={styles.cardOccupationContainer}>
              <Text style={styles.cardOccupation}>{occupation}</Text>
            </View>
            <Text style={styles.cardDescription}>{description}</Text>
          </>
        )}
      </View>
    </TouchableHighlight>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  handleProfileCardPress = (index) => {
    const newData = this.state.data.map((item, i) => ({
      ...item,
      showThumbnail: i === index ? !item.showThumbnail : true
    }));
    this.setState({ data: newData });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.data.map((item, index) => (
          <ProfileCard
            key={`card-${index}`}
            image={item.image}
            name={item.name}
            occupation={item.occupation}
            description={item.description}
            showThumbnail={item.showThumbnail}
            onPress={() => this.handleProfileCardPress(index)}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
    height: '100%'
  },
  cardWrapper: {
    margin: 5
  },
  cardContainer: {
    backgroundColor: 'dodgerblue',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  cardThumbnail: {
    width: SCREEN_WIDTH / 3 - 20,
    height: SCREEN_WIDTH / 3 - 20,
    transform: [{ scale: 1 }]
  },
  cardFull: {
    width: SCREEN_WIDTH / 1.5,
    height: 250,
    padding: 10
  },
  cardImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  cardImage: {
    width: 50,
    height: 50
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5
  },
  cardOccupationContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 5
  },
  cardOccupation: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white'
  },
  cardDescription: {
    fontSize: 12,
    fontStyle: 'italic',
    color: 'white',
    textAlign: 'center',
    marginTop: 5
  }
});
