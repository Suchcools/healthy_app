import { View, StyleSheet } from 'react-native';
import Svg, { Path, Circle, G, Line, Text as SvgText } from 'react-native-svg';
import { line, curveBasis } from 'd3-shape';
import { useTheme } from '@/hooks/useTheme';

export default function HealthChart() {
  const { colors } = useTheme();
  
  // Mock data
  const stepsData = [2000, 8000, 6000, 9000, 7500, 10000, 8500];
  const caloriesData = [1200, 1800, 1500, 2000, 1700, 2200, 1900];
  const heartRateData = [75, 72, 78, 68, 80, 70, 72];
  
  // Chart dimensions
  const width = 320;
  const height = 200;
  const paddingBottom = 30;
  const paddingLeft = 30;
  const chartWidth = width - paddingLeft;
  const chartHeight = height - paddingBottom;
  
  // Scale data to fit chart
  const scaleSteps = (val: number) => {
    const maxSteps = Math.max(...stepsData);
    return chartHeight - (val / maxSteps) * chartHeight;
  };
  
  const scaleCalories = (val: number) => {
    const maxCalories = Math.max(...caloriesData);
    return chartHeight - (val / maxCalories) * chartHeight;
  };
  
  const scaleHeartRate = (val: number) => {
    const min = Math.min(...heartRateData);
    const max = Math.max(...heartRateData);
    const range = max - min;
    return chartHeight - ((val - min) / range) * chartHeight;
  };
  
  // Generate paths
  const stepsPoints = stepsData.map((val, i) => [
    paddingLeft + (i * (chartWidth / 6)),
    scaleSteps(val)
  ]);
  
  const caloriesPoints = caloriesData.map((val, i) => [
    paddingLeft + (i * (chartWidth / 6)),
    scaleCalories(val)
  ]);
  
  const heartRatePoints = heartRateData.map((val, i) => [
    paddingLeft + (i * (chartWidth / 6)),
    scaleHeartRate(val)
  ]);
  
  const lineGenerator = line()
    .x((d: any) => d[0])
    .y((d: any) => d[1])
    .curve(curveBasis);
  
  const stepsPath = lineGenerator(stepsPoints as any);
  const caloriesPath = lineGenerator(caloriesPoints as any);
  const heartRatePath = lineGenerator(heartRatePoints as any);
  
  // X-axis labels
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  return (
    <View style={styles.container}>
      <Svg width={width} height={height}>
        {/* Grid lines */}
        <G>
          {[0, 1, 2, 3].map((i) => (
            <Line
              key={`grid-${i}`}
              x1={paddingLeft}
              y1={i * (chartHeight / 3)}
              x2={width}
              y2={i * (chartHeight / 3)}
              stroke={colors.border}
              strokeWidth={1}
              strokeDasharray="5,5"
            />
          ))}
        </G>
        
        {/* X-axis */}
        <Line
          x1={paddingLeft}
          y1={chartHeight}
          x2={width}
          y2={chartHeight}
          stroke={colors.border}
          strokeWidth={1}
        />
        
        {/* Y-axis */}
        <Line
          x1={paddingLeft}
          y1={0}
          x2={paddingLeft}
          y2={chartHeight}
          stroke={colors.border}
          strokeWidth={1}
        />
        
        {/* X-axis labels */}
        {days.map((day, i) => (
          <SvgText
            key={`day-${i}`}
            x={paddingLeft + i * (chartWidth / 6)}
            y={height - 10}
            fontSize={10}
            fill={colors.textSecondary}
            textAnchor="middle"
          >
            {day}
          </SvgText>
        ))}
        
        {/* Steps line */}
        <Path
          d={stepsPath || ''}
          fill="none"
          stroke="#0A84FF"
          strokeWidth={2}
        />
        
        {/* Calories line */}
        <Path
          d={caloriesPath || ''}
          fill="none"
          stroke="#30D158"
          strokeWidth={2}
        />
        
        {/* Heart rate line */}
        <Path
          d={heartRatePath || ''}
          fill="none"
          stroke="#FF9500"
          strokeWidth={2}
        />
        
        {/* Data points */}
        {stepsPoints.map((point, i) => (
          <Circle
            key={`steps-${i}`}
            cx={point[0]}
            cy={point[1]}
            r={3}
            fill="#FFFFFF"
            stroke="#0A84FF"
            strokeWidth={2}
          />
        ))}
        
        {caloriesPoints.map((point, i) => (
          <Circle
            key={`calories-${i}`}
            cx={point[0]}
            cy={point[1]}
            r={3}
            fill="#FFFFFF"
            stroke="#30D158"
            strokeWidth={2}
          />
        ))}
        
        {heartRatePoints.map((point, i) => (
          <Circle
            key={`heart-${i}`}
            cx={point[0]}
            cy={point[1]}
            r={3}
            fill="#FFFFFF"
            stroke="#FF9500"
            strokeWidth={2}
          />
        ))}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});