import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Modal from 'react-native-modal';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Detail from '../screens/DetailTestScreen';
import Ingredients from '../screens/IngredientsTestScreen';

const Stack = createStackNavigator();

export default class DetailModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Modal
        style={{margin: 0}}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        backdropColor="transparent"
        // swipeDirection="right"
        // onSwipeComplete={this.props.closeModal}
        isVisible={this.props.isVisible}>
        <Stack.Navigator>
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              headerLeft: () => (
                <TouchableOpacity
                  style={{marginLeft: 24}}
                  onPress={this.props.closeModal}>
                  <Text>닫기</Text>
                </TouchableOpacity>
              ),
              headerTitle: () => (
                <Text style={{fontSize: 17, flexGrow: 1, alignItems: 'center'}}>
                  상세페이지
                </Text>
              ),
              headerRight: () => (
                <View style={{flexDirection: 'row', marginRight: 24}}>
                  <View style={{flex: 1, padding: 5}}>
                    <Text>?</Text>
                  </View>
                  <View style={{flex: 1, padding: 5}}>
                    <Text>S</Text>
                  </View>
                </View>
              ),
              headerStyle: {
                height: getStatusBarHeight() + 62,
              },
              headerForceInset: {top: 'never', bottom: 'never'},
            }}
          />
          <Stack.Screen name="Ingredients" component={Ingredients} />
        </Stack.Navigator>
        {/* </View> */}
      </Modal>
    );
  }
}
