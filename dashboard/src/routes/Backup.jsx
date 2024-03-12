import {  Box, Checkbox, Space, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {  IconSettings, IconUsersGroup } from '@tabler/icons-react';

import { applist as testAppList, grouplist as testGroupList } from '../testdata';
import ListView from '../components/ListView';

export default function Backup() {
    const redirect = useNavigate();
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

    useEffect(() => {
        //make this validation routerlevel
        const tenant = localStorage.getItem('OriginTenant');
        if (tenant == null || tenant == undefined) {
            redirect('/');
        }
    }, []);

    const saveSelectedApps = () => {
        const selectedApps = appList.filter(app => app.checked).map(app => app.label);
        console.log(selectedApps)
    }

    const saveSelectedGroups = () => {
        const selectedGroups = groupList.filter(group => group.checked).map(group => group.id);
        console.log(selectedGroups)
    }

    const itemToggler = (item, list, setter) => {
        setter(list.map((i) => 
            i === item? { ...i, checked: !i.checked } : i
        ));
    }

    return (
        <>  
            <Title order={2}>downloading from tenant</Title>
            <Space h="lg" />
            <ListView 
                list={appList} 
                saveHandler={saveSelectedApps}
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
            />
            <Space h="lg" />
            <ListView
                list={groupList} 
                label="Select Groups" 
                saveHandler={saveSelectedGroups}
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
            />
            <Space h="lg" />
            
        </>
    )
}