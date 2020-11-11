import React from 'react';
import '@testing-library/jest-dom'; 
import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs' )

describe('Pruebas en <GifGrid />', () => {
    
    const category = "One punch";


    test('debe de obtener el snapshot del componente montado', () => {
        //I need to mock the data - necesito falcear la data 
        useFetchGifs.mockReturnValue({
            //se debe poner el valor por defecto o inical de hook
            data: [],
            loading: true,
        })


        const wrapper= shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar items cuando se cargan imagenes con nuestro custom hook ', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost:',
            title: 'Cualquier Cosa'
        },
        {
            id: '123',
            url: 'https://localhost:',
            title: 'Cualquier Cosa'
        } ]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        })         

        const wrapper= shallow(<GifGrid category={category}/>);

         expect(wrapper).toMatchSnapshot();
         expect(wrapper.find('p').exists()).toBe(false);
         expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
        
})
