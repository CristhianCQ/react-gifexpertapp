import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {
    test('debe de traer 10 elementos', async () => {
        const gits = await getGifs('One punch');

        expect(gits.length).toBe(10);
    })

    test('no debe de traer ningun elemento', async () => {
        const gits = await getGifs('');

        expect(gits.length).toBe(0);
    })
    
})