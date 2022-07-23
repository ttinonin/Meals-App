import { Pressable, View, Text, StyleSheet, Platform } from "react-native"
import GridTileProp from "../types/interfaces/interfaces"

function CategoryGridTile({ title, color, onClick }: GridTileProp){
    return (
        <View style={styles.gridItem}>
            <Pressable 
                android_ripple={{ color: '#ccc' }} 
                style={({ pressed }) => [
                    styles.button, 
                    pressed ? styles.buttonPressed : null
                ]}
                onPress={onClick}   
            >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        
        //Shadow to Android
        elevation: 6,

        //Shadow to IOS
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,

        //Checks if the plataform is an IOS t set overflow
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        borderRadius: 8,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})