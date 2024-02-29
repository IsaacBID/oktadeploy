import Setup from "./routes/Setup";
import Apps from "./routes/Apps";
import Sync from "./routes/Sync";

import { IconApps, IconArrowsTransferUp, IconHome, IconSettingsPlus } from '@tabler/icons-react';

const Menu = [
  { path: "/", element: <Setup />, title: "Setup", icon: <IconSettingsPlus /> },
  // { path: "/setup", element: <Setup />, title: "Setup", icon: <IconHome /> },
  { path: "/apps", element: <Apps />, title: "Apps", icon: <IconApps /> },
  { path: "/sync", element: <Sync />, title: "Sync", icon: <IconArrowsTransferUp/>}
]

export default Menu;