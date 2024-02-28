import { TextInput, Box, Flex, SimpleGrid, Text, Title, Checkbox } from '@mantine/core';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { applist as testAppList } from '../testdata';
import { IconSearch, IconSettings } from '@tabler/icons-react';

export default function Apps() {
    const redirect = useNavigate();
    const [appList, setAppList] = useState([]); 
    const [search, setSearch] = useState('');

    useEffect(() => {
        //request list of apps
        
        //adds selected prop to each app 
        const appsWithSelectedProp = testAppList.map(app => ({ ...app, checked: true }));
        setAppList(appsWithSelectedProp)
    }, []);

    useEffect(() => {
        //make this validation routerlevel
        const tenant = localStorage.getItem('OriginTenant');
        if (tenant == null || tenant == undefined) {
            redirect('/');
        }
    }, []);

    const toggleSelected = (index) => {
        setAppList(appList.map((app, i) => 
            i === index? { ...app, checked: !app.checked } : app
        ));
        console.log('toggled', appList[index].label)
    }

    return (
        <>
            <Title order={1}>Review Apps to be downloaded</Title>
            <Box mih={"100%"} mt="lg" style={{border:"1px solid lightgray", borderRadius:"5px"}}>
                <Box bg="#f4f4f4" p="md" style={{borderBottom:"1px solid lightgray", borderRadius:"5px 5px 0 0"}}>
                    <TextInput
                        w={{md:"32%", xs:"100%", sm:"50%"}}
                        placeholder="Search"
                        leftSection={<IconSearch />}
                        value={search}
                        onChange={(e) => setSearch(e.currentTarget.value)}
                    />
                </Box>

                <SimpleGrid cols={{xs: 1, sm: 2, md:3}} h="100%" p="md">
                    {appList
                    .filter(app => app.label.toLowerCase().includes(search.toLowerCase()))
                    .map((app, index) => 
                        
                        <Flex
                            key={index} 
                            style={{border: "1px solid lightgray", borderRadius:"5px"}}
                            p="md"
                            gap="xs"
                        >
                            {app._links.logo === undefined ? <Box w={24} h={24}><IconSettings /></Box>:
                            <img src={app._links.logo[0].href} alt={app.label} width="24" height="24" />}
                            <Text style={{whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}}>{app.label}</Text>
                            <Checkbox ml="auto" checked={app.checked} onChange={() => toggleSelected(index)} />
                        </Flex>
                    )}
                </SimpleGrid>

            </Box>
        </>
    )
}