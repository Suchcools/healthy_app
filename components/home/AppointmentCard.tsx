import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Calendar, Clock } from 'lucide-react-native';
import { useTheme } from '@/hooks/useTheme';

interface AppointmentCardProps {
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  image: string;
}

export default function AppointmentCard({
  doctorName,
  specialty,
  date,
  time,
  image
}: AppointmentCardProps) {
  const { colors } = useTheme();
  
  return (
    <TouchableOpacity 
      style={[styles.container, { backgroundColor: colors.cardBackground }]}
    >
      <Image 
        source={{ uri: image }}
        style={styles.doctorImage}
      />
      
      <View style={styles.content}>
        <Text style={[styles.doctorName, { color: colors.text }]}>
          {doctorName}
        </Text>
        <Text style={[styles.specialty, { color: colors.textSecondary }]}>
          {specialty}
        </Text>
        
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Calendar size={14} color={colors.primary} />
            <Text style={[styles.detailText, { color: colors.textSecondary }]}>
              {date}
            </Text>
          </View>
          
          <View style={styles.detailItem}>
            <Clock size={14} color={colors.primary} />
            <Text style={[styles.detailText, { color: colors.textSecondary }]}>
              {time}
            </Text>
          </View>
        </View>
      </View>
      
      <TouchableOpacity 
        style={[styles.confirmButton, { backgroundColor: colors.primary }]}
      >
        <Text style={styles.confirmText}>Confirm</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 4,
  },
  specialty: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    marginBottom: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  detailText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    marginLeft: 4,
  },
  confirmButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    height: 36,
    alignSelf: 'center',
  },
  confirmText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
});