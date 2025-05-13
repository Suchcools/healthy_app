import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import {
  Settings,
  Bell,
  HelpCircle,
  FileText,
  Heart,
  Shield,
  LogOut
} from 'lucide-react-native';
import { useTheme } from '@/hooks/useTheme';

interface DrawerMenuProps {
  onClose: () => void;
}

export default function DrawerMenu({ onClose }: DrawerMenuProps) {
  const { colors } = useTheme();
  const router = useRouter();

  const menuItems = [
    {
      icon: <Settings size={24} color={colors.text} />,
      label: 'Settings',
      onPress: () => {/* Handle navigation */},
    },
    {
      icon: <Bell size={24} color={colors.text} />,
      label: 'Notifications',
      onPress: () => {/* Handle navigation */},
    },
    {
      icon: <FileText size={24} color={colors.text} />,
      label: 'Medical Records',
      onPress: () => router.push('/medical-report'),
    },
    {
      icon: <Heart size={24} color={colors.text} />,
      label: 'Health Goals',
      onPress: () => {/* Handle navigation */},
    },
    {
      icon: <Shield size={24} color={colors.text} />,
      label: 'Privacy',
      onPress: () => {/* Handle navigation */},
    },
    {
      icon: <HelpCircle size={24} color={colors.text} />,
      label: 'Help & Support',
      onPress: () => {/* Handle navigation */},
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.cardBackground }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.text }]}>Menu</Text>
        </View>

        <View style={styles.menuItems}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => {
                item.onPress();
                onClose();
              }}
            >
              {item.icon}
              <Text style={[styles.menuItemLabel, { color: colors.text }]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity 
          style={[styles.logoutButton, { backgroundColor: colors.error + '20' }]}
        >
          <LogOut size={24} color={colors.error} />
          <Text style={[styles.logoutText, { color: colors.error }]}>
            Log Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: '100%',
    padding: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  menuItems: {
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  menuItemLabel: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    marginLeft: 12,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  logoutText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    marginLeft: 12,
  },
});