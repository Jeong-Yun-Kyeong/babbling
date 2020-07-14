import React, {PureComponent, Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {BLACK60, BLACK35} from '../../Constant';

export default class LabelInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 295,
      fontSize: 12,
      fontSize2: 14,
      //       screenWidth: Dimensions.get('screen').width,

      //       width: '100%',
      //       fontSize: 12,
      //       fontSize_input: 14,
      textPadding: 15,
      button: false,

      text: '',
    };
  }

  focus() {
    this._myInput.focus();
  }

  getText() {
    return this.state.text;
  }

  componentWillMount() {
    // if (this.state.width >= screenWidth - 80) {
    //   this.setState({width: screenWidth - 80});
    // }
    this.setState({text: this.props.defaultValue || ''});
  }

  render() {
    const textSumbitProps = {};
    if (this.props.onSubmitEditing) {
      textSumbitProps.onSubmitEditing = this.props.onSubmitEditing;
    }

    return (
      <View
        style={[
          {flexDirection: 'row', alignItems: 'flex-end'},
          this.props.style || {},
        ]}>
        <View
          style={{
            width: '100%',
          }}>
          {this.props.label ? (
            <Text
              style={{
                paddingLeft: this.state.textPadding,
                fontSize: this.state.fontSize,
                color: this.props.labelColor || BLACK60,
                fontWeight: 'bold',
              }}>
              {this.props.label}
            </Text>
          ) : null}

          <View
            style={{
              flexGrow: 1,
              borderBottomColor: BLACK60,
              borderBottomWidth: 0.5,
            }}>
            <TextInput
              placeholder={this.props.placeholder || ''}
              editable={this.props.disabled}
              selectTextOnFocus={this.props.disabled}
              secureTextEntry={this.props.secureTextEntry}
              style={{
                //                 padding: this.state.textPadding,
                //                 fontSize: this.state.fontSize2,
                paddingLeft: this.state.textPadding,
                paddingTop: 7,
                paddingBottom: 5,
                fontSize: this.state.fontSize_input,
                color: this.props.textColor || 'black',
              }}
              placeholderTextColor={BLACK35}
              defaultValue={this.props.defaultValue || ''}
              value={this.props.value}
              onChangeText={this.props.onChangeText}
              secureTextEntry={this.props.secureTextEntry}
              //               defaultValue = {this.state.text}

              ref={(input) => {
                this._myInput = input;
              }}
              //               onChangeText={(text)=>this.setState({text:text})}

              {...textSumbitProps}
            />
          </View>
        </View>
        {this.props.button ? (
          <TouchableOpacity
            onPress={this.props.onPress}
            style={{
              backgroundColor: this.props.buttonColor || '#f5f5f5',
              padding: 10,
              borderRadius: 50,
              marginBottom: 8,
              // marginRight: 40,
            }}>
            <Text
              style={{
                fontSize: this.state.fontSize - 2,
                color: '#000000dd',
                fontWeight: 'bold',
              }}>
              {this.props.btnTitle}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
