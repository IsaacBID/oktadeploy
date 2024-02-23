import Setup from "./routes/Setup";
import Apps from "./routes/Apps";

import { IconApps, IconHome, IconSettingsPlus } from '@tabler/icons-react';

const Menu = [
  { path: "/", element: <Setup />, title: "Setup", icon: <IconSettingsPlus /> },
  // { path: "/setup", element: <Setup />, title: "Setup", icon: <IconHome /> },
  { path: "/apps", element: <Apps />, title: "Apps", icon: <IconApps /> },
]

export default Menu;