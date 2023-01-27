//confirmation page


import { View, Text, StyleSheet, Modal, Alert, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileHeader from '../../components/ProfileCommonComponent/ProfileHeader';
import { spacing } from '../../theme/spacing';
import { colors } from '../../theme/colors';
// import Button from '../../components/Button';

export default function Confirm() {
      // const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
      <ProfileHeader backBtn={true} title="Review Summary" />
      <View style={styles.liststyle}>
        <Text style={{ fontSize: 18, color: colors.gray }}>Barber/Salon</Text>
        {/* <Text> {}</Text> */}
      </View>
      <View style={styles.liststyle}>
        <Text style={{ fontSize: 18, color: colors.gray }}>Name</Text>
        {/* <Text> {}</Text> */}
      </View>
      <View style={styles.liststyle}>
        <Text style={{ fontSize: 18, color: colors.gray }}>Number</Text>
        {/* <Text> {}</Text> */}
      </View>
      <View style={styles.liststyle}>
        <Text style={{ fontSize: 18, color: colors.gray }}>Date</Text>
        {/* <Text> {}</Text> */}
      </View>

      {/* Modal  */}
      {/* <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                source={{
                  uri: "https://the-potato.net/extra-images/404_text_01.png",
                }}
                style={{
                  height: 50,
                  width: 150,
                  borderRadius: 5,
                }}
              ></Image>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View> */}
      <Button title="Confirm"/> 
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  liststyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing[5],
    borderBottomWidth: spacing[4],
    borderBottomColor: "#EBEBEB",
    marginBottom: spacing[3],
  },
  
});
