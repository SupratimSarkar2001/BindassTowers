import { ShopOutlined, LaptopOutlined, UserOutlined, NotificationOutlined, HomeOutlined } from '@ant-design/icons';

export const configSidebarItems = {
 admin: [
   {key: 'home', label: 'Home', icon: HomeOutlined, path: '/'},
   { key: 'property', label: 'Property', icon: ShopOutlined, path: '/property-admin' },
   { key: 'rent', label: 'Rent', icon: LaptopOutlined, path: '/rent' },
   { key: 'ownershipchange', label: 'Ownership Change', icon: NotificationOutlined, path: '/ownershipchange' },
   { key: 'usersprofile', label: 'Users Profile', icon: UserOutlined, path: '/usersprofile' },
 ],
};
