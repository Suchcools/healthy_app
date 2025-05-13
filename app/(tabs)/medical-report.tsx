import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Upload, CircleAlert as AlertCircle, TrendingUp, User, Dna } from 'lucide-react-native';
import { useTheme } from '@/hooks/useTheme';

export default function MedicalReportScreen() {
  const { colors } = useTheme();
  const router = useRouter();

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