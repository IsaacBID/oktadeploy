import { ActionIcon, Box, Button, Flex, SimpleGrid, Text, TextInput, Title } from "@mantine/core";
import { useDisclosure, useToggle } from "@mantine/hooks";
import { IconSearch, IconLayoutGrid, IconList, IconCaretDownFilled, IconCaretRightFilled } from "@tabler/icons-react";
import { useState } from "react";

const ItemContent = ({icon, label, rightSection}) => 
<>
    {icon}
    <Text style={{whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}}>{label}</Text>
    {rightSection}
</>

export default function ListView({label, list, saveHandler, iconHandler, itemLabelHandler, collapsable = false, rightSection = () => {}}){
    const [search, setSearch] = useState('');
    const [viewStyle, toggleViewStyle] = useToggle(['list', 'grid']);
    const [collapsed, toggleCollapsed] = useDisclosure(false);

    

    return (
        <Box style={{border:"1px solid lightgray", borderRadius:"5px"}}>
            <Flex 
                bg="#f4f4f4" 
                p="sm" 
                style={{borderBottom:"1px solid lightgray", borderRadius:"5px 5px 0 0"}}
                direction={"column"}
                gap="sm"
            >
                {(label != undefined || collapsable) &&
                <Flex>
                    {label != undefined && <Title order={4}>{label}</Title>}
                    {collapsable && 
                        <ActionIcon ml="auto" variant="transparent" onClick={()=>toggleCollapsed.toggle()}>
                            {collapsed? <IconCaretRightFilled/> : <IconCaretDownFilled /> }
                        </ActionIcon>
                    }
                </Flex>}
                <Flex direction={{base: "column", xs: "row"}} gap="sm" {...(collapsed)&&{display:"none"}}>
                    <Flex w={{base: "100%", sm:"70%"}} align="center" gap="sm">
                        <ActionIcon variant="transparent" onClick={toggleViewStyle} aria-label="Toggle List / Grid view">
                            {viewStyle === 'grid' ?<IconList/> : <IconLayoutGrid/>}
                        </ActionIcon>
                        <TextInput
                            w="100%"
                            placeholder="Search"
                            leftSection={<IconSearch />}
                            value={search}
                            onChange={(e) => setSearch(e.currentTarget.value)}
                        />
                    </Flex>
                    <Button w={{base:"100%", sm:"30%"}} onClick={saveHandler}>Save selected</Button>
                </Flex>

            </Flex>
            
            <Box {...(collapsed)&&{display:"none"}}>
                {viewStyle === 'list'
                ?<Flex direction="column">
                    {list
                    .filter(item => itemLabelHandler(item).toLowerCase().includes(search.toLowerCase()))
                    .map((item, index) => 
                        <Flex key={index} p="sm" gap="xs">
                            <ItemContent 
                                icon={iconHandler ? (typeof iconHandler === 'function' ? iconHandler(item) : iconHandler) : undefined} 
                                label={itemLabelHandler(item)} 
                                rightSection={rightSection(item)}
                            />
                        </Flex>
                    )}
                </Flex>
                :<SimpleGrid cols={{base: 1, sm: 2, md:3}} p="md">
                    {list
                    .filter(item => itemLabelHandler(item).toLowerCase().includes(search.toLowerCase()))
                    .map((item, index) => 
                        <Flex
                            key={index} 
                            style={{border: "1px solid lightgray", borderRadius:"5px"}}
                            p="sm"
                            gap="xs"
                        >
                            <ItemContent 
                                icon={iconHandler ? (typeof iconHandler === 'function' ? iconHandler(item) : iconHandler) : undefined} 
                                label={itemLabelHandler(item)}
                                rightSection={rightSection(item)} 
                            />
                        </Flex>
                    )}
                </SimpleGrid>
                }
            </Box>

        </Box>
    )
}