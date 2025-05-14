import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { format } from 'date-fns';
import { 
  Bell, 
  Heart, 
  Footprints, 
  Droplets, 
  Moon, 
  ArrowRight,
  Menu
} from 'lucide-react-native';

import { SCREEN_WIDTH } from '@/constants/Dimensions';
import Header from '@/components/common/Header';
import HealthSummaryCard from '@/components/home/HealthSummaryCard';
import AppointmentCard from '@/components/home/AppointmentCard';
import ActivityCard from '@/components/home/ActivityCard';
import DrawerMenu from '@/components/common/DrawerMenu';
import { useTheme } from '@/hooks/useTheme';

export default function HomeScreen() {
  const { colors } = useTheme();
  const today = format(new Date(), 'EEEE, MMMM d');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Header 
        title="i99 HealthHub" 
        leftIcon={<Menu size={24} color={colors.text} />}
        onLeftIconPress={() => setIsDrawerOpen(true)}
        rightIcon={<Bell size={24} color={colors.text} />} 
      />
      
      {isDrawerOpen && (
        <View style={styles.drawerOverlay}>
          <TouchableOpacity 
            style={styles.drawerDismiss} 
            onPress={() => setIsDrawerOpen(false)} 
          />
          <DrawerMenu onClose={() => setIsDrawerOpen(false)} />
        </View>
      )}
      
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={[styles.greetingText, { color: colors.textSecondary }]}>
            Good Morning
          </Text>
          <Text style={[styles.nameText, { color: colors.text }]}>
            Jane Doe
          </Text>
          <Text style={[styles.dateText, { color: colors.textSecondary }]}>
            {today}
          </Text>
        </View>

        {/* Health Summary */}
        <HealthSummaryCard />

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <ActivityCard 
            icon={<Heart size={22} color="#FF375F" />}
            title="Heart Rate"
            value="72"
            unit="bpm"
            backgroundColor="#FFEBEE"
          />
          <ActivityCard 
            icon={<Footprints size={22} color="#0A84FF" />}
            title="Steps"
            value="8,243"
            unit="steps"
            backgroundColor="#E3F2FD"
          />
          <ActivityCard 
            icon={<Droplets size={22} color="#30D158" />}
            title="Water"
            value="1.5"
            unit="L"
            backgroundColor="#E8F5E9"
          />
          <ActivityCard 
            icon={<Moon size={22} color="#8E8E93" />}
            title="Sleep"
            value="7.5"
            unit="hrs"
            backgroundColor="#F0F0F0"
          />
        </View>

        {/* Upcoming Appointment */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Upcoming Appointment
          </Text>
          <TouchableOpacity>
            <Text style={[styles.seeAll, { color: colors.primary }]}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        
        <AppointmentCard
          doctorName="Dr. Sarah Johnson"
          specialty="Cardiologist"
          date="June 15, 2025"
          time="10:30 AM"
          image="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />

        {/* Health Tips */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Health Tips
          </Text>
          <TouchableOpacity>
            <Text style={[styles.seeAll, { color: colors.primary }]}>
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={[styles.tipCard, { backgroundColor: colors.cardBackground }]}
        >
          <View style={styles.tipTextContainer}>
            <Text style={[styles.tipTitle, { color: colors.text }]}>
              How to improve your sleep quality
            </Text>
            <Text style={[styles.tipDescription, { color: colors.textSecondary }]} numberOfLines={2}>
              Discover 5 science-backed methods to get better sleep and wake up refreshed
            </Text>
            <View style={styles.readMoreContainer}>
              <Text style={[styles.readMore, { color: colors.primary }]}>
                Read More
              </Text>
              <ArrowRight size={16} color={colors.primary} />
            </View>
          </View>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
            style={styles.tipImage}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  drawerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    flexDirection: 'row',
  },
  drawerDismiss: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  welcomeSection: {
    marginBottom: 24,
  },
  greetingText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
  nameText: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    marginTop: 4,
  },
  dateText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  seeAll: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  tipCard: {
    flexDirection: 'row',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  tipTextContainer: {
    flex: 1,
    marginRight: 16,
  },
  tipTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 8,
  },
  tipDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    lineHeight: 20,
  },
  tipImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  readMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  readMore: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    marginRight: 4,
  },
});