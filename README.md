# rn-responsive

[![npm package]]

**rn-responsive** is an smart module that provides 2 simple methods for React Native developers to improve yours UI elements fully responsive without media queries.

It also provides an optional method for screen orientation detection and automagic rerendering the new window dimensions.

Try it and make easy to code!

## Install

## Usage
- This package provides two basic methods:
  * responsiveWidth - receives a number (float or integer) as the parameter representing the desired width percentage.
  
  * responsiveHeight - receives a number (float or integer) as the parameter representing the desired height percentage.

- Methods *resonsiveWidth* and *responsiveHeight* can be used with any width or heigth css styles.
- Both methos return an number.

## Example

```sh
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { responsiveWidth as wp, responsiveHeight as hp } from 'rn-responsive';

export default class Example extends Component {
    <View style={styles.container}>
        <Text style={styles.bigText}>Bigger text</Text>
        <Text style={styles.mediumText}>Medium text</Text>
        <Text style={styles.smallText}>Small text</Text>
        <View style={styles.rectangle}></View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContents: 'center',
        alignContens: 'center',
        paddingVertical: hp(5), // 5% of height window
    },
    bigText: {fontSize: hp(40) // 40% of height window },
    mediumText: {fontSize: hp(20) // 20% of height window },
    smallText: {fontSize: hp(5) // 5% of height window },
    rectangle: {
        height: hp(15), // 15% of height window
        width: wp(20), // 20% of width window
        backgroundColor: 'red',
    },
});
```

# License
MIT

# Pull
Pull request are welcome!
Please make PR to development branch though and not to master.
Thanks

# PS
This lib is based on [react-native-responsive-screen](https://github.com/marudy/react-native-responsive-screen)
