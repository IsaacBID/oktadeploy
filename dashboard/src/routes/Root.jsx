import { Outlet } from "react-router-dom";
import { AppShell, Burger, Group } from "@mantine/core";    
import { useDisclosure } from "@mantine/hooks";

export default function Root() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 54 }}
            navbar={{ width: 200, breakpoint: "sm", collapsed:{mobile: !opened} }}
            footer={{ height: 32}}
            layout="alt"
        >

            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <h3>Okta Deploy Dashboard</h3>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                menu
            </AppShell.Navbar>

            <AppShell.Main>
                <h1>Dashboard</h1>
                <Outlet />
            </AppShell.Main>

            <AppShell.Footer ta="center">
                BeyondID &copy; {new Date().getFullYear()}
            </AppShell.Footer>

        </AppShell>
    )
}