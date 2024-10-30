import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Button, TextInput, Avatar, IconButton} from 'react-native-paper';
import useProfile from './useProfile';
import {styles} from './ProfileStyle';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../../types/types';
const ProfileSettingsScreen = () => {
  const {
    username,
    email,
    profileImage,
    imageUploading,
    handleImagePick,
    handleProfileUpdate,
  } = useProfile();

  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const [newUsername, setNewUsername] = useState(username);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.avatarContainer}>
          <Text style={styles.Text}>Profile Setting</Text>
          {profileImage ? (
            <Avatar.Image
              size={100}
              source={{uri: profileImage}}
              style={styles.avatar}
            />
          ) : (
            <Avatar.Icon size={100} icon="account" style={styles.avatar} />
          )}
          <TouchableOpacity
            style={styles.iconButtonContainer}
            onPress={handleImagePick}
            disabled={imageUploading}>
            <IconButton icon="plus" size={20} style={styles.iconButton} />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Username"
            value={newUsername}
            onChangeText={setNewUsername}
          />
          <TextInput value={email} disabled style={styles.emailInput} />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => handleProfileUpdate(newUsername)}
          style={styles.updateButton}>
          Update Profile
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('ChangePassword', {})}
          style={styles.updateButton}>
          Change Password
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default ProfileSettingsScreen;
