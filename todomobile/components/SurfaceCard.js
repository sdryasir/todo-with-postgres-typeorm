import React from 'react'
import { Surface, Text, Headline } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


const screenWidth = Dimensions.get('screen').width;

const SurfaceCard = (props) => {


    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => { navigation.navigate('Details', { id: props.item.id }) }}>
            <Surface style={styles.surface}>
                <Headline >{props.item.title}</Headline >
                {/* <Text>{props.item.description}</Text> */}
            </Surface>
        </TouchableOpacity>
    )
}

export default SurfaceCard;

const styles = StyleSheet.create({
    surface: {
        padding: 16,
        width: screenWidth,
        elevation: 4,
        marginBottom: 6
    },
});
