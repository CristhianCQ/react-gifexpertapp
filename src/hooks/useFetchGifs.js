import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    })

    useEffect(() => {
        getGifs(category).then((imgs) => {
           
                setState({
                    data: imgs,
                     loading: false,
                })
           
            
        })
    },[category])
   
    //    useEffect( () => {
    //     getGifs(category).then(setImages);  
    // },[category]);

    // setTimeout(()=> {
    //     setState({
    //         data: [1,2,3,4,5],
    //         loading: false,
    //     })
    // }, 3000)

    return state;

}
  