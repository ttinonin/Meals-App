interface GridTileProp {
    title: string,
    color: string,
    onClick: () => void
}

interface MealItemProp {
    id: string,
    title: string,
    imageUrl: string,
    duration: string,
    complexity: string,
    affordability: string
}

interface MealDetaisProp {
    duration: string,
    complexity: string,
    affordability: string,
    style?: any,
    textStyle?: any
}

export { MealDetaisProp, MealItemProp, GridTileProp as default }