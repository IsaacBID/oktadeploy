import { NavLink as RouteLink, Outlet } from "react-router-dom";
import { AppShell, Burger, Group, Stack, Text, Title } from "@mantine/core";    
import { useDisclosure } from "@mantine/hooks";

export default function Root({menu}) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 64 }}
            navbar={{ width: 208, breakpoint: "sm", collapsed:{mobile: !opened, desktop: !opened} }}
            //footer={{ height: 32}}
            padding="md"
            layout="default"
            withBorder={false}
        >

            <AppShell.Header>
                <Group h="100%" px="md" c="white" bg="bid-blue">
                    <Burger opened={opened} onClick={toggle} size="sm" color="white"/>
                    <Title order={3}>Okta Deploy</Title>
                    <Group ml="auto" gap="0">
                        {menu.filter((item)=>item.title.endsWith('*')).map((item, index) => 
                            <RouteLink 
                                key={index}
                                to={item.path}
                                style={{textDecoration:"none", color: 'inherit'}}
                            >
                                {(isActive) => 
                                        <Title 
                                            px="sm"
                                            py="xs" 
                                            bg={isActive.isActive?"bid-orange":''} 
                                            c="white" 
                                            order={5}
                                            style={{borderRadius:"5px"}}
                                        >
                                            {item.title.replace('*', '')}
                                        </Title>
                                }
                            </RouteLink>
                        )}
                            
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar p="0" bg="bid-blue" zIndex={200}>
                <Stack gap="0" justify="center">
                    {menu.map((item, index) => (
                        <RouteLink 
                            key={index} 
                            to={item.path} 
                            style={{textDecoration:"none", width:"100%", color: 'inherit'}}
                        >
                            {(isActive) => (
                                <Group p="7" bg={isActive.isActive?"bid-orange":''} c="white">
                                    {item.icon}
                                    <Title order={5}>{item.title.replace('*', '')}</Title>
                                </Group>
                            )}
                        </RouteLink>
                    ))}
                </Stack>
            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet />
            </AppShell.Main>

            <AppShell.Footer >
                <Text 
                    //ml={{sm: "13rem"}} 
                    ta="center" 
                    c="dimmed"
                >
                    BeyondID &copy; {new Date().getFullYear()}
                </Text>
            </AppShell.Footer>

        </AppShell>
    )
}