import React from 'react';
import { View, SafeAreaView, Text, Image, StyleSheet } from 'react-native';

export default function ProfileList() {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileImage}>
        <Image
          style={styles.userImage}
          source={require('../../assets//MyProfileImage.png')}
        />
      </View>
      <SafeAreaView style={styles.profileInformation}>
        <View style={styles.profileArea}>
          <Text style={styles.profileInformationLabel}>名前</Text>
          <Text style={styles.profileInformationContent}>持持 一太</Text>
        </View>
        <View style={styles.profileArea}>
          <Text style={styles.profileInformationLabel}>内線</Text>
          <Text style={styles.profileInformationContent}>864455</Text>
        </View>
        <View style={styles.profileArea}>
          <Text style={styles.profileInformationLabel}>部署</Text>
          <Text style={styles.profileInformationContent}>
            金融ソリューション事業一部 1G
          </Text>
        </View>
        <View style={styles.profileArea}>
          <Text style={styles.profileInformationLabel}>出身</Text>
          <Text style={styles.profileInformationContent}>横浜</Text>
        </View>
        <View style={styles.profileArea}>
          <Text style={styles.profileInformationLabel}>趣味</Text>
          <Text style={styles.profileInformationContent}>サウナ</Text>
        </View>
        <View style={styles.profileArea}>
          <Text style={styles.profileInformationLabel}>一言</Text>
          <Text style={styles.profileInformationContent}>
            サウナに行って一緒にリフレッシュしませんかー？
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {},
  profileImage: {
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  userImage: {
    width: 103,
    height: 103,
    borderRadius: 103,
  },
  Username: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  profileArea: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  profileInformationLabel: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    paddingLeft: 19,
  },
  profileInformationContent: {
    width: '80%',
    fontSize: 20,
    alignSelf: 'center',
    paddingLeft: 19,
  },
});
