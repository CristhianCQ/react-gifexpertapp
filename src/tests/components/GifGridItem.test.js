 import React from 'react';// imr
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Pruebas';
    const url = 'https://localhost:3000';
    const wrapper =shallow(<GifGridItem  url={url} title={title}/>);
    
    test('should mount correctly the element ', () => {
        expect(wrapper).toMatchSnapshot();    
    })

    test('debe tener un parrafo con el title', () => {
        const p = wrapper.find('p'); 

        expect(p.text().trim()).toBe(title);
    })

    test('debe tener el titulo en al atributo alt y un src', () => {
        const img = wrapper.find('img');    

        // console.log(img.html());
        // console.log(img.props().src);

        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
                
    })

    test('debe de tener anime__fadeIn',()=> {
        const div =  wrapper.find('div');
        
                // const numberOfMatches = "animate__fadeIn".filter(x => div.props().className.indexOf(x)> -1).length;
                // expect(numberOfMatches).toBeGreaterThan(0);
                // console.log(numberOfMatches);
        // expect(div.props().className).toMatch(/(animate__fadeIn)/i)

        const className = div.props().className;
        expect(className.includes('animate__fadeIn')).toBe(true);

        
        
    })
    
})