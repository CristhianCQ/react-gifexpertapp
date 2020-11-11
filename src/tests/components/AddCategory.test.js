import React from 'react'; // imr

import '@testing-library/jest-dom'

import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let  wrapper = shallow(<AddCategory setCategories={setCategories}/> );

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/> );
    } )
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto ', () => {
         const input = wrapper.find('input');
        const value = 'Hola mundo';
         input.simulate('change', {
             target: {
                //  value // is when the name of the file is the same of variable that we are going to assign
                 value:value
                }
            })
        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('No debe de postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault: (  ) => {}});
         
        expect(setCategories).not.toHaveBeenCalled();  
    })
    
    test('debe llamar el setCategoies y limpiar la caja de texto', () => {

        // 1. simular el input change
        let inputGifs = wrapper.find('input');
        const value = "Pruebas";
        inputGifs.simulate('change',{target: {value}})
        
        // 2. simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        
        // 3. setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        // 4. el valor del input debe de estar vacio ''
        expect(inputGifs.props().value).toBe('' );
    })
        
    
})
