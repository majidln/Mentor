import React, {FC, ReactElement} from 'react';
import {View, Image, StyleSheet} from 'react-native';

export interface AvatarProps {
  picture?: string;
}

const IMAGE_SIZE = 120;

export const AvatarComp: FC<AvatarProps> = ({picture = ''}): ReactElement => {
  if (!picture) {
    return <View />;
  }
  return (
    <View style={styles.imageWrapper}>
      <Image
        style={styles.image}
        source={{uri: picture}}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    alignItems: 'center',
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2,
  },
});

function areEqual(prevProps: AvatarProps, nextProps: AvatarProps) {
  return prevProps.picture === nextProps.picture;
}
export const Avatar = React.memo(AvatarComp, areEqual);
