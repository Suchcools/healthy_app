import { View, StyleSheet } from 'react-native';

interface ProgressBarProps {
  progress: number;
  height?: number;
  color?: string;
  trackColor?: string;
}

export default function ProgressBar({
  progress,
  height = 6,
  color = '#0A84FF',
  trackColor = '#E0E0E0',
}: ProgressBarProps) {
  // Ensure progress is between 0 and 100
  const validProgress = Math.min(Math.max(progress, 0), 100);
  
  return (
    <View style={[styles.track, { height, backgroundColor: trackColor }]}>
      <View 
        style={[
          styles.progress, 
          { 
            width: `${validProgress}%`,
            height,
            backgroundColor: color 
          }
        ]} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: '100%',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progress: {
    borderRadius: 4,
  },
});