import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, I18nManager, View } from "react-native";
import Navigation from "./routes/Navigation";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

I18nManager.allowRTL = true;
I18nManager.forceRTL = true;

const getFonts = () => {
  return Font.loadAsync({
    iranSansBold: require("./assets/fonts/IRANSans_Bold.ttf"),
    iranSansLight: require("./assets/fonts/IRANSans_Light.ttf"),
    iranSansMedium: require("./assets/fonts/IRANSans_Medium.ttf"),
    ih: require("./assets/fonts/ih.ttf"),
  });
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await getFonts();
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) return null;

  return <Navigation onLayoutRootView={onLayoutRootView} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "iranSansLight",
  },
});
