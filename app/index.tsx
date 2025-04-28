import { Text, View } from "react-native";
import MapView from "react-native-maps";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MapView style={{ flex: 1, width: "100%", height: "100%" }} />
    </View>
  );
}
