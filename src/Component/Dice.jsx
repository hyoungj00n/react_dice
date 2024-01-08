import diceBlue01 from '../Data/dice-blue-1.svg';
import diceBlue02 from '../Data/dice-blue-2.svg';
import diceBlue03 from '../Data/dice-blue-3.svg';
import diceBlue04 from '../Data/dice-blue-4.svg';
import diceBlue05 from '../Data/dice-blue-5.svg';
import diceBlue06 from '../Data/dice-blue-6.svg';
import diceRed01 from '../Data/dice-red-1.svg';
import diceRed02 from '../Data/dice-red-2.svg';
import diceRed03 from '../Data/dice-red-3.svg';
import diceRed04 from '../Data/dice-red-4.svg';
import diceRed05 from '../Data/dice-red-5.svg';
import diceRed06 from '../Data/dice-red-6.svg';

const DICE_IMAGES = {
    blue: [diceBlue01, diceBlue02, diceBlue03, diceBlue04, diceBlue05, diceBlue06],
    red: [diceRed01, diceRed02, diceRed03, diceRed04, diceRed05, diceRed06],
};
function Dice({color,num}){

    const src = DICE_IMAGES[color][num-1];
    const alt = `${color} ${num}`;

    return <img src ={src} alt={alt}/>;
}

export default Dice;