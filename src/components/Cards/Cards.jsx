import Card from '../Card/Card';
import "../Card/fer.css"



export default function Cards({characters, onClose}) {
   return (
   <div className='cardContainer'>
      {
         characters  && characters.map(({id,name,species,gender,image,origin})=>{
            return(
            <Card 
            id={id}
            name={name}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={onClose}
            ></Card>
            )
         })
      }
   </div>
   );
};

