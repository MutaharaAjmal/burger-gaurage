import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GaragesScreen() {
  const garages = [
    'RAHWALL GRW',
    'BUS STOP GRW',
    'Sialkot Road GRW',
    'DASKA',
    'WAZIRABAD',
    'GUJRAT',
  ];

  return (
    <LinearGradient colors={['#0a0a0a', '#1a1a1a']} style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>OUR GARAGES</Text>
        <Text style={styles.subHeader}>FIND YOUR NEAREST PIT STOP</Text>

        {garages.map((garage, idx) => (
          <View key={idx} style={styles.garageCard}>
            <View style={styles.garageIcon}>
              <Text style={styles.icon}>🔧</Text>
            </View>
            <View>
              <Text style={styles.garageName}>{garage}</Text>
              <Text style={styles.garageStatus}>OPEN • 11AM - 2AM</Text>
            </View>
            <Text style={styles.distance}>📍</Text>
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff4500',
    textAlign: 'center',
    marginTop: 50,
  },
  subHeader: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginBottom: 30,
  },
  garageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff450030',
  },
  garageIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ff450020',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  icon: {
    fontSize: 24,
  },
  garageName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  garageStatus: {
    fontSize: 11,
    color: '#4caf50',
    marginTop: 4,
  },
  distance: {
    marginLeft: 'auto',
    fontSize: 18,
  },
});