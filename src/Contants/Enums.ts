export enum FILTER_TRANSACTION{
  ALL=0,
  TOTAL_REWARDS=1,
  PER_MONTH_REWARD=2,
  THREE_MONTH=3,
}

export const transactionColumn=[{
  name:"Price",
  isVisible:true
},
{
  name:"Reward",
  isVisible:true
},
{
  name:"Date",
  isVisible:true
}
]