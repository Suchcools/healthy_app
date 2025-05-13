import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Upload, CircleAlert as AlertCircle, TrendingUp, User } from 'lucide-react-native';
import { useTheme } from '@/hooks/useTheme';

export default function MedicalReportScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const [reports, setReports] = useState([
    {
      id: '1',
      date: '2025-03-15',
      abnormalItems: ['Blood Glucose', 'Cholesterol'],
      predictions: [
        { name: 'Blood Pressure', trend: 'increasing' },
        { name: 'BMI', trend: 'stable' }
      ]
    },
    {
      id: '2',
      date: '2025-02-15',
      abnormalItems: ['Blood Pressure'],
      predictions: [
        { name: 'Cholesterol', trend: 'decreasing' },
        { name: 'Blood Sugar', trend: 'stable' }
      ]
    }
  ]);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Medical Reports</Text>
        <TouchableOpacity onPress={() => router.push('/profile')}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity 
          style={[styles.uploadButton, { backgroundColor: colors.primary }]}
          onPress={() => {/* Handle upload */}}
        >
          <Upload size={24} color="white" />
          <Text style={styles.uploadText}>Upload New Report</Text>
        </TouchableOpacity>

        {reports.map((report) => (
          <View 
            key={report.id}
            style={[styles.reportCard, { backgroundColor: colors.cardBackground }]}
          >
            <Text style={[styles.reportDate, { color: colors.text }]}>
              Report Date: {report.date}
            </Text>

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <AlertCircle size={20} color={colors.error} />
                <Text style={[styles.sectionTitle, { color: colors.text }]}>
                  Abnormal Results
                </Text>
              </View>
              {report.abnormalItems.map((item, index) => (
                <Text 
                  key={index}
                  style={[styles.abnormalItem, { color: colors.error }]}
                >
                  • {item}
                </Text>
              ))}
            </View>

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <TrendingUp size={20} color={colors.primary} />
                <Text style={[styles.sectionTitle, { color: colors.text }]}>
                  Predictions
                </Text>
              </View>
              {report.predictions.map((prediction, index) => (
                <Text 
                  key={index}
                  style={[styles.predictionItem, { color: colors.textSecondary }]}
                >
                  • {prediction.name}: {prediction.trend}
                </Text>
              ))}
            </View>

            <TouchableOpacity 
              style={[styles.viewDetailsButton, { backgroundColor: colors.primary + '20' }]}
            >
              <Text style={[styles.viewDetailsText, { color: colors.primary }]}>
                View Full Report
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  uploadText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginLeft: 8,
  },
  reportCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  reportDate: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginLeft: 8,
  },
  abnormalItem: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    marginLeft: 28,
    marginBottom: 4,
  },
  predictionItem: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    marginLeft: 28,
    marginBottom: 4,
  },
  viewDetailsButton: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  viewDetailsText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
});