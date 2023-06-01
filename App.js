import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
    return (
        <View style={{ width: "100%", height: "100%" }}>
            <WebView
                source={{ uri: "https://main--zippy-cucurucho-5e804d.netlify.app" }}
                onLoad={console.log("Si cargó xdxd")}
            ></WebView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
