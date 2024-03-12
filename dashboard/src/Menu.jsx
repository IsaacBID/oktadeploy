import Setup from "./routes/Setup";
import Backup from "./routes/Backup";
import Deploy from "./routes/Deploy";

import { IconApps, IconCloudUpload, IconCloudDownload, IconHome, IconSettingsPlus } from '@tabler/icons-react';

//hide items from showing in menu by adding _ to the start of the title
//show items in the header by adding * to the end of the title

const Menu = [
  // { path: "/", element: <Setup />, title: "Setup*", icon: <IconSettingsPlus /> },
  // { path: "/setup", element: <Setup />, title: "Setup", icon: <IconHome /> },
  { path: "/", element: <Backup />, title: "Backup*", icon: <IconCloudDownload /> },
  { path: "/deploy", element: <Deploy />, title: "Deploy*", icon: <IconCloudUpload/>}
]

export default Menu;