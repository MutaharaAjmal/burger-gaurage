import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function MenuScreen() {
  const menuItems = {
    burgers: [
      { name: 'Mini Burger', price: '700', type: '700cc' },
      { name: 'Small Burger', price: '1050', type: '1050cc' },
      { name: 'Medium Burger', price: '1450', type: '1450cc' },
      { name: 'Large Burger', price: '1850', type: '1850cc' },
    ],
    sauces: [
      { name: 'Kixx Chipotle', type: 'ENGINE OIL' },
      { name: 'Zic Atomic', type: 'ENGINE OIL' },
      { name: 'Helix Garlic', type: 'ENGINE OIL' },
    ],
    drinks: [
      { name: 'Ice Tea', price: '199', type: 'FUEL UP' },
      { name: 'Peach Ice Tea', price: '199', type: 'FUEL UP' },
    ],
    fries: [
      { name: 'Loaded Fries', desc: 'Packed with flavor', price: '550' },
    ],
  };

  return (
    <LinearGradient colors={['#0a0a0a', '#1a1a1a']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>BURGER GARAGE</Text>
        <Text style={styles.subHeader}>PERFORMANCE MENU</Text>

        {/* Burgers Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🔧 ENGINE TYPES</Text>
          {menuItems.burgers.map((item, idx) => (
            <View key={idx} style={styles.menuItem}>
              <View>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemType}>{item.type}</Text>
              </View>
              <Text style={styles.itemPrice}>Rs.{item.price}/-</Text>
            </View>
          ))}
        </View>

        {/* Sauces Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🛢️ ENGINE OIL</Text>
          {menuItems.sauces.map((item, idx) => (
            <View key={idx} style={styles.menuItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemType}>{item.type}</Text>
            </View>
          ))}
        </View>

        {/* Drinks Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>⛽ FUEL UP</Text>
          {menuItems.drinks.map((item, idx) => (
            <View key={idx} style={styles.menuItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>Rs.{item.price}/-</Text>
            </View>
          ))}
        </View>

        {/* Loaded Fries */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🍟 SPARE TIRES</Text>
          <View style={styles.menuItem}>
            <View>
              <Text style={styles.itemName}>Loaded Fries</Text>
              <Text style={styles.itemDesc}>Our loaded fries are a feast for the eyes and taste</Text>
            </View>
            <Text style={styles.itemPrice}>Rs.550/-</Text>
          </View>
        </View>
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
    letterSpacing: 3,
  },
  subHeader: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginBottom: 30,
    letterSpacing: 2,
  },
  section: {
    marginBottom: 25,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff4500',
    marginBottom: 15,
    borderLeftWidth: 3,
    borderLeftColor: '#ff4500',
    paddingLeft: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 10,
    marginBottom: 8,
    borderWidth: 0.5,
    borderColor: '#ff450030',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  itemType: {
    fontSize: 11,
    color: '#ff4500',
    marginTop: 2,
  },
  itemDesc: {
    fontSize: 11,
    color: '#aaa',
    marginTop: 2,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff4500',
  },
});