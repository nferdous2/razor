import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  TextInputBase,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { spacing } from "../../theme/spacing";
import { colors } from "../../theme/colors";
import ProfileHeader from "../../components/ProfileCommonComponent/ProfileHeader";
import axios from "axios";
import { useState } from "react";
import Button from "../../components/Button";
import CalendarPicker from "react-native-calendar-picker";
import Text from "../../components/Text/Text";
import TimePick from "../../components/TimePick";

import i18n from "i18n-js";
import {
  en,
  sp,
  bn,
} from "../../components/ProfileCommonComponent/localizations";


export default function Appointment() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);
  //date
  const [selectedStartDate, setSelectedStartDate] = useState("");

  const startDate = selectedStartDate
    ? selectedStartDate.format("DD-MM-YYYY").toString()
    : "";

  //submit
  const onSubmit = (data) => {
    console.log(data);

    axios.post("http://192.168.0.106:5000/appointment", data).then((res) => {
      if (res.data.insertedId) {
        alert("Appointment Booked Successfully");
      }
    });
  };

//language
  i18n.fallbacks = true;
  i18n.translations = { en, sp, bn };

  return (
    <ScrollView style={styles.detailsView}>
      <ProfileHeader backBtn={true} title={i18n.t("Appointment")} />
      {/* name */}
      <View>
        <Text preset="h6">Name</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textSection}
              onBlur={onBlur}
              placeholder="Enter Your Name"
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="name"
          rules={{ required: true }}
        />
      </View>
      {/* phone number */}
      <View style={{ marginTop: spacing[3] }}>
        <Text preset="h6">Phone Number</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textSection}
              onBlur={onBlur}
              keyboardType="numeric"
              placeholder="Enter Your Phone Number"
              maxLength={10}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="number"
          rules={{ required: true }}
        />
      </View>

      {/* Dates */}

      <View style={{ marginTop: spacing[3] }}>
        <CalendarPicker onDateChange={(date) => setSelectedStartDate(date)}/>
        <TextInput style={styles.textSection}>date={startDate}</TextInput>
      </View>

      {/* Time */}
      {/* <View style={{ marginTop: spacing[3] }}>
<Controller
control={control}
render={({ field }) => <TimePick {...field}/>}
name="time"
rules={{ required: true }}
/>
</View> */}

      <Button onPress={handleSubmit(onSubmit)} title="Continue" />
    </ScrollView>
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
});
