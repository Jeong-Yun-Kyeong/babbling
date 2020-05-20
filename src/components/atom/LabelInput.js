import React, {PureComponent} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

export default class LabelInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: Dimensions.get('screen').width,

      width: '100%',
      fontSize: 12,
      fontSize_input: 14,
      textPadding: 15,
      button: false,
    };
  }

  componentWillMount() {
    // if (this.state.width >= screenWidth - 80) {
    //   this.setState({width: screenWidth - 80});
    // }
  }

  render() {
    return (
      <View style={[{flexDirection: 'row', alignItems: 'flex-end'},(this.props.style || {})]}>
        <View
          style={{
            width: '100%'
          }}>
          {this.props.label ? (
            <Text style={{paddingLeft: this.state.textPadding, fontSize: this.state.fontSize, color: this.props.labelColor || '#00000099', fontWeight:'bold'}}>
              {this.props.label}
            </Text>
          ) : null}

          <View
            style={{
              flexGrow: 1,
              borderBottomColor: '#00000099',
              borderBottomWidth: 1,
            }}>
            <TextInput
              placeholder={this.props.placeholder || ''}
              style={{
                paddingLeft: this.state.textPadding,
                paddingTop: 7,
                paddingBottom: 5,
                fontSize: this.state.fontSize_input,
                color: this.props.textColor || 'black',
              }}
              placeholderTextColor={'#00000059'}
              defaultValue = {this.props.defaultValue || ''}
            />
          </View>
        </View>
        {this.props.button ? (
          <TouchableOpacity
            style={{
              backgroundColor: this.props.buttonColor || '#f5f5f5',
              padding: 10,
              borderRadius: 50,
              marginBottom: 8,
              // marginRight: 40,
            }}>
            <Text style={{fontSize: this.state.fontSize - 2, color:'#000000dd', fontWeight:'bold'}}>
              {this.props.btnTitle}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
