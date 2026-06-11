import { View, Text, StyleSheet, Animated, Easing, ImageBackground } from 'react-native';
import { useEffect, useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const rpmAnim = useRef(new Animated.Value(0)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // RPM needle animation (idle)
    Animated.loop(
      Animated.sequence([
        Animated.timing(rpmAnim, {
          toValue: 1,
          duration: 800,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(rpmAnim, {
          toValue: 0,
          duration: 800,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Engine shake effect
    Animated.loop(
      Animated.sequence([
        Animated.timing(shakeAnim, {
          toValue: 2,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: -2,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const rpmInterpolate = rpmAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['-120deg', '120deg'],
  });

  return (
    <ImageBackground
      source={require('../../assets/images/garage-bg.jpg')}
      style={styles.background}
      blurRadius={2}
    >
      <LinearGradient
        colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)']}
        style={styles.overlay}
      >
        <Animated.View style={{ transform: [{ translateX: shakeAnim }] }}>
          <View style={styles.dashboard}>
            <Text style={styles.greeting}>GOOD EVENING, DRIVER!</Text>
            
            {/* Speedometer */}
            <View style={styles.speedometer}>
              <View style={styles.speedoInner}>
                <Text style={styles.speedLabel}>RPM</Text>
                <Animated.View
                  style={[
                    styles.needle,
                    { transform: [{ rotate: rpmInterpolate }] },
                  ]}
                />
                <Text style={styles.speedValue}>IDLE</Text>
              </View>
            </View>

            {/* Search bar like car console */}
            <View style={styles.searchBox}>
              <Text style={styles.searchIcon}>🔧</Text>
              <Text style={styles.searchText}>Search your ride...</Text>
            </View>

            {/* Quick ride selection */}
            <Text style={styles.sectionTitle}>CHOOSE YOUR RIDE</Text>
            <View style={styles.carGrid}>
              {['COROLLA', 'HILUX', 'CIVIC', 'PICANTO'].map((car) => (
                <View key={car} style={styles.carCard}>
                  <Text style={styles.carName}>{car}</Text>
                  <Text style={styles.carPrice}>ZINGER EDITION</Text>
                </View>
              ))}
            </View>

            {/* Burger sizes as "ENGINE TYPES" */}
            <Text style={styles.sectionTitle}>ENGINE TYPES</Text>
            <View style={styles.engineGrid}>
              {[
                { name: 'MINI', cc: '700cc', price: 'Rs.700' },
                { name: 'SMALL', cc: '1050cc', price: 'Rs.1050' },
                { name: 'MEDIUM', cc: '1450cc', price: 'Rs.1450' },
                { name: 'LARGE', cc: '1850cc', price: 'Rs.1850' },
              ].map((engine) => (
                <View key={engine.name} style={styles.engineCard}>
                  <Text style={styles.engineName}>{engine.name}</Text>
                  <Text style={styles.engineCc}>{engine.cc}</Text>
                  <Text style={styles.enginePrice}>{engine.price}</Text>
                </View>
              ))}
            </View>
          </View>
        </Animated.View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
  },
  dashboard: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  greeting: {
    color: '#ff4500',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: 20,
  },
  speedometer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  speedoInner: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#2a2a2a',
    borderWidth: 4,
    borderColor: '#ff4500',
    alignItems: 'center',
    justifyContent: 'center',
  },
  speedLabel: {
    color: '#888',
    fontSize: 12,
  },
  needle: {
    width: 4,
    height: 60,
    backgroundColor: '#ff4500',
    position: 'absolute',
    bottom: 75,
    borderRadius: 2,
    transformOrigin: 'bottom',
  },
  speedValue: {
    color: '#ff4500',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  searchBox: {
    backgroundColor: '#333',
    borderRadius: 30,
    padding: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#ff4500',
  },
  searchIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  searchText: {
    color: '#aaa',
    fontSize: 16,
  },
  sectionTitle: {
    color: '#ff4500',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    letterSpacing: 1,
  },
  carGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  carCard: {
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#ff4500',
    borderRadius: 10,
    padding: 12,
    width: '48%',
    marginBottom: 10,
  },
  carName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  carPrice: {
    color: '#ff4500',
    fontSize: 10,
    marginTop: 4,
  },
  engineGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  engineCard: {
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 12,
    width: '48%',
    marginBottom: 10,
    alignItems: 'center',
  },
  engineName: {
    color: '#ff4500',
    fontSize: 18,
    fontWeight: 'bold',
  },
  engineCc: {
    color: '#888',
    fontSize: 12,
  },
  enginePrice: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
});