import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

export default class FormButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: Dimensions.get('screen').width,

      width: 327,
      height: 52,
      fontSize: 16,
      marginTop: 20,
    };
  }

  componentWillMount() {

  }

  render() {
    return (
      <View style={this.props.style || {}}>
        <TouchableOpacity
          onPress={this.props.nav}
          style={{
            backgroundColor: this.props.backgroundColor
              ? this.props.backgroundColor
              : 'rgba(255,255,255,0.87)',
            width: '97%',
            height: this.state.height,
            borderRadius: 52,
            borderWidth: (this.props.borderColor) ? 1 : 0,
            borderColor: this.props.borderColor || 'red',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: this.state.fontSize,
              color: this.props.color ? this.props.color : 'black',
            }}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     width: width,
//     height: height,
//     borderRadius: 52,
//     justifyContent: 'center',
//     alignItems: 'center',
//     //
//     marginBottom: 20,
//   },
//   text: {
//     color: 'white',
//     fontSize: 11,
//     marginTop: 3,
//   },
// });
