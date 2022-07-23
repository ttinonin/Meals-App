import { View, Text, StyleSheet, FlatList } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

function MealOverviewScreen({ route }: any){
    const id = route.params.categoryId

    //Checks if the MEAL have the id that was passed by the route
    //Then stores the MEAL at the displayMeals const
    const dislayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(id) >= 0
    }) 

    const renderMealItem = (itemData: any) => {
        return (
            <MealItem title={itemData.item.title}/>
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