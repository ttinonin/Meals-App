import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile'

function renderCategoryItem(itemData: any){
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
}

function CategoriesScreen(){
    return (
        //Flat list make a 'map' to an array
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id} 
            renderItem={renderCategoryItem}
        />
    )
}

export default CategoriesScreen