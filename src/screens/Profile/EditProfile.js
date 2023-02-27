import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import ProfileHeader from "../../components/ProfileCommonComponent/ProfileHeader";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import i18n from "i18n-js";
import {
  en,
  sp,
  bn,
} from "../../components/ProfileCommonComponent/localizations";

import { StatusBar } from "expo-status-bar";
import { useForm } from "react-hook-form";
import axios from "axios";
import Button from "../../components/Button";
import themeContext from "../../config/themeContext";

export default function EditProfile({ title, backBtn }) {
  i18n.fallbacks = true;
  i18n.translations = { en, sp, bn };


    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
     const [email, setEmail] = useState("");

  //update

  const { handleSubmit, control, reset } = useForm();

   const onSubmit = (data) => {
     console.log(data);
     axios.put("http://192.168.0.106:5000/updateUser", data)
     .then((res) => {
       if (res.data.insertedId) {
         alert("Profile updated successfully");
         reset();
       }
     });
   };

//mode 
const theme = useContext(themeContext)
   
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView>
        <ProfileHeader backBtn={true} title={i18n.t("EditProfile")} />
        <View>
          <View style={styles.detailsView}>
            <TextInput
              style={[styles.textSection, { color: theme.color }]}
              placeholder="Name"
              onChangeText={(text) => setName(text)}
              multiline={true}
              placeholderTextColor={theme.placeHolderTextColor}
            />

            <TextInput
              style={[styles.textSection, { color: theme.color }]}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor={theme.placeHolderTextColor}
            />
            <TextInput
              style={[styles.textSection, { color: theme.color }]}
              placeholder="Number"
              onChangeText={(text) => setNumber(text)}
              keyboardType="numeric"
              placeholderTextColor={theme.placeHolderTextColor}
            />
          </View>
          <View style={styles.button}>
            <Button
              style={styles.buttonInner}
              color
              title="Reset"
              onPress={() => {
                reset({
                  name: "",
                  email: "",
                  number: "",
                });
              }}
            />
          </View>

          <View style={{ marginTop: 40, marginBottom: 40 }}>
            <Button onPress={handleSubmit(onSubmit)} title="Update" />
          </View>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  detailsView: {
    padding: spacing[3],
  },

  textSection: {
    marginVertical: spacing[3],

    paddingVertical: spacing[3],
    borderBottomColor: colors.gray,

    borderBottomWidth: 0.5,
  },
  container: {
    padding: spacing[3],
    flex:1
  }
});
