import React, {FC, ReactElement} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface DashboardCardProps {
  title: string;
  onPress?: () => void;
}

const DashboardCard: FC<DashboardCardProps> = ({
  title,
  onPress,
}): ReactElement => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default DashboardCard;
