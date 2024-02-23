import { Box, Button, Group, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function Setup() {

    const form = useForm({
        initialValues: {
          url: '',
          apikey: '',
        }
    });

    const submit = (values) => {
        console.log(values);
        localStorage.setItem('OriginTenant', JSON.stringify(values));
    }

    return (
        <>
            <Title order={1}>Setup origin tenant</Title>

            <Box maw={340}>
                <form onSubmit={form.onSubmit((values) => {submit(values); })}>
            

                    <TextInput 
                        withAsterisk
                        label="Tenant"
                        placeholder="your Okta URL"
                        {...form.getInputProps('url')}
                    />

                    <TextInput 
                        withAsterisk
                        label="API Key"
                        placeholder="your API KEY"
                        {...form.getInputProps('apikey')}
                    />
        
                    <Group justify="flex-end" mt="md">
                        <Button type="submit">Submit</Button>
                    </Group>
                </form>
            </Box>

        </>
    )
}