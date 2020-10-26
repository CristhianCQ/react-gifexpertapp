import React from 'react'
import PropTypes from 'prop-types'; //impt

export const GifGridItem = ({id, title, url}) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}



/* 
    1. enzyme https://enzymejs.github.io/enzyme/ npm i --save-dev enzyme enzyme-adapter-react-16
    2. Enzyme to Jdon https://www.npmjs.com/package/enzyme-to-json npm install --save-dev enzyme-to-json
    3. debe mostrar el componente correctamente
        * shallow
        * wrapper
        * wrapper .toMatchSnap
*/