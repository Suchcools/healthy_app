import { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Calendar,
  Check,
  Clock,
  ArrowRight,
  Play,
  Dumbbell,
  Utensils,
  Brain
} from 'lucide-react-native';

import Header from '@/components/common/Header';
import { useTheme } from '@/hooks/useTheme';
import ProgressBar from '@/components/common/ProgressBar';

const plans = [
  {
    id: '1',
    title: 'Cardio Fitness',
    description: 'Improve heart health with daily cardio exercises',
    progress: 68,
    icon: <Dumbbell size={24} color="#0A84FF" />,
    color: '#0A84FF',
  },
  {
    id: '2',
    title: 'Balanced Nutrition',
    description: 'Personalized meal plan with healthy recipes',
    progress: 42,
    icon: <Utensils size={24} color="#30D158" />,
    color: '#30D158',
  },
  {
    id: '3',
    title: 'Sleep & Stress',
    description: 'Meditation and relaxation techniques for better sleep',
    progress: 75,
    icon: <Brain size={24} color="#8E8E93" />,
    color: '#8E8E93',
  },
];

const todayTasks = [
  {
    id: '1',
    title: '30-minute Cardio',
    time: '06:30 AM',
    completed: true,
  },
  {
    id: '2',
    title: 'Take Vitamins',
    time: '08:00 AM',
    completed: true,
  },
  {
    id: '3',
    title: 'Drink 2L of Water',
    time: 'All Day',
    completed: false,
  },
  {
    id: '4',
    title: 'Evening Meditation',
    time: '09:00 PM',
    completed: false,
  },
];

