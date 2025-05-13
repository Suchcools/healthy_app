import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

interface ActivityCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  unit: string;
  backgroundColor?: string;
}

export default function ActivityCard({
  icon,
  title,
  value,
  unit,
  backgroundColor
}: ActivityCardProps) {
  const { colors } = useTheme();
  
  return (
    <View 
      style={[
        styles.container, 
        { 
          backgroundColor: backgroundColor || colors.cardBackground
        }
      ]}
    >
      <View style={styles.iconContainer}>
        {icon}
      </View>
      
      <Text style={[styles.title, { color: colors.textSecondary }]}>
        {title}
      </Text>
      
      <View style={styles.valueContainer}>
        <Text style={[styles.value, { color: colors.text }]}>
          {value}
        </Text>
        <Text style={[styles.unit, { color: colors.textSecondary }]}>
          {unit}
        </Text>
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
  },
  iconContainer: {
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    marginBottom: 8,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  value: {
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
    marginRight: 4,
  },
  unit: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    marginBottom: 2,
  },
});