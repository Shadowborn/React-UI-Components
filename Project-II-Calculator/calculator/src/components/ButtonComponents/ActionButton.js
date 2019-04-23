
import React from 'react';
import './Button.css';




const DivideButton = {
    buttonStyle: 'actionButton',
    text: '/'
};

const TimesButton = {
    buttonStyle: 'actionButton',
    text: 'x'
};

const AddButton = {
      buttonStyle: 'actionButton',
      text: '+'
  };

const MinusButton = {
  buttonStyle: 'actionButton',
  text: '-'
};

const EqualsButton = {
    buttonStyle: 'actionButton',
    text: '='
  };




// const SevenButton = {
//       buttonStyle: 'numberButton',
//       text: '7'
// };
// const EightButton = {
//       buttonStyle: 'numberButton',
//       text: '8'
// };
// const NineButton = {
//       buttonStyle: 'numberButton',
//       text: '9'
// };
// const FourButton = {
//       buttonStyle: 'numberButton',
//       text: '4'
// };
// const FiveButton = {
//       buttonStyle: 'numberButton',
//       text: '5'
// };
// const SixButton = {
//       buttonStyle: 'numberButton',
//       text: '6'
// };
// const OneButton = {
//       buttonStyle: 'numberButton',
//       text: '1'
// };
// const TwoButton = {
//       buttonStyle: 'numberButton',
//       text: '2'
// };
// const ThreeButton = {
//       buttonStyle: 'numberButton',
//       text: '3'
// };
// const ZeroButton = {
//       buttonStyle: 'numberButton',
//       text: '0'
// };



const FunctionButton = (props) => {
    return (
        <div className="functionalButtons">
            <button className={props.button.buttonStyle}>{props.button.text}</button>
        </div>
    )
}

const FunctionButtons = () => {
    return (
        <div className="functions">
            <FunctionButton button ={DivideButton}/>
            <FunctionButton button ={TimesButton}/>
            <FunctionButton button ={AddButton}/>
            <FunctionButton button ={MinusButton}/>
            <FunctionButton button ={EqualsButton}/>
        </div>
    );
}

export default FunctionButtons;


// const actionButton = [
//     {
//         type: "/",
//     },
//     {
//         type: "x",
//     },
//     {
//         type: "-",
//     },
//     {
//         type: "+",
//     },
//     {
//         type: "=",
//     },
// ];

// const Math = props => {
//     return (
//         <div className="mathButtons">
//         <h3>{props.mathProp.type}</h3>
//         </div>
//     )
// }

// function MathButtons () {
//     return (
//         <div>
//         {actionButton.map(mathButtonsFromMap => {
//           return <Math mathProp={mathButtonsFromMap} />;
//         })}
//       </div>
//     )
// }
