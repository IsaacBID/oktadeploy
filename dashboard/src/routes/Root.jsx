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
            withBorder={true}
        >

            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Title order={3}>Okta Deploy Dashboard</Title>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <CloseButton onClick={toggle} hiddenFrom="sm" />
                    <Group direction="column" spacing="md">
                        {menu.map((item, index) => (
                            <NavLink key={index} to={item.path} style={{textDecoration:"none", width:"100%", color: 'inherit'}}>
                                {(isActive) => (
                                    <Group py="3" bg={isActive?"yellow":''}>
                                        {item.icon}
                                        <Title order={4}>{item.title}</Title>
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
                <Text ta="center">BeyondID &copy; {new Date().getFullYear()}</Text>
            </AppShell.Footer>

        </AppShell>
    )
}