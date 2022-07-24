import { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealItem'

function MealOverviewScreen({ route, navigation }: any){
    const id = route.params.categoryId
    
    //Dinamically chage the screen title to the categry title
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === id).title;
    
        navigation.setOptions({
            title: categoryTitle
        })
    }, [id, navigation])

    //Checks if the MEAL have the id that was passed by the route
    //Then stores the MEAL at the displayMeals const
    const dislayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(id) >= 0
    }) 

    const renderMealItem = (itemData: any) => {
        return (
            <MealItem 
                title={itemData.item.title} 
                imageUrl={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={dislayMeals} 
                keyExtractor={(item) => item.id} 
                renderItem={renderMealItem} 
            />
        </View>
    )
}

export default MealOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})