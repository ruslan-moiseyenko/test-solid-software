import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useChangeColor } from "../../hooks/useChangeColor";

type Props = {
  title: string;
};
export const ComponentWithRandomBackground: React.FC<Props> = ({ title }) => {
  const { backgroundColor, textColor, handleChangeBackgroundColor } =
    useChangeColor();
  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() => {
        handleChangeBackgroundColor();
      }}
    >
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={{ color: textColor }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
