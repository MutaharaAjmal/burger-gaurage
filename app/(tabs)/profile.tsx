import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ProfileScreen() {
  return (
    <LinearGradient colors={['#0a0a0a', '#1a1a1a']} style={styles.container}>
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>🏎️</Text>
        </View>
        <Text style={styles.driverName}>COROLLA ZINGER</Text>
        <Text style={styles.driverId}>DRIVER ID: BG-2026</Text>

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>PIT STOPS</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>5,280</Text>
            <Text style={styles.statLabel}>TOTAL CC</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>GOLD</Text>
            <Text style={styles.statLabel}>TIER</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCard: {
    backgroundColor: '#222',
    borderRadius: 20,
    padding: 30,
    width: '90%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ff4500',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ff450020',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  avatarText: {
    fontSize: 50,
  },
  driverName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff4500',
  },
  driverId: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  stats: {
    flexDirection: 'row',
    marginTop: 30,
    width: '100%',
    justifyContent: 'space-around',
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  statLabel: {
    fontSize: 10,
    color: '#888',
    marginTop: 4,
  },
});