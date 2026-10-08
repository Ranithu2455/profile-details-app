import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Swap this for a local image: require('./assets/avatar.png')
const AVATAR = { uri: 'https://i.pravatar.cc/300?img=12' };

export default function App() {
  const [points, setPoints] = useState(0);

  const profile = {
    name: 'Diluka',
    email: 'diluka.w@nsbm.ac.lk',
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* App bar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>My Profile</Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <View style={styles.avatarWrap}>
          <View style={styles.avatarCircle}>
            <Image source={AVATAR} style={styles.avatar} />
          </View>
          <View style={styles.badge}>
            <Ionicons name="checkmark" size={28} color="#5CFF3A" />
          </View>
        </View>

        <View style={styles.divider} />

        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{profile.name}</Text>

        <Text style={[styles.label, styles.gap]}>Email</Text>
        <View style={styles.row}>
          <Ionicons name="mail" size={20} color="#000" />
          <Text style={[styles.value, styles.rowText]}>{profile.email}</Text>
        </View>

        <Text style={[styles.label, styles.gap]}>Points</Text>
        <View style={styles.row}>
          <Ionicons name="star" size={20} color="#000" />
          <Text style={[styles.value, styles.rowText]}>{points}</Text>
        </View>
      </View>

      {/* Floating action button */}
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.8}
        onPress={() => setPoints((p) => p + 1)}
      >
        <Ionicons name="add" size={26} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#000' },
  appBar: {
    height: 56,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  appBarTitle: { color: '#fff', fontSize: 18, fontWeight: '500' },
  body: { flex: 1, backgroundColor: '#F5F5F5', padding: 16 },
  avatarWrap: { alignItems: 'center', marginTop: 8 },
  avatarCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  avatar: { width: 120, height: 120, borderRadius: 60 },
  badge: { position: 'absolute', bottom: 8, right: '34%' },
  divider: { height: 2, backgroundColor: '#000', marginVertical: 16 },
  label: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  value: { fontSize: 16, color: '#222', marginTop: 6 },
  gap: { marginTop: 24 },
  row: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
  rowText: { marginTop: 0, marginLeft: 10 },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
});
