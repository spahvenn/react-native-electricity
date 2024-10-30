import * as React from 'react';
import {Switch, Text} from 'react-native-paper';
import {useThemeContext} from '@/components/ThemeProvider/ThemeProvider';
import {View} from 'react-native';

const DarkModeToggleButton = () => {
  const {toggleTheme, isDarkMode} = useThemeContext();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{marginRight: 8}}>Dark Mode</Text>
      <Switch value={isDarkMode} onValueChange={toggleTheme} />
    </View>
  );
};

export default DarkModeToggleButton;
