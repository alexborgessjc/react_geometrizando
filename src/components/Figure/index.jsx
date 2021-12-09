import PropTypes from 'prop-types'
import Triangle from "../Triangle"
import Square from "../Square"
import CapsLock from "../CapsLock"
import Rectangle from "../Rectangle"
import Circle from "../Circle"

const Figure = ({type,titulo,bg}) => {
    return( 
        <>
            <CapsLock>{titulo}</CapsLock>
            {type == 'triangulo' &&(
                <Triangle                    
                    bg={bg} 
                />
            )}
            {type == 'square' &&(
                <Square                   
                    bg={bg} 
                />
            )}
            {type == 'circle' &&(
                <Circle                   
                    bg={bg} 
                />
            )}
            {type == 'rectangle' &&(
                <Rectangle                  
                    bg={bg} 
                />
            )}
        </>
    )
}

Figure.propTypes ={
    type: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired    
}
export default Figure