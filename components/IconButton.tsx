import { Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ButtonProp } from '../types/interfaces/interfaces'

function IconButton({ icon, color, onClick }: ButtonProp) {
    return (
        <Pressable onPress={onClick}>
            <Ionicons name={icon} size={24} color={color}/>
        </Pressable>
    )
}

export default IconButton