import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Activity, Heart, Weight, ChartBar as BarChart4, Thermometer, ArrowRight } from 'lucide-react-native';

import Header from '@/components/common/Header';
import MetricCard from '@/components/health/MetricCard';
import HealthChart from '@/components/health/HealthChart';
import { useTheme } from '@/hooks/useTheme';

const timePeriods = ['Day', 'Week', 'Month', 'Year'];

export default function HealthDataScreen() {
  const { colors } = useTheme();
  const [activePeriod, setActivePeriod] = useState('Week');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Header 
        title="Health Data" 
        showBackButton={false}
      />
      
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Time Period Selector */}
        <View style={styles.periodContainer}>
          {timePeriods.map((period) => (
            <TouchableOpacity
              key={period}
              style={[
                styles.periodButton,
                activePeriod === period && { 
                  backgroundColor: colors.primary 
                }
              ]}
              onPress={() => setActivePeriod(period)}
            >
              <Text 
                style={[
                  styles.periodText, 
                  { 
                    color: activePeriod === period 
                      ? colors.white 
                      : colors.textSecondary 
                  }
                ]}
              >
                {period}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Main Health Metrics */}
        <View style={styles.metricsContainer}>
          <MetricCard
            title="Heart Rate"
            value="72"
            unit="bpm"
            change="+2"
            icon={<Heart size={20} color="#FF375F" />}
            chartColor="#FF375F"
          />
          <MetricCard
            title="Blood Pressure"
            value="120/80"
            unit="mmHg"
            change="-5"
            icon={<Activity size={20} color="#0A84FF" />}
            chartColor="#0A84FF"
          />
          <MetricCard
            title="Weight"
            value="68.5"
            unit="kg"
            change="-0.5"
            icon={<Weight size={20} color="#30D158" />}
            chartColor="#30D158"
          />
          <MetricCard
            title="Blood Sugar"
            value="98"
            unit="mg/dL"
            change="+3"
            icon={<Thermometer size={20} color="#FF9500" />}
            chartColor="#FF9500"
          />
        </View>
        
        {/* Detailed Chart Section */}
        <View style={[styles.chartSection, { backgroundColor: colors.cardBackground }]}>
          <View style={styles.chartHeader}>
            <View>
              <Text style={[styles.chartTitle, { color: colors.text }]}>
                Weekly Activity
              </Text>
              <Text style={[styles.chartSubtitle, { color: colors.textSecondary }]}>
                Jun 10 - Jun 16, 2025
              </Text>
            </View>
            <View style={styles.chartIconContainer}>
              <BarChart4 size={20} color={colors.primary} />
            </View>
          </View>
          
          <HealthChart />
          
          <View style={styles.chartFooter}>
            <View style={styles.metricIndicator}>
              <View style={[styles.indicatorDot, { backgroundColor: '#0A84FF' }]} />
              <Text style={[styles.indicatorText, { color: colors.textSecondary }]}>
                Steps
              </Text>
            </View>
            <View style={styles.metricIndicator}>
              <View style={[styles.indicatorDot, { backgroundColor: '#30D158' }]} />
              <Text style={[styles.indicatorText, { color: colors.textSecondary }]}>
                Calories
              </Text>
            </View>
            <View style={styles.metricIndicator}>
              <View style={[styles.indicatorDot, { backgroundColor: '#FF9500' }]} />
              <Text style={[styles.indicatorText, { color: colors.textSecondary }]}>
                Heart Rate
              </Text>
            </View>
          </View>
        </View>
        
        {/* Health Records Section */}
        <View style={styles.recordsHeader}>
          <Text style={[styles.recordsTitle, { color: colors.text }]}>
            Health Records
          </Text>
          <TouchableOpacity>
            <Text style={[styles.viewAll, { color: colors.primary }]}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity 
          style={[styles.recordCard, { backgroundColor: colors.cardBackground }]}
        >
          <View style={styles.recordInfo}>
            <Text style={[styles.recordType, { color: colors.text }]}>
              Annual Checkup
            </Text>
            <Text style={[styles.recordDate, { color: colors.textSecondary }]}>
              May 15, 2025
            </Text>
            <Text style={[styles.recordProvider, { color: colors.textSecondary }]}>
              Central Hospital
            </Text>
          </View>
          <View style={styles.viewDetails}>
            <ArrowRight size={20} color={colors.primary} />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.recordCard, { backgroundColor: colors.cardBackground }]}
        >
          <View style={styles.recordInfo}>
            <Text style={[styles.recordType, { color: colors.text }]}>
              Blood Test
            </Text>
            <Text style={[styles.recordDate, { color: colors.textSecondary }]}>
              April 28, 2025
            </Text>
            <Text style={[styles.recordProvider, { color: colors.textSecondary }]}>
              LifeLabs Medical
            </Text>
          </View>
          <View style={styles.viewDetails}>
            <ArrowRight size={20} color={colors.primary} />
          </View>
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
  periodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    marginTop: 8,
  },
  periodButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  periodText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  metricsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  chartSection: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  chartTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  chartSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    marginTop: 4,
  },
  chartIconContainer: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'rgba(10, 132, 255, 0.1)',
  },
  chartFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  metricIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  indicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  indicatorText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
  },
  recordsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  recordsTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  viewAll: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  recordCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  recordInfo: {
    flex: 1,
  },
  recordType: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginBottom: 4,
  },
  recordDate: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    marginBottom: 2,
  },
  recordProvider: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
  viewDetails: {
    padding: 8,
  }
});