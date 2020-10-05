 

export const getGifs = async ( category) => {
    
        // const search = 'rick and morty'
        
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=W7QGNnVo2fqeSmjaPDadc9q1ylR9TGuw`;

        const results = await fetch(url); 
        const {data} = await results.json();

        const gifs = data.map(img =>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            } 
        })
        
        return gifs;     
        
    
}
