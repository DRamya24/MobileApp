import { ListItem, Text } from "@react-native-material/core";
import { FlatList } from "react-native";
import { useState } from "react";

const Draft = () => {

    const [mails, setMails] = useState([
        { id: "1", subject: 'Meeting Today!', content: "Lorem Ipsum issimple dummy test" },
        { id: "2", subject: 'Whats up', content: "crazy" },
        { id: "3", subject: 'Good Morning', content: "Wake up let's start" },
    ]);


    return ( 
       <FlatList
       data={mails}
       keyExtractor={(item)=>item.id}
       renderItem={({item})=><ListItem title={item.subject}/>}
       />
     );
}
 
export default  Draft;