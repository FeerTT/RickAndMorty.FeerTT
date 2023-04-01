import { Link } from 'react-router-dom';
import  "../Card/fer.css"
import { useDispatch, useSelector } from 'react-redux';
import { addFav,removeFav } from '../../Redux/actions';
import { useState, useEffect, } from 'react';






function Card  (props) {
   const {id,name,species,gender,origin,image,onClose} = props;
   const dispatch = useDispatch();
   const { myFavorites } = useSelector((state) => state);



   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav){
         setIsFav(false);
         dispatch (removeFav(id));
      }else{
         setIsFav(true);
         dispatch (addFav(props))
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);



   return (
      <div className="tarjeta">
   {
      isFav ? (
      <button onClick={handleFavorite}>❤️</button>
      ) : (
      <button onClick={handleFavorite}>🖤</button>
      )
   }
         <button onClick={()=>onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
         <h2>name:{name}</h2>
         </Link>
         <h2>species:{species}</h2>
         <h2>gender:{gender}</h2>
         <h2>origin:{origin}</h2>
         <img src={image} alt=''/> 
      </div>
   );
}
// const mapDispatchToProps = (dispatch) => {
//    return{
//       addFav: (character) => 
//       {dispatch(addFav(character))},

//       removeFav:(id) => 
//       {dispatch(removeFav(id))},
//    }
// }

// const mapStateToProps = (state) =>{
//    return{
//       myFavorites:state.myFavorites,
//    };
// };

export default Card;
// export default connect (mapStateToProps, mapDispatchToProps)(Card);
