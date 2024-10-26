import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { styles } from './style';

export const ImageComponent = (props) => {
    const [imageType] = useState(props.type || 'default');

    const style = styles(props)
    const imageStyle = imageType === 'rounded' ? style.rounded : style.default;

    return (
        <View>
            <Image
                style={imageStyle}
                source={{ uri: props.src }}
            />
        </View>
    );
};
