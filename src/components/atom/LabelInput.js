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
      width: 333,
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
    if (this.state.width >= screenWidth - 80) {
      this.setState({width: screenWidth - 80});
    }
  }

  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
        <View
          style={{
            paddingBottom: 8,
            paddingTop: 8,
            width: this.props.button ? this.state.width - 40 : this.state.width,
          }}>
          {this.props.label ? (
            <Text style={{fontSize: this.state.fontSize, color: '#4d4d4d'}}>
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
              placeholder={this.props.placeholder}
              style={{
                padding: this.state.textPadding,
                fontSize: this.state.fontSize,
                color: 'black',
              }}
              placeholderTextColor={'#9d9d9d'}
            />
          </View>
        </View>
        {this.props.button ? (
          <TouchableOpacity
            style={{
              backgroundColor: 'lightgray',
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
