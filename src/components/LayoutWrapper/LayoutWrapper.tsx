// components/LayoutWrapper.js
import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';

export default function LayoutWrapper({children}: {children: ReactNode}) {
  const theme = useTheme();
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      {children}
    </View>
  );
}
