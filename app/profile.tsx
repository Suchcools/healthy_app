import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Image,
  Switch 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { User, FileText, Heart, Settings, Bell, ChevronRight, Moon, LogOut, CircleHelp as HelpCircle, Shield, X } from 'lucide-react-native';
import { useTheme } from '@/hooks/useTheme';

const profileMenuItems = [
  {
    id: 'health',
    label: 'Health Records',
    icon: <FileText size={22} color="#0A84FF" />,
    background: 'rgba(10, 132, 255, 0.1)',
  },
  {
    id: 'preferences',
    label: 'Health Preferences',
    icon: <Heart size={22} color="#FF375F" />,
    background: 'rgba(255, 55, 95, 0.1)',
  },
  {
    id: 'appointments',
    label: 'Appointments',
    icon: <Bell size={22} color="#FF9500" />,
    background: 'rgba(255, 149, 0, 0.1)',
  },
  {
    id: 'settings',
    label: 'App Settings',
    icon: <Settings size={22} color="#8E8E93" />,
    background: 'rgba(142, 142, 147, 0.1)',
  },
];

export default function ProfileScreen() {
  const { colors, isDark, toggleTheme } = useTheme();
  const router = useRouter();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.closeButton} 
          onPress={() => router.back()}
        >
          <X size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Profile</Text>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
              style={styles.profileImage}
            />
            <TouchableOpacity 
              style={[styles.editButton, { backgroundColor: colors.primary }]}
            >
              <User size={16} color="white" />
            </TouchableOpacity>
          </View>
          
          <Text style={[styles.profileName, { color: colors.text }]}>
            Jane Doe
          </Text>
          <Text style={[styles.profileEmail, { color: colors.textSecondary }]}>
            jane.doe@example.com
          </Text>
          
          <TouchableOpacity 
            style={[styles.editProfileButton, { backgroundColor: colors.cardBackground }]}
          >
            <Text style={[styles.editProfileText, { color: colors.text }]}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>

        {/* Health Stats */}
        <View style={[styles.statsCard, { backgroundColor: colors.cardBackground }]}>
          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: colors.text }]}>A+</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Blood</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: colors.text }]}>62kg</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Weight</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: colors.text }]}>168cm</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Height</Text>
          </View>
        </View>

        {/* Profile Menu */}
        <View style={styles.menuSection}>
          {profileMenuItems.map((item) => (
            <TouchableOpacity 
              key={item.id}
              style={[styles.menuItem, { backgroundColor: colors.cardBackground }]}
            >
              <View style={[styles.menuIconContainer, { backgroundColor: item.background }]}>
                {item.icon}
              </View>
              <Text style={[styles.menuLabel, { color: colors.text }]}>
                {item.label}
              </Text>
              <ChevronRight size={20} color={colors.textSecondary} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Preferences */}
        <View style={[styles.preferencesSection, { backgroundColor: colors.cardBackground }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Preferences
          </Text>
          
          <View style={styles.preferenceItem}>
            <View style={styles.preferenceLeft}>
              <View style={[styles.prefIconContainer, { backgroundColor: 'rgba(142, 142, 147, 0.1)' }]}>
                <Moon size={20} color="#8E8E93" />
              </View>
              <Text style={[styles.preferenceLabel, { color: colors.text }]}>
                Dark Mode
              </Text>
            </View>
            <Switch
              value={isDark}
              onValueChange={toggleTheme}
              trackColor={{ false: '#E0E0E0', true: `${colors.primary}80` }}
              thumbColor={colors.primary}
            />
          </View>
          
          <View style={styles.preferenceItem}>
            <View style={styles.preferenceLeft}>
              <View style={[styles.prefIconContainer, { backgroundColor: 'rgba(255, 55, 95, 0.1)' }]}>
                <Bell size={20} color="#FF375F" />
              </View>
              <Text style={[styles.preferenceLabel, { color: colors.text }]}>
                Notifications
              </Text>
            </View>
            <Switch
              value={true}
              trackColor={{ false: '#E0E0E0', true: `${colors.primary}80` }}
              thumbColor={colors.primary}
            />
          </View>
          
          <View style={styles.preferenceItem}>
            <View style={styles.preferenceLeft}>
              <View style={[styles.prefIconContainer, { backgroundColor: 'rgba(10, 132, 255, 0.1)' }]}>
                <Shield size={20} color="#0A84FF" />
              </View>
              <Text style={[styles.preferenceLabel, { color: colors.text }]}>
                Privacy Controls
              </Text>
            </View>
            <ChevronRight size={20} color={colors.textSecondary} />
          </View>
        </View>

        {/* Support & Logout */}
        <TouchableOpacity style={[styles.supportButton, { backgroundColor: colors.cardBackground }]}>
          <HelpCircle size={20} color={colors.primary} />
          <Text style={[styles.supportText, { color: colors.text }]}>
            Help & Support
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color="#FF375F" />
          <Text style={styles.logoutText}>
            Log Out
          </Text>
        </TouchableOpacity>

        <Text style={[styles.versionText, { color: colors.textSecondary }]}>
          Version 1.0.0
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 0,
  },
  closeButton: {
    padding: 8,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  profileHeader: {
    alignItems: 'center',
    marginVertical: 24,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    marginBottom: 16,
  },
  editProfileButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  editProfileText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  statsCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 16,
    paddingVertical: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
  },
  divider: {
    width: 1,
    backgroundColor: '#E0E0E0',
  },
  menuSection: {
    marginBottom: 24,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  menuIconContainer: {
    padding: 10,
    borderRadius: 12,
    marginRight: 16,
  },
  menuLabel: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Inter-Medium',
  },
  preferencesSection: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 16,
  },
  preferenceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  preferenceLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  prefIconContainer: {
    padding: 10,
    borderRadius: 10,
    marginRight: 16,
  },
  preferenceLabel: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
  },
  supportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  supportText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    marginLeft: 8,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    backgroundColor: 'rgba(255, 55, 95, 0.1)',
  },
  logoutText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#FF375F',
    marginLeft: 8,
  },
  versionText: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    marginTop: 8,
  },
});