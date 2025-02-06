export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  icon?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path?: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

type UserRole = 'MainAdmin' | 'Admin'; // Define valid role types

const sitemap = (role: UserRole): MenuItem[] => {
  const mainAdminOnlyItems: MenuItem[] = [
    {
      id: 'manageAdmin',
      subheader: 'Manage Admin',
      path: '/manageAdmin',
      icon: 'ri:admin-fill',
    },
  ];

  const commonItems: MenuItem[] = [
    {
      id: 'dashboard',
      subheader: 'Dashboard',
      path: '/',
      icon: 'ri:dashboard-3-fill',
    },
    {
      id: 'events',
      subheader: 'Events',
      icon: 'ri:calendar-fill',
      items: [
        role === 'MainAdmin' && {
          name: 'Manage Events',
          pathName: 'manageEvents',
          path: '/manageEvents',
        },
        role === 'Admin' && {
          name: 'Manage Events',
          pathName: 'events',
          path: '/events',
        },
        {
          name: 'Add Events',
          pathName: 'addEvent',
          path: '/addEvent',
        },
        {
          name: 'Cancelled Events',
          pathName: 'cancelled-events',
          path: '/cancelled-events',
        },
        {
          name: 'Rejected Events',
          pathName: 'rejected-events',
          path: '/rejected-events',
        },
      ].filter(Boolean) as SubMenuItem[],
    },
    {
      id: 'settings',
      subheader: 'Account Settings',
      path: '/account-settings',
      icon: 'ri:settings-5-fill',
    },
  ];

  return role === 'MainAdmin' ? [...commonItems, ...mainAdminOnlyItems] : commonItems;
};

export default sitemap;