 import React from 'react'
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
 import { GifGridItem } from './GifGridItem';
import PropsTypes from 'prop-types'; //impt

export const GifGrid = ({category}) => {


    const {data:images, loading} = useFetchGifs(category);
 
    // const [images, setImages] = useState([]);


    // useEffect( () => {
    //     getGifs(category).then(setImages);  
    // },[category]);
 
     

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {/* {loading? <p> Loading ...</p>: null    } */}
            {loading && <p className="animate__animated animate__flash"> Loading ...</p> }
            <div className="card-grid">
                
                {
                    images.map((img) => (
                        <GifGridItem 
                            key={img.id}
                            {... img}
                        />
                    ))
                }
                
            </div>
        </>
    )
}

GifGrid.propsTypes = {
    category: PropsTypes.string.isRequired
}