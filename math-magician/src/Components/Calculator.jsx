import React, { useState, useEffect, useCallback } from 'react';
import { evaluate } from 'mathjs';
import './Calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = useCallback((value) => {
    setDisplayValue((prevValue) => prevValue + value);
  }, []);

  const handleClear = () => {
    setDisplayValue('');
  };

  const handleDelete = useCallback(() => {
    setDisplayValue((prevValue) => prevValue.slice(0, -1));
  }, []);

  const handleEvaluate = useCallback(() => {
    try {
      const result = evaluate(displayValue);
      if (Number.isFinite(result)) {
        setDisplayValue(result.toString());
      } else {
        throw new Error('Invalid expression');
      }
    } catch (error) {
      setDisplayValue('Error: Invalid expression');
    }
  }, [displayValue]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key;

      if (/[0-9+\-*/.=]|Backspace|Delete/.test(key)) {
        event.preventDefault();
        if (key === '=') {
          handleEvaluate();
        } else if (key === 'Backspace' || key === 'Delete') {
          handleDelete();
        } else {
          handleButtonClick(key);
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleButtonClick, handleDelete, handleEvaluate]);

  return (
    <div className="container">
      <div className="calculator">
        <form>
          <div className="display">
            <input type="text" name="display" value={displayValue} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={handleClear} />
            <input type="button" value="DE" onClick={handleDelete} />
            <input type="button" value="." onClick={() => handleButtonClick('.')} />
            <input type="button" value="/" onClick={() => handleButtonClick('/')} />
          </div>
          <div>
            <input type="button" value="7" onClick={() => handleButtonClick('7')} />
            <input type="button" value="8" onClick={() => handleButtonClick('8')} />
            <input type="button" value="9" onClick={() => handleButtonClick('9')} />
            <input type="button" value="*" onClick={() => handleButtonClick('*')} />
          </div>
          <div>
            <input type="button" value="4" onClick={() => handleButtonClick('4')} />
            <input type="button" value="5" onClick={() => handleButtonClick('5')} />
            <input type="button" value="6" onClick={() => handleButtonClick('6')} />
            <input type="button" value="+" onClick={() => handleButtonClick('+')} />
          </div>
          <div>
            <input type="button" value="1" onClick={() => handleButtonClick('1')} />
            <input type="button" value="2" onClick={() => handleButtonClick('2')} />
            <input type="button" value="3" onClick={() => handleButtonClick('3')} />
            <input type="button" value="-" onClick={() => handleButtonClick('-')} />
          </div>
          <div>
            <input type="button" className="special" value="0" onClick={() => handleButtonClick('0')} />
            <input type="button" value="=" onClick={handleEvaluate} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
