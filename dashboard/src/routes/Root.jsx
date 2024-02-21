import { NavLink, Outlet } from "react-router-dom";
import { AppShell, Burger, CloseButton, Group, Text, Title } from "@mantine/core";    
import { useDisclosure } from "@mantine/hooks";

export default function Root({menu}) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 54 }}
            navbar={{ width: 200, breakpoint: "sm", collapsed:{mobile: !opened} }}
            footer={{ height: 32}}
            padding="md"
            layout="alt"
            withBorder={false}
        >

            <AppShell.Header>
                <Group h="100%" px="md" c="white" bg="bid-blue">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" color="white"/>
                    <Title order={3}>Okta Deploy</Title>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar p="md" bg="bid-blue">
                <Group direction="column" spacing="md" justify="center">
                <CloseButton onClick={toggle} hiddenFrom="sm" variant="transparent" c="white"/>
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
                </Group>
            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet />
            </AppShell.Main>

            <AppShell.Footer >
                <Text ta="center" c="dimmed">BeyondID &copy; {new Date().getFullYear()}</Text>
            </AppShell.Footer>

        </AppShell>
    )
}