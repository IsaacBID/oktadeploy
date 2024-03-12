import {  Box, Checkbox, Space, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import {  IconSettings, IconUsersGroup } from '@tabler/icons-react';

import { applist as testAppList, grouplist as testGroupList } from '../testdata';
import ListView from '../components/ListView';

export default function Backup() {
    const [appList, setAppList] = useState([]); 
    const [groupList, setGroupList] = useState([]);

    useEffect(() => {
        //request list of apps
        
        //adds selected prop to each app 
        const appsWithSelectedProp = testAppList.map(app => ({ ...app, checked: true }));
        const groupWithSelectedProp = testGroupList.map(group => ({ ...group, checked: true }));
        setAppList(appsWithSelectedProp);
        setGroupList(groupWithSelectedProp);
    }, []);


    const itemToggler = (item, list, setter) => {
        setter(list.map((i) => 
            i === item? { ...i, checked: !i.checked } : i
        ));
    }

    const toggleAll = (list, setter) => {
        const allChecked = list.every(i => i.checked);
        return (
            <Checkbox 
                checked={allChecked} 
                onChange={() => setter(list.map(i => ({ ...i, checked: !allChecked })))}
            />
        );
    }

    return (
        <>  
            <Title order={2}>downloading from tenant</Title>
            <Space h="lg" />
            <ListView 
                list={appList} 
                iconHandler={(app) => 
                    app._links.logo === undefined 
                    ? <Box w={24} h={24}><IconSettings /></Box>
                    : <img src={app._links.logo[0].href} alt={app.label} width="24" height="24" />
                }
                itemLabelHandler={(app) => app.label}
                collapsable={true}
                label={"Select Apps"}
                rightSection={(app) =>
                    <Checkbox 
                        ml="auto" 
                        checked={app.checked} 
                        onChange={() => itemToggler(app, appList, setAppList)}
                    />
                }
                listAction={() => toggleAll(appList, setAppList)}
            />
            <Space h="lg" />
            <ListView
                list={groupList} 
                label="Select Groups" 
                iconHandler={<IconUsersGroup />}
                itemLabelHandler={(group) => group.profile.name}
                collapsable={true}
                rightSection={(group) =>
                    <Checkbox
                        ml="auto"
                        checked={group.checked} 
                        onChange={() => itemToggler(group, groupList, setGroupList)}
                    />
                }
                listAction={() => toggleAll(groupList, setGroupList)}
            />
            <Space h="lg" />
            
        </>
    )
}