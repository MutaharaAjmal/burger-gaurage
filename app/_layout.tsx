import { Stack } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Audio } from 'expo-av';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  const soundRef = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    async function playEngineSound() {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require('../assets/sounds/engine-rumble.mp3'),
          { isLooping: true, volume: 0.3 }
        );
        soundRef.current = sound;
        await sound.playAsync();
      } catch (error) {
        console.log('Engine sound error:', error);
      }
    }

    playEngineSound();

    return () => {
      if (soundRef.current) {
        soundRef.current.stopAsync();
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </>
  );
}