import { Box, Button, Flex, Group, Space, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconArrowBigRight, IconSettings } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import ListView from "../components/ListView";

import { applist as testAppList, grouplist as testGroupList } from '../testdata';



export default function Deploy() {
    const tenantSetup = useForm({
        initialValues: {
            sourceUrl: '',
            sourceApikey: '',
            targetUrl: '',
            targetApikey: '',
        }
    });

    const [appList, setAppList] = useState([]); 

    useEffect(() => {
        //request list of apps
        
        //adds selected prop to each app 
        const appsWithSelectedProp = testAppList.map(app => ({ ...app, checked: true }));
        setAppList(appsWithSelectedProp);
    }, []);

    return (
        <>
        <Title order={3}>Tenant setup</Title>

        <Space h="sm" />

        <form onSubmit={tenantSetup.onSubmit((values) => {console.log(values); })}>
            <Flex direction="row" justify="center" align="start" gap={16} p="md">
                <Flex direction="column" w="50%" align="center">
                    <Title order={4}>Source tenant</Title>
                    <TextInput
                        w="100%"
                        label="Source Okta URL"
                        placeholder="Source Okta URL"
                        {...tenantSetup.getInputProps('sourceUrl')}
                    />
                    <TextInput
                        w="100%" 
                        label="Source API Key"
                        placeholder="Source API KEY"
                        {...tenantSetup.getInputProps('sourceApikey')}
                    />
                </Flex>

                <IconArrowBigRight />

                <Flex direction="column" w="50%" align="center">
                    <Title order={4}>Target tenant</Title>
                    <TextInput
                        w="100%"
                        label="Target Okta URL"
                        placeholder="Target Okta URL"
                        {...tenantSetup.getInputProps('targetUrl')}
                    />
                    <TextInput
                        w="100%" 
                        label="Target API Key"
                        placeholder="Target API KEY"
                        {...tenantSetup.getInputProps('targetApikey')}
                    />
                    <Group justify="flex-end" mt="md" w="100%">
                        <Button type="submit">Save tenants</Button>
                    </Group>
                </Flex>
            </Flex>
        </form>

        <Title order={3}>Apps</Title>
        <Space h="sm" />
        <Flex direction="row" justify="center" align="start" gap={16} p="md">
            <ListView 
                list={appList} 
                listSetter={setAppList}  
                //saveHandler={saveSelectedApps}
                iconHandler={(app) => 
                    app._links.logo === undefined 
                    ? <Box w={24} h={24}><IconSettings /></Box>
                    : <img src={app._links.logo[0].href} alt={app.label} width="24" height="24" />
                }
                itemLabelHandler={(app) => app.label}
            />
            <Box h="100%">
            <IconArrowBigRight />
            </Box>
            <ListView 
                list={appList.filter(app => app.checked)} 
                listSetter={setAppList}  
                //saveHandler={saveSelectedApps}
                iconHandler={(app) => 
                    app._links.logo === undefined 
                    ? <Box w={24} h={24}><IconSettings /></Box>
                    : <img src={app._links.logo[0].href} alt={app.label} width="24" height="24" />
                }
                itemLabelHandler={(app) => app.label}
            />
        </Flex>
       

        </>
    )
}