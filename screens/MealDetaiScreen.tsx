import { useLayoutEffect } from 'react'
import { Text, View, Image, StyleSheet, ScrollView, Button } from 'react-native'
import MealDetails from '../components/MealDetails'
import List from '../components/MealDetail/List'
import IconButton from '../components/IconButton'

import { MEALS } from '../data/dummy-data'

function MealDetailScreen({ route, navigation }: any){
    const mealId = route.params.mealId

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    const handlHederButton = () => {
        navigation.navigate("Meals Categories")
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton color='white' icon="home" onClick={handlHederButton}/>
            }
        })
    }, [navigation, handlHederButton])

    return (
        <ScrollView>
            <View style={styles.root}>
                <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }}/>
                <Text style={styles.title}>{selectedMeal?.title}</Text>
                <MealDetails 
                    duration={selectedMeal?.duration}
                    complexity={selectedMeal?.complexity}
                    affordability={selectedMeal?.affordability}
                    textStyle={styles.detailText}
                />

                <View style={styles.listOuter}>
                    <View style={styles.listContainer}>
                        <View style={styles.subtitleContiner}>
                            <Text style={styles.subtitle}>Ingredients</Text>
                        </View>
                        <List data={selectedMeal?.ingredients}/>

                        <View style={styles.subtitleContiner}>
                            <Text style={styles.subtitle}>Steps</Text>
                        </View>
                        <List data={selectedMeal?.steps}/>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    root: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitleContiner: {
        padding: 6,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        marginHorizontal: 20,
        marginVertical: 4,
        margin: 4
    },
    listContainer: {
        width: '80%'
    },
    listOuter: {
        alignItems: 'center'
    }
})