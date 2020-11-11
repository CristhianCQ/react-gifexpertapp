
import React from 'react';
import '@testing-library/jest-dom';   
import { shallow } from 'enzyme';
import { default as GifExpert } from '../GifExpertApp';

describe('Pruebas en componente <GifExpertApp.js />',() => {

    test('debe de montarse el componente de manera adecuada',() => {

        const wrapper = shallow( <GifExpert />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar una lista de categorias', () => {
        
        const categorias = ['One Punch', 'Dragon ball'];

        const wrapper = shallow( <GifExpert  defaultCategories={categorias}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categorias.length); 

    })
    
})