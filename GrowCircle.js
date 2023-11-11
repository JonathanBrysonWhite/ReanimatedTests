import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps
} from 'react-native-reanimated';
import { Circle } from 'react-native-svg';
import { Svg } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
export default function GrowCircle() {
  const r = useSharedValue(20);
  const handlePress = () => {
    r.value += 10;
  }
  const animatedProps = useAnimatedProps(() => ({
    r: withTiming(r.value),
  }));
  return (
    <View style={styles.container}>
      <Svg style={styles.svg}>
        <AnimatedCircle 
        cx="50%" 
        cy="50%" 
        fill="blue"
        animatedProps={animatedProps}
        transform="" //idk why but this gets rid of a console error
        />
      </Svg>
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  svg: {
    height: 250,
    width: '100%'
  }
})
