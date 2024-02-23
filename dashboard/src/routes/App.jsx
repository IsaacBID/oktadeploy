import { TextInput, Button, Group, Box, ScrollArea, Flex, SimpleGrid, Paper, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';

import { applist } from '../testdata';

export default function App() {
    const [appList, setAppList] = useState(applist); 
    const form = useForm({
        initialValues: {
          tenant: '',
          apikey: '',
        }
      });
    
      return (
        <>
        <Box maw={340}>
          <form onSubmit={form.onSubmit((values) => {console.log(values); })}>
            

            <TextInput 
              withAsterisk
              label="Tenant"
              placeholder="your Okta URL"
              {...form.getInputProps('tenant')}
            />

            <TextInput 
              withAsterisk
              label="API Key"
              placeholder="your API KEY"
              {...form.getInputProps('apikey')}
            />
    
    
            <Group justify="flex-end" mt="md">
              <Button type="submit">Get App List</Button>
            </Group>
          </form>
        </Box>

        <Paper shadow='xs'>
          <ScrollArea mt="48" mih="400">
            <SimpleGrid cols={{xs: 1, sm: 2, md:3}} h="100%" p="10">
              {appList.map((app, index) => 
                
                <Flex
                  key={index} 
                  style={{border: "1px solid lightgray", borderRadius:"5px"}}
                  p="xs"
                  gap="xs"
                >
                  <img src={app._links.logo[0].href} alt={app.label} width="24" height="24" />
                  <Text style={{whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}}>{app.label}</Text>
                </Flex>
              )}
            </SimpleGrid>
          </ScrollArea>

        </Paper>

        </>
      );
}