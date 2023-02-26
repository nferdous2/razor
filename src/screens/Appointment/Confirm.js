import React, { useState } from 'react';
import axios from 'axios';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { spacing } from '../../theme/spacing';
import ProfileHeader from '../../components/ProfileCommonComponent/ProfileHeader';
import { colors } from '../../theme/colors';
import Button from '../../components/Button';


const Confirm = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [userOtp, setUserOtp] = useState('');
const [isVerified, setIsVerified] = useState(false);

  const handleSubmit = async () => {
    try {
      // Generate OTP
      const newOtp = Math.floor(1000 + Math.random() * 9000);
      setOtp(newOtp);
      // Send OTP to phone number using Clickatell API
      // const response = await axios.post('http://192.168.0.103:5000/payment', {
      //   to: phoneNumber,
      //   content: `${newOtp}`
      // }, {
      //   headers: {
      //     'Authorization':   `Bearer $W3HvzU6BSDOZm9HshLnf8g==`
      //   }
      // });
      // Store OTP and phone number in MongoDB
      await axios.post('http://192.168.0.103:5000/payment', {
        phoneNumber,
        otp: newOtp
      });
      alert("Your OTP is: " + newOtp);
    } catch (error) {
      console.error(error);
    }
  };
const handleVerify = async () => {
  try {
  // Verify user entered OTP
  if (userOtp === otp) {
  setIsVerified(true);
  console.log('OTP verified successfully');
  } 
  else {
  console.error('OTP verification fail');
  }
  } catch (error) {
  console.error(error);
  }
  };
  
  return (
    <ScrollView>
          <SafeAreaView>
   
   <ProfileHeader backBtn={true} title="Payment" />
    <View style={{marginBottom:spacing[9]}}>
    <Text   style={{ fontSize: 18 , padding: spacing[5]}}>
     Phone Number
    </Text>

   <TextInput style={styles.liststyle}
      value={phoneNumber}
       onChangeText={text => setPhoneNumber(text)}
       placeholder="Enter phone number"
       keyboardType="numeric"
     />
     <Button title="Send OTP" onPress={handleSubmit} />
     <Text  style={{ fontSize: 18 , padding: spacing[5]}}>OTP</Text>
       {
         !isVerified && (
         <>
         <TextInput
          style={styles.liststyle}
         value={userOtp}
         onChangeText={text => setUserOtp(text)}
         placeholder="Enter OTP"
         />
         <Button onPress={handleVerify} title="Verify OTP" />
         </>
         )
         }
   </View>
   </SafeAreaView>
    </ScrollView>

  );
};
const styles = StyleSheet.create({
  liststyle: {
    padding: spacing[5],
    borderBottomWidth: spacing[4],
    borderBottomColor: colors.gray,
    borderBottomWidth: 0.5,
    marginBottom: spacing[3],
    fontSize: 18 ,
  },
  
});

export default Confirm;

