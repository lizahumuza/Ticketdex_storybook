import React from 'react'
import Btn from '../components/Btn'


export default{
    title: 'Btn',
    component: Btn,
    argTypes: {
        backgroundColor: { control: 'color' },
      },       
}

export const Medium = () => <Btn/>
