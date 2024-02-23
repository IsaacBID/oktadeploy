import { TextInput, Button, Group, Box, ScrollArea, Flex, SimpleGrid, Paper, Text, Title, Checkbox } from '@mantine/core';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { applist } from '../testdata';
import { IconSearch } from '@tabler/icons-react';

export default function Apps() {
    const [appList, setAppList] = useState(applist); 
    const redirect = useNavigate();

    useEffect(() => {
        const tenant = localStorage.getItem('OriginTenant');
        if (tenant == null || tenant == undefined) {
            redirect('/');
        }
    }, []);

    return (
        <>
            <Title order={1}>Review Apps to be downloaded</Title>
            <Box mih={"100%"} mt="lg" style={{border:"1px solid lightgray", borderRadius:"5px"}}>
                <Box bg="#f4f4f4" p="md" style={{borderBottom:"1px solid lightgray", borderRadius:"5px 5px 0 0"}}>
                    <TextInput
                        w="32%"
                        placeholder="Search"
                        leftSection={<IconSearch />}
                    />
                </Box>

                <SimpleGrid cols={{xs: 1, sm: 2, md:3}} h="100%" p="md">
                    {appList.map((app, index) => 
                        
                        <Flex
                            key={index} 
                            style={{border: "1px solid lightgray", borderRadius:"5px"}}
                            p="md"
                            gap="xs"
                        >
                            <img src={app._links.logo[0].href} alt={app.label} width="24" height="24" />
                            <Text style={{whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}}>{app.label}</Text>
                            <Checkbox ml="auto" defaultChecked />
                        </Flex>
                    )}
                </SimpleGrid>

            </Box>
        </>
    )
}