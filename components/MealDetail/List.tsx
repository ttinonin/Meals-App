import { View, Text, StyleSheet } from 'react-native'

function List({ data }: any){
    return (
        data.map((dataPoint: string) => (
            <View style={styles.listItem} key={dataPoint}>
                <Text style={styles.itemText}>{dataPoint}</Text>
            </View>
        ))
    )
}

export default List

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    itemText: {
        color: '#351401',
        textAlign: 'center'
    }
})