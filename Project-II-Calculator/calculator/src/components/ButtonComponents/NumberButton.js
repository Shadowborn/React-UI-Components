import React from 'react';
import './Button.css';

const ClearButton = {
      buttonStyle: 'numberButton',
      text: 'clear'
};
const SevenButton = {
    buttonStyle: 'numberButton',
    text: '7'
};
const EightButton = {
    buttonStyle: 'numberButton',
    text: '8'
};
const NineButton = {
    buttonStyle: 'numberButton',
    text: '9'
};
const FourButton = {
    buttonStyle: 'numberButton',
    text: '4'
};
const FiveButton = {
    buttonStyle: 'numberButton',
    text: '5'
};
const SixButton = {
    buttonStyle: 'numberButton',
    text: '6'
};
const OneButton = {
    buttonStyle: 'numberButton',
    text: '1'
};
const TwoButton = {
    buttonStyle: 'numberButton',
    text: '2'
};
const ThreeButton = {
    buttonStyle: 'numberButton',
    text: '3'
};
const ZeroButton = {
    buttonStyle: 'numberButton',
    text: '0'
};


const NumberButton = (props) => {
    return (
        <div className="numericButtons">
            <button className={props.button.buttonStyle}>{props.button.text}</button>
        </div>
    )
}

const NumberButtons = () => {
    return (
        <div className="numbers">
            <div className='longButton'>
                  <NumberButton button ={ClearButton}/>
            </div>
            <div className='toprow'>
                  <NumberButton button ={SevenButton}/>
                  <NumberButton button ={EightButton}/>
                  <NumberButton button ={NineButton}/>
            </div>
            <div className='midrow'>
                  <NumberButton button ={FourButton}/>
                  <NumberButton button ={FiveButton}/>
                  <NumberButton button ={SixButton}/>
            </div>
            <div className='bottomrow'>
                  <NumberButton button ={OneButton}/>
                  <NumberButton button ={TwoButton}/>
                  <NumberButton button ={ThreeButton}/>
            </div>
            <div className='longButton'>
                  <NumberButton button ={ZeroButton}/>
            </div>
        </div>
    );
}

export default NumberButtons;



// const numberButtons = props => {
//       return (
//     <div className='buttons'>
//       <div className='rowOne' >
//             <div className='fullButton'>{props.text}</div>
//             <div className='mathButton'>/</div>
//       </div>
//       <div className='rowTwo'>
//             <div className='numButton'>7</div>
//             <div className='numButton'>8</div>
//             <div className='numButton'>9</div>
//             <div className='mathButton'>x</div>
//       </div>
//       <div className='rowThree'>
//             <div className='numButton'>4</div>
//             <div className='numButton'>5</div>
//             <div className='numButton'>6</div>
//             <div className='mathButton'>-</div>
//       </div>
//       <div className='rowFour'>
//             <div className='numButton'>1</div>
//             <div className='numButton'>2</div>
//             <div className='numButton'>3</div>
//             <div className='mathButton'>+</div>
//       </div>
//             <div className="rowFive">
//             <div className='fullButton'>0</div>
//             <div className='mathButton'>=</div>
//       </div>
//     </div>
//     )
// }







//       <div className='clear'>
//             {
//                   value: 'clear',
//             }
//       </div>
     
//      <div className='topRow'>
//             {
//                   name: "9",
//                   value: 9,
//             }
            
//             {
//                   name: "8",
//                   value: 8,
//             }
//             {
//                   name: "7",
//                   value: 7,
//             }
//       </div>

//       <div className='midRow'>
//             {
//                   name: "6",
//                   value: 6,
//             }
//             {
//                   name: "5",
//                   value: 5,
//             }
//             {
//                   name: "4",
//                   value: 4,
//             }
//       </div>
//       <div className='bottomRow'>
//             {
//                   name: "3",
//                   value: 3,
//             }
//             {
//                   name: "2",
//                   value: 2,
//             }
//             {
//                   name: "1",
//                   value: 1,
//             }
//       </div>
// const zero =  <     <div className='zero'>
//             {
//                   name: "0",
//                   value: 0,
//             }
//       </div>
      



// const Numbers = props => {
//       return (
//             <div className='numberButton'>
//                   <div>{props.numberProp.value}</div>
//             </div>
//       );
// }

// function NumberButtons () {
//       return (
//             <div>
//                   {numberButtons.map(numbersFromMap => {
//                         return <Numbers numberProp={numbersFromMap} />;
//                   }

//                   )}
//             </div>
//       )
// }




