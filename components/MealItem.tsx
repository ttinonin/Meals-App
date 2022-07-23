import { View, Text } from "react-native";
import { MealItemProp } from '../types/interfaces/interfaces'

function MealItem({ title }: MealItemProp){
    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}

export default MealItem