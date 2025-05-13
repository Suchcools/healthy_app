import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import ProgressBar from '@/components/common/ProgressBar';

export default function HealthSummaryCard() {
  const { colors } = useTheme();
  
  return (
    <View style={[styles.container, { backgroundColor: colors.cardBackground }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        Health Summary
      </Text>
      
      <Text style={[styles.date, { color: colors.textSecondary }]}>
        June 15, 2025
      </Text>
      
      <View style={styles.scoreContainer}>
        <View style={[styles.scoreCircle, { borderColor: '#0A84FF' }]}>
          <Text style={styles.scoreValue}>82</Text>
          <Text style={styles.scoreLabel}>Points</Text>
        </View>
        
        <View style={styles.scoresDetails}>
          <View style={styles.scoreItem}>
            <View style={styles.scoreHeader}>
              <Text style={[styles.scoreTitle, { color: colors.text }]}>
                Activity
              </Text>
              <Text style={[styles.scorePercent, { color: '#0A84FF' }]}>
                75%
              </Text>
            </View>
            <ProgressBar progress={75} color="#0A84FF" />
          </View>
          
          <View style={styles.scoreItem}>
            <View style={styles.scoreHeader}>
              <Text style={[styles.scoreTitle, { color: colors.text }]}>
                Nutrition
              </Text>
              <Text style={[styles.scorePercent, { color: '#30D158' }]}>
                88%
              </Text>
            </View>
            <ProgressBar progress={88} color="#30D158" />
          </View>
          
          <View style={styles.scoreItem}>
            <View style={styles.scoreHeader}>
              <Text style={[styles.scoreTitle, { color: colors.text }]}>
                Sleep
              </Text>
              <Text style={[styles.scorePercent, { color: '#FF9500' }]}>
                70%
              </Text>
            </View>
            <ProgressBar progress={70} color="#FF9500" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 16,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  date: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    marginTop: 4,
    marginBottom: 16,
  },
  scoreContainer: {
    flexDirection: 'row',
  },
  scoreCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  scoreValue: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#0A84FF',
  },
  scoreLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#8E8E93',
  },
  scoresDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scoreItem: {
    marginBottom: 10,
  },
  scoreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  scoreTitle: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  scorePercent: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
});