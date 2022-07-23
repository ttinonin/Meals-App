import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile'

function CategoriesScreen({ navigation }: any){
    function renderCategoryItem(itemData: any){
        const handleOpenMeal = () => {
            navigation.navigate("Meal Overview", {
                categoryId: itemData.item.id,
            });
        }
    
        return <CategoryGridTile onClick={handleOpenMeal} title={itemData.item.title} color={itemData.item.color}/>
    }

    return (
        //Flat list make a 'map' to an array
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id} 
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}

export default CategoriesScreen