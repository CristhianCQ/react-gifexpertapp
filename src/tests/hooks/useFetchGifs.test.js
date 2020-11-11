import '@testing-library/jest-dom';
import '@testing-library/react-hooks';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el custom hook UserFetchGifs', () => {


    // so we have to used a package to for test the custom hooks
        // https://react-hooks-testing-library.com/usage/basic-hooks
        // npm install --save-dev @testing-library/react-hooks
    test('debe de retornar el estado inicial', async () => {
    
        const category= 'One punch';  
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs(category) );
        const {data, loading} = result.current;
        console.log(data, loading);
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
            
    });

    test('debe de retornar un arreglo de imgs y el loagingh en false', async () => {
        
        const category= 'One punch';  
        
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs(category) );
        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect(data.length).toBe(10);

        expect(loading).toBeFalsy();
    })
    
    
})

