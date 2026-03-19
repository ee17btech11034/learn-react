import React from 'react';


/* i want things in props
 - label -> from and to
 - amount 
 - onAmountChange -> function that will run when user change amount
 - onCurrencyChange -> if user select different currency
 - selectCurrency = "usd"
 - amountDisabled = false
 - currencyDisable = false

 */
const InputBox = ({
    label, amount, onAmountChange, onCurrencyChange, selectCurrency = "usd",
    amountDisabled = false, currencyDisable = false, currencyOptions =[]
}) => {
    return (
        <div>
            <label htmlFor="box">{props.label}</label>
            <input type="number" name="" id="box" disabled={amountDisabled}
                value={amount} onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
            />
            <select name="" id="" value={selectCurrency} onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}} disabled={currencyDisable}>
                {currencyOptions.map((currency)=>{
                    <option value="" key={currency}>{currency}</option>
                })}
            </select>
        </div>
    );
}

export default InputBox;
