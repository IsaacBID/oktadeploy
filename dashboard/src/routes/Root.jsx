import { NavLink, Outlet } from "react-router-dom";
import { AppShell, Burger, Group, Stack, Text, Title } from "@mantine/core";    
import { useDisclosure } from "@mantine/hooks";

export default function Root({menu}) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 64 }}
            navbar={{ width: 208, breakpoint: "sm", collapsed:{mobile: !opened} }}
            //footer={{ height: 32}}
            padding="md"
            layout="default"
            withBorder={false}
        >

            <AppShell.Header>
                <Group h="100%" px="md" c="white" bg="bid-blue">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" color="white"/>
                    <Title order={3}>Okta Deploy</Title>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar p="md" bg="bid-blue">
                <Stack spacing="md" justify="center">
                    {menu.map((item, index) => (
                        <NavLink 
                            key={index} 
                            to={item.path} 
                            style={{textDecoration:"none", width:"100%", color: 'inherit'}}
                        >
                            {(isActive) => (
                                <Group py="4" pl="6" bg={isActive?"bid-orange":''} c="white" style={{borderRadius:"5px"}}>
                                    {item.icon}
                                    <Title order={5}>{item.title}</Title>
                                </Group>
                            )}
                        </NavLink>
                    ))}
                </Stack>
            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet />
            </AppShell.Main>

            <AppShell.Footer >
                <Text ml={{sm: "13rem"}} ta="center" c="dimmed">BeyondID &copy; {new Date().getFullYear()}</Text>
            </AppShell.Footer>

        </AppShell>
    )
}