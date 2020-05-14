import React, {PureComponent} from 'react';
import {Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

export default class FormButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      width: 327,
      height: 48,
      fontSize: 15,
      marginTop: 20,
    };
  }

  componentWillMount() {
    let screenWidth = Dimensions.get('screen').width;
    if (screenWidth >= 834) {
      this.setState({
        width: 380,
        height: 65,
        fontSize: 22,
        marginTop: 35,
      });
    }
    if (this.state.width >= screenWidth - 80) {
      this.setState({width: screenWidth - 80});
    }
  }

  render() {
    return (
      <>
        <TouchableOpacity
          onPress={this.props.nav}
          style={{
            backgroundColor: this.props.backgroundColor
              ? this.props.backgroundColor
              : 'rgba(255,255,255,0.7)',
            width: this.state.width,
            height: this.state.height,
            borderRadius: 52,
            borderWidth: (this.props.borderColor) ? 1 : 0,
            borderColor: this.props.borderColor || 'red',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginBottom: 20,
            marginTop: this.state.marginTop,
          }}>
          <Text
            style={{
              fontSize: this.state.fontSize,
              color: this.props.color ? this.props.color : 'black',
            }}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
      </>
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
