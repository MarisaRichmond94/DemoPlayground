import './account.css';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { depositByAmount, selectAmount, withdrawByAmount } from './accountSlice';
import { RichButton, RichButtonColor, RichButtonSize } from '@MarisaRichmond94/rich_ui';
import { useState } from 'react';

function Account() {
  const amount = useAppSelector(selectAmount);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<number | undefined>();

  const convertToHumanReadableString = (amount: number): string =>
    amount.toLocaleString("en-US");

  const getAmountClassName = (amount: number): string => {
    if (amount === 0) return 'neutral';
    if (amount > 0) return 'positive';
    return 'negative';
  }

  return (
    <div className="body">
      <div className="account-container">
        <span className="amount"><b>Amount:</b></span>
        <span className={getAmountClassName(amount)}>
          ${convertToHumanReadableString(amount)}
        </span>
      </div>
      <div className="input-container">
        <span className="dollar-sign">$</span>
        <input
          id='amount-input'
          onChange={(e) => {
            setValue(e.target.value === "" ? undefined : Number(e.target.value))
          }}
          placeholder='Enter amount'
          type="number"
          value={value}
        />
      </div>
      <div className="action-container">
        <RichButton
          color={RichButtonColor.OffBlack}
          classNames={['withdraw-button']}
          isDisabled={!value}
          onClick={() => dispatch(withdrawByAmount(value!!))}
          size={RichButtonSize.ExtraLarge}
        >
          Withdraw
        </RichButton>
        <RichButton
          color={RichButtonColor.SecondaryBlue}
          isDisabled={!value}
          onClick={() => dispatch(depositByAmount(value!!))}
          size={RichButtonSize.ExtraLarge}
        >
          Deposit
        </RichButton>
      </div>
    </div>
  );
}

export default Account;
