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
      textPadding: 15,
      button: false,
    };
  }

  componentWillMount() {
    let screenWidth = Dimensions.get('screen').width;
    if (screenWidth >= 834) {
      this.setState({width: 500, fontSize: 18, fontSize2: 22, textPadding: 15});
    }
    console.log(this.state.width);
    // if (this.state.width >= screenWidth - 80) {
    //   this.setState({width: screenWidth - 80});
    // }
  }

  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
        <View
          style={{
            paddingBottom: 8,
            paddingTop: 8,
            width: this.state.width,
          }}>
          {this.props.label ? (
            <Text
              style={{
                marginLeft: 15,
                marginBottom: 5,
                fontSize: this.state.fontSize,
                color: this.props.labelColor || BLACK60,
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
              style={{
                padding: this.state.textPadding,
                fontSize: this.state.fontSize2,
                color: this.props.textColor || 'black',
              }}
              placeholderTextColor={BLACK35}
              defaultValue={this.props.defaultValue || ''}
              value={this.props.email}
              onChangeText={this.props.onChangeText}
              secureTextEntry={this.props.secureTextEntry}
            />
          </View>
        </View>
        {this.props.button ? (
          <TouchableOpacity
            style={{
              backgroundColor: this.props.buttonColor || '#f3f3f3',
              padding: 10,
              borderRadius: 50,
              marginBottom: 8,
              // marginRight: 40,
            }}>
            <Text style={{fontSize: this.state.fontSize - 2}}>
              {this.props.btnTitle}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