export default function PlansScreen() {
  const { colors } = useTheme();
  const [activeTab, setActiveTab] = useState('plans');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Header 
        title="i99 Health Plans" 
        rightIcon={<Calendar size={24} color={colors.text} />}
      />

      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[
            styles.tabButton, 
            activeTab === 'plans' && { borderBottomColor: colors.primary }
          ]}
          onPress={() => setActiveTab('plans')}
        >
          <Text style={[
            styles.tabText, 
            { color: activeTab === 'plans' ? colors.primary : colors.textSecondary }
          ]}>
            My Plans
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            styles.tabButton, 
            activeTab === 'today' && { borderBottomColor: colors.primary }
          ]}
          onPress={() => setActiveTab('today')}
        >
          <Text style={[
            styles.tabText, 
            { color: activeTab === 'today' ? colors.primary : colors.textSecondary }
          ]}>
            Today
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {activeTab === 'plans' ? (
          <>
            {/* Health Plans */}
            {plans.map((plan) => (
              <TouchableOpacity 
                key={plan.id}
                style={[styles.planCard, { backgroundColor: colors.cardBackground }]}
              >
                <View style={[styles.planIconContainer, { backgroundColor: `${plan.color}15` }]}>
                  {plan.icon}
                </View>
                <View style={styles.planContent}>
                  <View style={styles.planHeader}>
                    <Text style={[styles.planTitle, { color: colors.text }]}>
                      {plan.title}
                    </Text>
                    <ArrowRight size={20} color={colors.primary} />
                  </View>
                  <Text style={[styles.planDescription, { color: colors.textSecondary }]}>
                    {plan.description}
                  </Text>
                  <View style={styles.progressContainer}>
                    <ProgressBar 
                      progress={plan.progress} 
                      color={plan.color}
                      trackColor="#F2F2F7"
                    />
                    <Text style={[styles.progressText, { color: colors.textSecondary }]}>
                      {plan.progress}% Complete
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}

            {/* Recommended Plans */}
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>
                Recommended for You
              </Text>
              <TouchableOpacity>
                <Text style={[styles.viewAll, { color: colors.primary }]}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity 
              style={[styles.recommendedCard, { backgroundColor: colors.cardBackground }]}
            >
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
                style={styles.recommendedImage}
              />
              <View style={styles.recommendedContent}>
                <Text style={[styles.recommendedLabel, { color: '#FF9500' }]}>
                  PREMIUM
                </Text>
                <Text style={[styles.recommendedTitle, { color: colors.text }]}>
                  Weight Management Plan
                </Text>
                <Text style={[styles.recommendedDescription, { color: colors.textSecondary }]}>
                  A comprehensive 12-week plan for sustainable weight management
                </Text>
                <TouchableOpacity 
                  style={[styles.startButton, { backgroundColor: colors.primary }]}
                >
                  <Text style={styles.startButtonText}>Start Plan</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.recommendedCard, { backgroundColor: colors.cardBackground }]}
            >
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
                style={styles.recommendedImage}
              />
              <View style={styles.recommendedContent}>
                <Text style={[styles.recommendedLabel, { color: '#30D158' }]}>
                  FREE
                </Text>
                <Text style={[styles.recommendedTitle, { color: colors.text }]}>
                  7-Day Stress Relief
                </Text>
                <Text style={[styles.recommendedDescription, { color: colors.textSecondary }]}>
                  Daily meditation and mindfulness exercises to reduce stress
                </Text>
                <TouchableOpacity 
                  style={[styles.startButton, { backgroundColor: colors.primary }]}
                >
                  <Text style={styles.startButtonText}>Start Plan</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </>
        ) : (
          <>
            {/* Daily Progress */}
            <View style={[styles.dailyProgressCard, { backgroundColor: colors.cardBackground }]}>
              <View style={styles.dailyProgressHeader}>
                <Text style={[styles.dailyProgressTitle, { color: colors.text }]}>
                  Today's Progress
                </Text>
                <Text style={[styles.dailyProgressDate, { color: colors.textSecondary }]}>
                  June 15, 2025
                </Text>
              </View>

              <View style={styles.progressCircleContainer}>
                <View style={styles.progressCircle}>
                  <Text style={styles.progressValue}>68%</Text>
                  <Text style={styles.progressLabel}>Completed</Text>
                </View>
              </View>

              <View style={styles.statsRow}>
                <View style={styles.statItem}>
                  <Check size={16} color="#30D158" />
                  <Text style={[styles.statValue, { color: colors.text }]}>5/8</Text>
                  <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Tasks</Text>
                </View>
                <View style={styles.statItem}>
                  <Clock size={16} color="#0A84FF" />
                  <Text style={[styles.statValue, { color: colors.text }]}>45m</Text>
                  <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Exercise</Text>
                </View>
                <View style={styles.statItem}>
                  <Play size={16} color="#FF9500" />
                  <Text style={[styles.statValue, { color: colors.text }]}>3/4</Text>
                  <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Meals</Text>
                </View>
              </View>
            </View>

            {/* Today's Tasks */}
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>
                Today's Tasks
              </Text>
              <TouchableOpacity>
                <Text style={[styles.addTask, { color: colors.primary }]}>
                  + Add Task
                </Text>
              </TouchableOpacity>
            </View>

            {todayTasks.map((task) => (
              <TouchableOpacity 
                key={task.id}
                style={[styles.taskCard, { backgroundColor: colors.cardBackground }]}
              >
                <View style={[
                  styles.checkboxContainer, 
                  task.completed && { backgroundColor: '#30D158' }
                ]}>
                  {task.completed && <Check size={14} color="white" />}
                </View>
                <View style={styles.taskContent}>
                  <Text style={[
                    styles.taskTitle, 
                    { 
                      color: colors.text,
                      textDecorationLine: task.completed ? 'line-through' : 'none',
                    }
                  ]}>
                    {task.title}
                  </Text>
                  <View style={styles.taskTimeContainer}>
                    <Clock size={12} color={colors.textSecondary} />
                    <Text style={[styles.taskTime, { color: colors.textSecondary }]}>
                      {task.time}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}

            {/* Reminders */}
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>
                Reminders
              </Text>
            </View>

            <TouchableOpacity 
              style={[styles.reminderCard, { backgroundColor: '#E3F2FD' }]}
            >
              <View style={styles.reminderContent}>
                <Text style={styles.reminderTitle}>
                  Video call with Dr. Johnson
                </Text>
                <Text style={styles.reminderTime}>
                  Tomorrow at 2:30 PM
                </Text>
              </View>
              <TouchableOpacity style={styles.reminderAction}>
                <Text style={styles.reminderActionText}>
                  Remind
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  planCard: {
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
  planIconContainer: {
    padding: 12,
    borderRadius: 12,
    marginRight: 16,
    alignSelf: 'flex-start',
  },
  planContent: {
    flex: 1,
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  planTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  planDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    lineHeight: 20,
    marginBottom: 12,
  },
  progressContainer: {
    marginTop: 8,
  },
  progressText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    marginTop: 6,
    textAlign: 'right',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  viewAll: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  recommendedCard: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  recommendedImage: {
    width: '100%',
    height: 150,
  },
  recommendedContent: {
    padding: 16,
  },
  recommendedLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Bold',
    marginBottom: 8,
  },
  recommendedTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 8,
  },
  recommendedDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    lineHeight: 20,
    marginBottom: 16,
  },
  startButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  startButtonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  dailyProgressCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  dailyProgressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  dailyProgressTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  dailyProgressDate: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
  progressCircleContainer: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  progressCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 10,
    borderColor: '#0A84FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressValue: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#0A84FF',
  },
  progressLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#8E8E93',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
  },
  addTask: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  checkboxContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  taskContent: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    marginBottom: 4,
  },
  taskTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskTime: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    marginLeft: 4,
  },
  reminderCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  reminderContent: {
    flex: 1,
  },
  reminderTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#0A84FF',
    marginBottom: 4,
  },
  reminderTime: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666',
  },
  reminderAction: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#0A84FF',
    borderRadius: 8,
  },
  reminderActionText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
});