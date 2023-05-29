import { HStack, ListItem, VStack ,Button, Spacer} from "@react-native-material/core";

const Detail = ({route}) => {

    const {item}=route.params
    return ( 
<VStack m={20} spacing={20}>
    <ListItem title={item.content}/>
    <HStack mt={20}>
        <Button title="Delete"/>
        <Spacer/>
        <Button title="Close"/>
    </HStack>
</VStack>
     );
}
 
export default Detail;