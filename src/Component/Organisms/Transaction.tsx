import React, { useState } from "react";
import { TransactionRecord } from "../Molecules/Transactionrecord";
import { FILTER_TRANSACTION } from "../../Contants/Enums";
import CustomButton from "../Atoms/CustomButton";
import TextInput from "../Atoms/TextInput";
import { useStyles } from "../Organisms/style";
import Heading from "../Atoms/Heading";
import { ClearInput } from "../Hooks/useClearInput";
import {
  getTotalRewards,
  addTransactionData,
  shouldComponentVisible,
  getFilteredRecords,
} from "../../Utility/Utility";
import CustomListItem from "../Atoms/CustomListItem";
import { FilterIcon } from "../Molecules/FilterIcon";

const Transaction = () => {
  const {
    priceSection,
    inputBox,
    flex,
    btnContainer,
    mrgLeft35,
    mrgLeft44,
    root,
    transaction,
  } = useStyles();
  const [price, setPrice] = useState();
  const [transactionList, setTransactionList] = useState([]);
  const [filter, setFilter] = useState(FILTER_TRANSACTION.ALL);

  const onPriceChange = (event: any) => {
    if (!Number.isNaN(event.target.value)) {
      setPrice(event.target.value);
    }
  };

  const filterChangeHandler = (filter: FILTER_TRANSACTION) => {
    setFilter(filter);
  };

  const transactionHandler = () => {
    if (price && !Number.isNaN(price)) {
      setTransactionList([
        ...transactionList,
        { ...addTransactionData(parseInt(price)) },
      ]);
    }
    ClearInput("transaction_input");
    setPrice(null);
  };

  return (
    <div className={`${root}`}>
      <div className={priceSection}>
        <div className={inputBox}>
          <TextInput
            id="transaction_input"
            type="number"
            onChange={onPriceChange}
            className={inputBox}
          />
        </div>
        <div className={`${flex} ${btnContainer} ${mrgLeft35}`}>
          <FilterIcon
            selectedFilter={filter}
            onChangeHandler={filterChangeHandler}
          />
        </div>
        <div className={`${flex} ${btnContainer} ${mrgLeft44}`}>
          <CustomButton
            id="Transaction_button"
            onClick={() => transactionHandler()}
            title={"Add"}
          />
        </div>
      </div>
      <div className={`${transaction}`}>
        {transactionList.length &&
        shouldComponentVisible(filter, [
          FILTER_TRANSACTION.THREE_MONTH,
          FILTER_TRANSACTION.ALL,
        ]) ? (
          <TransactionRecord
            transactionList={getFilteredRecords(filter, transactionList)}
            filter={filter}
          />
        ) : null}
        {shouldComponentVisible(filter, [FILTER_TRANSACTION.TOTAL_REWARDS]) && (
          <Heading title={getTotalRewards(transactionList)} />
        )}
        {shouldComponentVisible(filter, [
          FILTER_TRANSACTION.PER_MONTH_REWARD,
        ]) && <CustomListItem items={getFilteredRecords(filter, transactionList)} />}
      </div>
    </div>
  );
};

export default Transaction;
