import { TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { usePathname, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import BlurView from './BlurView';

const TABS = [
  {
    name: 'Home',
    icon: 'home' as const,
    path: '',
  },
  {
    name: 'Explore',
    icon: 'bag-handle' as const,
    path: 'explore',
  },
  {
    name: 'Cart',
    icon: 'cart' as const,
    path: 'cart',
  },
  {
    name: 'Profile',
    icon: 'person' as const,
    path: 'profile',
  },
];

export function TabBar({ navigation }: BottomTabBarProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <BlurView intensity={100} style={styles.container}>
      {TABS.map((tab, index) => {
        const isActive = pathname === `/${tab.path}` || (pathname === '/' && tab.path === '');
        return (
          <TouchableOpacity
            key={index}
            style={[styles.tab]}
            onPress={() => {
              const path = tab.path === '' ? '/' : `/(tabs)/${tab.path}`;
              router.push(path as any);
            }}
          >
            <Ionicons
              name={`${tab.icon}${isActive ? '' : '-outline'}`}
              size={24}
              color={isActive ? '#000' : '#8E8E93'}
            />
            
          </TouchableOpacity>
        );
      })}
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#8E8E9355',
    position: 'absolute',
    bottom: "3%",
    width: '90%',
    left: '5%',
    borderRadius: 50,
    overflow: 'hidden',
    backdropFilter: 'blur(10px)',
    gap: 1,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
