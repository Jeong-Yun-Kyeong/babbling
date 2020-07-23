import React, {PureComponent} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SVG from '../SvgComponent';
import {DARKMINT} from '../../Constant';

export default class CompareButton extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {/* pick비교함 주석 */}
        {/* <TouchableOpacity style={styles.button} onPress={this.props.goCompare}>
          <SvgXml xml={SVG('COMPARE')} />
          <Text style={styles.text}>비교함</Text>
        </TouchableOpacity> */}
      </>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: DARKMINT,
    width: 56,
    height: 56,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    bottom: 20,
    zIndex: 10,
    //
    shadowOffset: {
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,

    elevation: 5,
  },
  text: {
    color: 'white',
    fontSize: 11,
    marginTop: 3,
  },
});
