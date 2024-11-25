import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { View, Image, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeProvider, useTheme } from './theme';  // Import ThemeProvider

export default function DrawerLayout() {
  const router = useRouter();
  const { top, bottom } = useSafeAreaInsets();

  return (
    <ThemeProvider>  {/* Wrap the app in ThemeProvider */}
      <GestureHandlerRootView style={{ flex: 1 }}>
        <DrawerLayoutContent top={top} bottom={bottom} />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

const DrawerLayoutContent = ({ top, bottom }) => {
  const router = useRouter();
  const { isDarkMode, colors } = useTheme(); // Use theme context for dark mode

  const year = new Date().getFullYear();

  const handleLogout = async () => {
    router.replace('/');
  };

  return (
    <Drawer drawerContent={(props) => (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <DrawerContentScrollView
          {...props}
          scrollEnabled={true}
          contentContainerStyle={{ paddingTop: top }}
        >
          <View style={{ justifyContent: "center", alignItems: "center", paddingTop: 50 + top, paddingBottom: 20 }}>
            <View style={styles.avatarContainer}>
              <Image source={require('../../assets/AppLogo.png')} style={styles.avatar} />
            </View>
          </View>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Logout"
            icon={() => (
              <Icon name='sign-out' color={colors.secondary} size={25} />
            )}
            labelStyle={{ fontSize: 18, color: colors.text }}
            onPress={handleLogout}
          />
        </DrawerContentScrollView>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 20 + bottom }}>
           <Text style={{ color: colors.text }}>© {year} JB Dynamics. All rights reserved.</Text>
        </View>
      </View>
    )}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Home',
          title: 'JB Dynamics',
          drawerIcon: () => (
            <Icon name='home' size={25} color={colors.secondary} />
          ),
          drawerLabelStyle: { fontSize: 18, color: colors.text },
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: 'Settings',
          title: 'Settings',
          drawerIcon: () => (
            <Icon name='cogs' size={25} color={colors.secondary} />
          ),
          drawerLabelStyle: { fontSize: 18, color: colors.text },
        }}
      />
    </Drawer>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
