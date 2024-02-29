import { Box, Button, Checkbox, Flex, Text, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { useHover } from '@mantine/hooks';

export default function ListView({list, saveHandler, listSetter, iconHandler}){
    const [search, setSearch] = useState('');
    const { hovered, ref } = useHover();

    const toggleSelected = (index) => {
        listSetter(list.map((app, i) => 
            i === index? { ...app, checked: !app.checked } : app
        ));
    }

    return (
        <Box style={{border:"1px solid lightgray", borderRadius:"5px"}}>
            <Flex 
                bg="#f4f4f4" 
                p="sm" 
                style={{borderBottom:"1px solid lightgray", borderRadius:"5px 5px 0 0"}}
                direction={{xs:"column", sm:"row"}}
                justify={{xs:"center", sm:"space-between"}}
                gap={{xs:"sm", sm:"0"}}
            >
                <TextInput
                    w={{md:"32%", xs:"100%", sm:"50%"}}
                    placeholder="Search"
                    leftSection={<IconSearch />}
                    value={search}
                    onChange={(e) => setSearch(e.currentTarget.value)}
                />
                <Button onClick={saveHandler}>Save selected</Button>
            </Flex>

            <Flex direction="column">
                {list
                .filter(item => item.label.toLowerCase().includes(search.toLowerCase()))
                .map((item, index) => 
                    <Flex key={index} p="sm" gap="xs">
                        {iconHandler && iconHandler(item)}
                        <Text style={{whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}}>{item.label}</Text>
                        <Checkbox ml="auto" checked={item.checked} onChange={() => toggleSelected(index)} />
                    </Flex>
                )}
            </Flex>

        </Box>
    )
}