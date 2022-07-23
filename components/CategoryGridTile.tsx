import { Pressable, View, Text } from "react-native"
import GridTileProp from "../types/interfaces/interfaces"

function CategoryGridTile({ title, color }: GridTileProp){
    return (
        <View>
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile