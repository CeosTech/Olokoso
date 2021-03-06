import FlatList from 'flatlist-react';
import { makeStyles, } from "@material-ui/core";

const CommandeList = ({ commandeItem }) => {
  console.log(commandeItem);
  let num = -1;
    const count = () => {
        num+=1
        return num
    }
     
    const renderProduct = (commandeItem) => {
      //const test = commandeItem.map((commandeItemProduct) => commandeItemProduct);
      //console.log(test);
      //this.count();
      console.log(commandeItem.0);
        return(
          <div className={styles.table}>
            {/*<p className={classes.de}>{commandeItem}</p>
            <p className={classes.de}>{commandeItem}</p>*/}
          </div>

        )
    };

    return (
            <FlatList
                list={commandeItem}
                renderItem={renderProduct}
                renderWhenEmpty={() => <div>List is empty!</div>}
            />
    );
}

const styles = makeStyles((theme) => ({
    table: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
  
    detail: {
      fontSize: theme.typography.pxToRem(16), 
      color: "black",
    },
  
    color: {
      color: "black",
    },
  }));
export default CommandeList;