import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import { useTheme } from '@/hooks/useTheme';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  leftIcon?: React.ReactNode;
  onLeftIconPress?: () => void;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
}

export default function Header({
  title,
  showBackButton = false,
  leftIcon,
  onLeftIconPress,
  rightIcon,
  onRightIconPress,
}: HeaderProps) {
  const router = useRouter();
  const { colors } = useTheme();

  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        {showBackButton && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <ChevronLeft size={24} color={colors.text} />
          </TouchableOpacity>
        )}
        {leftIcon && (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={onLeftIconPress}
          >
            {leftIcon}
          </TouchableOpacity>
        )}
      </View>

      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>

      <View style={styles.rightContainer}>
        {rightIcon && (
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={onRightIconPress}
          >
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    paddingHorizontal: 16,
  },
  leftContainer: {
    width: 40,
  },
  rightContainer: {
    width: 40,
    alignItems: 'flex-end',
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  iconButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default Header