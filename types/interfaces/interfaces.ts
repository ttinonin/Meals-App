interface GridTileProp {
    title: string,
    color: string,
    onClick: () => void
}

interface MealItemProp {
    title: string,
    imageUrl: string,
    duration: string,
    complexity: string,
    affordability: string
}

export { MealItemProp, GridTileProp as default }