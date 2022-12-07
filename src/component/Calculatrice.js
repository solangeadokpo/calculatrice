import React from 'react';
import '../styles/Calculatrice.css';
import { numberList} from '../datas/numberList';
import { symboleList} from '../datas/numberList';


export default class Calculatrice extends React.Component {

    // déclaration du constructeur
    
  constructor(){
    super();
    this.state =
    {
      calcul : '' 
    };
  }

  
  
// Déclaration de la fonction handleClick avec switch

handleClick = value => {
  
    switch(value) {

        case 'CE' :
          this.setState({calcul: '0'});
          break;

        case 'Del':
            this.setState({ calcul: ''});
            break;

        case 'Plus':
              alert("Fonctionnalité pas encore disponible");
              break;

        case '=':
          try {
            const resultat = eval(this.state.calcul);
            this.setState({calcul: resultat});
          } 
    
        catch (e){
            this.setState({calcul: 'error'})
        }
          break;

        default:
            this.setState({ calcul: this.state.calcul + value});
    }

}
 render(){
  return (
    <div className="Affichage">
      <div className="container"> 
      {/* affichage de la valeur du state à chaque mise à jour  */}
        <div className="Ecran">
            {this.state.calcul} 
        </div>
            {/* Ce code a servi a générer les boutons automatiquement en déclarant un tableau dans le fichier
            numberList.js que j'ai mis dans le dossier data*/}
            <ul 
                className='premiereList'>{(numberList).map((number)=>
                <button  key ={number} className='list' 
                onClick={()=>this.handleClick(number)} 
                value ={number} >{number}</button>)}
                </ul> 
                <ul 
                className='SecondeList'>{(symboleList).map((symbole)=>
                <button  key ={symbole} className='list1' 
                onClick={()=>this.handleClick(symbole)} 
                value ={symbole} >{symbole}</button>)}
                </ul>
               
      </div>
    </div>
  )
 }

 }

