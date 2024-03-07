import Setup from "./routes/Setup";
import Apps from "./routes/Apps";
import Sync from "./routes/Sync";

import { IconApps, IconCloudUpload, IconCloudDownload, IconHome, IconSettingsPlus } from '@tabler/icons-react';

//hide items from showing in menu by adding _ to the start of the title
//show items in the header by adding * to the end of the title

const Menu = [
  { path: "/", element: <Setup />, title: "Setup*", icon: <IconSettingsPlus /> },
  // { path: "/setup", element: <Setup />, title: "Setup", icon: <IconHome /> },
  { path: "/apps", element: <Apps />, title: "Backup*", icon: <IconCloudDownload /> },
  { path: "/sync", element: <Sync />, title: "Deploy*", icon: <IconCloudUpload/>}
]

export default Menu;