import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';


export default function App() {
    const form = useForm({
        initialValues: {
          termsOfService: false,
          tenant: '',
          apikey: '',
        },
    
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
      });
    
      return (
        <Box maw={340} mx="auto">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            

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
    
            <Checkbox
              mt="md"
              label="Remember tenant"
              {...form.getInputProps('termsOfService', { type: 'checkbox' })}
            />
    
            <Group justify="flex-end" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Box>
      );
}