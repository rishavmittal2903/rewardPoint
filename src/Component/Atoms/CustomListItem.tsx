import React from "react";
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ITransaction } from "../../Interfaces/ITransaction";

const CustomListItem=(props)=>{
  const {items}=props;
    return(
        <Grid item xs={12} md={6}>
        <div>
          <List dense={false}>
              {items.map((item:ITransaction,itemIndex:number)=>(
                <ListItem key={`itemIndex_${item.transactionDate}`}>
                <ListItemText
                  primary={"Total Rewards"}
                  secondary={item.rewards}
                />
                <ListItemText
                  primary={"Transaction Date"}
                  secondary={item.transactionDate.toLocaleDateString()}
                />
              </ListItem>
              ))}
          </List>
        </div>
      </Grid>
    )
}

export default CustomListItem;