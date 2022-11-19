import React from 'react'
import { BaseButton } from './Button.styled'


export const BUTTON_TYPE_CLASSES = {
    base: 'base',

}
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
    }[buttonType]
)


function Button({ children, buttonType, ...otherProps }) {
    const CustomButton = getButton(buttonType)
    return (
        <CustomButton {...otherProps}>
            {children}
        </CustomButton>
    )
}

export default Button