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
      width: 240,
      fontSize: 13,
      fontSize2: 15,
      textPadding: 10,
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
            <Text style={{fontSize: this.state.fontSize, color: this.props.labelColor || '#4d4d4d'}}>
              {this.props.label}
            </Text>
          ) : null}

          <View
            style={{
              flexGrow: 1,
              borderBottomColor: '#aaaaaa',
              borderBottomWidth: 1,
            }}>
            <TextInput
              placeholder={this.props.placeholder || ''}
              style={{
                padding: this.state.textPadding,
                fontSize: this.state.fontSize,
                color: this.props.textColor || 'black',
              }}
              placeholderTextColor={'#9d9d9d'}
              defaultValue = {this.props.defaultValue || ''}
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
