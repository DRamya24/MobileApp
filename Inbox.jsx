import { Avatar, Box, ListItem } from "@react-native-material/core";
import { Button, ImageBackground, StyleSheet, Text, TextInput, SafeAreaView, ScrollView, FlatList, View } from 'react-native';
import { useState } from "react";



const Inbox = ({navigation}) => {

    const [mails, setMails] = useState([
        { id: "1", subject: 'Meeting Today!', content: "Lorem Ipsum issimple dummy test" },
        { id: "2", subject: 'Whats up', content: "crazy" },
        { id: "3", subject: 'Good Morning', content: "Wake up let's start" },
    ]);
    const handleTap =(item) =>{
        console.log(item)
        navigation.push('DetailScreen',{item})
}


    return (

        <>
            <Box>
                <FlatList
                    data={mails}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item ,index}) => (
                        <ListItem
                            leadingMode="avatar"
                            leading={
                                <Avatar image={{ uri: `https://mui.com/static/images/avatar/${index+1}.jpg `}} />
                            }
                            title={item.subject}
                            secondaryText={item.content}
                            onPress={()=> handleTap(item)}
                        />
                    )}


                />
            </Box>

        </>
    );
}

export default Inbox;