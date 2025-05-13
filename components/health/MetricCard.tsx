import { View, Text, StyleSheet } from 'react-native';
import { TrendingUp, TrendingDown } from 'lucide-react-native';
import { useTheme } from '@/hooks/useTheme';

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  change: string;
  icon: React.ReactNode;
  chartColor: string;
}

export default function MetricCard({
  title,
  value,
  unit,
  change,
  icon,
  chartColor
}: MetricCardProps) {
  const { colors } = useTheme();
  const isPositiveChange = change.startsWith('+');
  
  return (
    <View 
      style={[
        styles.container, 
        { backgroundColor: colors.cardBackground }
      ]}
    >
      <View style={styles.header}>
        {icon}
        <Text style={[styles.title, { color: colors.textSecondary }]}>
          {title}
        </Text>
      </View>
      
      <View style={styles.valueContainer}>
        <Text style={[styles.value, { color: colors.text }]}>
          {value}
        </Text>
        <Text style={[styles.unit, { color: colors.textSecondary }]}>
          {unit}
        </Text>
      </View>
      
      <View style={styles.changeContainer}>
        {isPositiveChange ? (
          <TrendingUp size={14} color="#30D158" />
        ) : (
          <TrendingDown size={14} color="#FF375F" />
        )}
        <Text 
          style={[
            styles.changeText, 
            { color: isPositiveChange ? '#30D158' : '#FF375F' }
          ]}
        >
          {change}
        </Text>
      </View>
      
      {/* Mini Chart */}
      <View style={styles.chartContainer}>
        <View style={[styles.chartBar, { height: 15, backgroundColor: `${chartColor}30` }]} />
        <View style={[styles.chartBar, { height: 25, backgroundColor: `${chartColor}50` }]} />
        <View style={[styles.chartBar, { height: 18, backgroundColor: `${chartColor}40` }]} />
        <View style={[styles.chartBar, { height: 30, backgroundColor: `${chartColor}60` }]} />
        <View style={[styles.chartBar, { height: 22, backgroundColor: `${chartColor}50` }]} />
        <View style={[styles.chartBar, { height: 32, backgroundColor: chartColor }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '48%',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    marginLeft: 8,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  value: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    marginRight: 4,
  },
  unit: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    marginBottom: 4,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  changeText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    marginLeft: 4,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 32,
  },
  chartBar: {
    width: 6,
    borderRadius: 3,
  },
});