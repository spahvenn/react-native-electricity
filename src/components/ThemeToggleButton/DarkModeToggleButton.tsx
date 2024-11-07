import * as React from 'react';
import {Switch, Text} from 'react-native-paper';
import {View} from 'react-native';
import {useStore} from '@/src/store/store';

const DarkModeToggleButton = () => {
  const {toggleDarkMode, isDarkMode} = useStore();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{marginRight: 8}}>Dark Mode</Text>
      <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
    </View>
  );
};

export default DarkModeToggleButton;
