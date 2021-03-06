import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfileList() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      {/* content1 */}
      <TouchableOpacity
        style={styles.profileArea}
        onPress={() => {
          navigation.navigate('Profile');
        }}
      >
        <View style={styles.profileName}>
          <Image
            style={styles.userImage}
            source={require('../../assets//MyProfileImage.png')}
          />
          <Text style={styles.Username}>持持 一太</Text>
        </View>
        <View style={styles.profileInfomation}>
          <View style={styles.departmentArea}>
            <Text style={styles.departmentLabel}>部署</Text>
            <Text style={styles.departmentContent}>
              金融ソリューション事業一部
            </Text>
          </View>
          <View style={styles.hobbyArea}>
            <Text style={styles.hobbyLabel}>趣味</Text>
            <Text style={styles.hobbyContent}>旅行</Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* content2 */}
      <TouchableOpacity
        style={styles.profileArea}
        onPress={() => {
          navigation.navigate('Profile');
        }}
      >
        <View style={styles.profileName}>
          <Image
            style={styles.userImage}
            source={require('../../assets//MyProfileImage.png')}
          />
          <Text style={styles.Username}>持持 二太</Text>
        </View>
        <View style={styles.profileInfomation}>
          <View style={styles.departmentArea}>
            <Text style={styles.departmentLabel}>部署</Text>
            <Text style={styles.departmentContent}>
              金融ソリューション事業二部
            </Text>
          </View>
          <View style={styles.hobbyArea}>
            <Text style={styles.hobbyLabel}>趣味</Text>
            <Text style={styles.hobbyContent}>ゴルフ</Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* content3 */}
      <TouchableOpacity
        style={styles.profileArea}
        onPress={() => {
          navigation.navigate('Profile');
        }}
      >
        <View style={styles.profileName}>
          <Image
            style={styles.userImage}
            source={require('../../assets//MyProfileImage.png')}
          />
          <Text style={styles.Username}>持持 三太</Text>
        </View>
        <View style={styles.profileInfomation}>
          <View style={styles.departmentArea}>
            <Text style={styles.departmentLabel}>部署</Text>
            <Text style={styles.departmentContent}>
              金融ソリューション事業三部
            </Text>
          </View>
          <View style={styles.hobbyArea}>
            <Text style={styles.hobbyLabel}>趣味</Text>
            <Text style={styles.hobbyContent}>サウナ</Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* content4 */}
      <TouchableOpacity
        style={styles.profileArea}
        onPress={() => {
          navigation.navigate('Profile');
        }}
      >
        <View style={styles.profileName}>
          <Image
            style={styles.userImage}
            source={require('../../assets//MyProfileImage.png')}
          />
          <Text style={styles.Username}>持持 四太</Text>
        </View>
        <View style={styles.profileInfomation}>
          <View style={styles.departmentArea}>
            <Text style={styles.departmentLabel}>部署</Text>
            <Text style={styles.departmentContent}>
              金融ソリューション事業四部
            </Text>
          </View>
          <View style={styles.hobbyArea}>
            <Text style={styles.hobbyLabel}>趣味</Text>
            <Text style={styles.hobbyContent}>料理</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profileArea: {
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  profileName: {
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  Username: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  departmentArea: {
    flexDirection: 'row',
  },
  departmentLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 19,
  },
  departmentContent: {
    fontSize: 20,
    paddingLeft: 19,
  },
  hobbyArea: {
    flexDirection: 'row',
    paddingLeft: 19,
    paddingTop: 16,
    paddingBottom: 33,
  },
  hobbyLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  hobbyContent: {
    fontSize: 20,
    paddingLeft: 19,
  },
});
