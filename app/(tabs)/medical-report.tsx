import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Upload, CircleAlert as AlertCircle, TrendingUp, User, Dna, Info } from 'lucide-react-native';
import { LineChart } from 'react-native-chart-kit';
import { useTheme } from '@/hooks/useTheme';
import { SCREEN_WIDTH } from '@/constants/Dimensions';

export default function MedicalReportScreen() {
  const { colors } = useTheme();
  const router = useRouter();

  const glucoseData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      data: [95, 102, 110, 118, 122, 126],
      color: () => colors.error,
      strokeWidth: 2
    }]
  };

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

        {/* Regular Medical Reports Section */}
        <View style={[styles.section, { backgroundColor: colors.cardBackground }]}>
          <View style={styles.sectionHeader}>
            <AlertCircle size={24} color={colors.primary} />
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Regular Medical Reports
            </Text>
          </View>
          
          <View style={styles.abnormalResult}>
            <Text style={[styles.abnormalTitle, { color: colors.error }]}>
              Abnormal: Blood Glucose
            </Text>
            <Text style={[styles.abnormalValue, { color: colors.textSecondary }]}>
              Value: 126 mg/dL (Normal range: 70-100 mg/dL)
            </Text>
            <Text style={[styles.abnormalDate, { color: colors.textSecondary }]}>
              Last tested: March 15, 2025
            </Text>

            <View style={styles.chartContainer}>
              <Text style={[styles.chartTitle, { color: colors.text }]}>6-Month Trend</Text>
              <LineChart
                data={glucoseData}
                width={SCREEN_WIDTH - 80}
                height={180}
                chartConfig={{
                  backgroundColor: colors.cardBackground,
                  backgroundGradientFrom: colors.cardBackground,
                  backgroundGradientTo: colors.cardBackground,
                  decimalPlaces: 0,
                  color: (opacity = 1) => colors.text,
                  labelColor: (opacity = 1) => colors.textSecondary,
                  style: {
                    borderRadius: 16
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: colors.cardBackground
                  }
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                }}
              />
            </View>
          </View>

          <TouchableOpacity 
            style={[styles.viewAllButton, { backgroundColor: colors.primary + '20' }]}
          >
            <Text style={[styles.viewAllText, { color: colors.primary }]}>
              View All Results
            </Text>
          </TouchableOpacity>
        </View>

        {/* WGS Reports Section */}
        <View style={[styles.section, { backgroundColor: colors.cardBackground }]}>
          <View style={styles.sectionHeader}>
            <Dna size={24} color={colors.accent} />
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Whole Genome Sequencing
            </Text>
          </View>
          
          <View style={styles.abnormalResult}>
            <Text style={[styles.abnormalTitle, { color: colors.error }]}>
              Gene Variant: BRCA1
            </Text>
            <Text style={[styles.abnormalValue, { color: colors.textSecondary }]}>
              Pathogenic variant detected
            </Text>
            <Text style={[styles.abnormalDate, { color: colors.textSecondary }]}>
              Report date: February 20, 2025
            </Text>

            <Image 
              source={{ uri: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
              style={styles.geneImage}
            />

            <View style={styles.infoBox}>
              <Info size={20} color={colors.primary} />
              <View style={styles.infoContent}>
                <Text style={[styles.infoTitle, { color: colors.text }]}>
                  Important Information
                </Text>
                <Text style={[styles.infoText, { color: colors.textSecondary }]}>
                  • Regular breast and ovarian cancer screening recommended{'\n'}
                  • Consider genetic counseling for family members{'\n'}
                  • Preventive measures and lifestyle modifications available{'\n'}
                  • Schedule follow-up with specialist
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity 
            style={[styles.viewAllButton, { backgroundColor: colors.primary + '20' }]}
          >
            <Text style={[styles.viewAllText, { color: colors.primary }]}>
              View Full Report
            </Text>
          </TouchableOpacity>
        </View>
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
  section: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 8,
  },
  abnormalResult: {
    padding: 12,
    backgroundColor: 'rgba(255, 55, 95, 0.1)',
    borderRadius: 8,
    marginBottom: 16,
  },
  abnormalTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginBottom: 4,
  },
  abnormalValue: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    marginBottom: 4,
  },
  abnormalDate: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    marginBottom: 12,
  },
  chartContainer: {
    marginTop: 12,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  chartTitle: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    marginBottom: 8,
  },
  geneImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginVertical: 12,
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  infoContent: {
    flex: 1,
    marginLeft: 12,
  },
  infoTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    lineHeight: 20,
  },
  viewAllButton: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
});