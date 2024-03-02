import { Box, Button, Flex, Group, Space, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconArrowBigRight } from "@tabler/icons-react";
import { useState } from "react";

export default function Sync() {
    const tenantSetup = useForm({
        initialValues: {
            sourceUrl: '',
            sourceApikey: '',
            targetUrl: '',
            targetApikey: '',
        }
    });

    const [appList, setAppList] = useState([
        {label: 'App1', checked: true},
        {label: 'App2', checked: true},
        {label: 'App3', checked: true},
    ]);

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
        <Flex direction="row" justify="center" align="center" gap={16} p="md">
            <Box style={{border:"1px solid lightgray", borderRadius:"5px"}}>
                <Flex
                    bg="#f4f4f4" 
                >

                </Flex>

            </Box>
            <IconArrowBigRight />
            <Box style={{border:"1px solid lightgray", borderRadius:"5px"}}>
                <Flex
                    bg="#f4f4f4" 
                >

                </Flex>

            </Box>
        </Flex>
       

        </>
    )
}