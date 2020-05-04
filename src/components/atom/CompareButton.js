import React, {PureComponent} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SVG from '../SvgComponent';

export default class CompareButton extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <TouchableOpacity style={styles.button} onPress={this.props.goCompare}>
          <SvgXml xml={SVG('COMPARE')} />
          <Text style={styles.text}>비교함</Text>
        </TouchableOpacity>
      </>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#32CC73',
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    bottom: 20,
    zIndex: 10,
  },
  text: {
    color: 'white',
    fontSize: 11,
    marginTop: 3,
  },
});
