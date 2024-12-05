import { NavigationCollection, NavigationItemLocation } from '@libs/types';

export const headerNavigationItems: NavigationCollection = [
  {
    id: 1,
    label: 'About us',
    url: '/about-us',
    sort_order: 1,
    location: NavigationItemLocation.header,
    new_tab: false,
  },
  {
    id: 2,
    label: 'Collections',
    url: '/products',
    sort_order: 1,
    location: NavigationItemLocation.header,
    new_tab: false,
  },
  {
    id: 3,
    label: 'Contact us',
    url: '/contact',
    sort_order: 1,
    location: NavigationItemLocation.header,
    new_tab: false,
  },
];

export const footerNavigationItems: NavigationCollection = [
  {
    id: 1,
    label: 'Shop All',
    url: '/products',
    location: NavigationItemLocation.footer,
    sort_order: 1,
    new_tab: false,
  },
  {
    id: 2,
    label: 'Privacy Policy',
    url: '/privacy',
    location: NavigationItemLocation.footer,
    sort_order: 1,
    new_tab: false,
  },
  {
    id: 3,
    label: 'Terms & Conditions',
    url: '/terms',
    location: NavigationItemLocation.footer,
    sort_order: 1,
    new_tab: false,
  },
  {
    id: 4,
    label: 'Shipping Policy',
    url: '/shipping',
    location: NavigationItemLocation.footer,
    sort_order: 1,
    new_tab: false,
  },
   {
    id: 5,
    label: 'Refund Policy',
    url: '/refund',
    location: NavigationItemLocation.footer,
    sort_order: 1,
    new_tab: false,
  },  
   {
    id: 6,
    label: 'Contact us',
    url: '/contact',
    location: NavigationItemLocation.footer,
    sort_order: 1,
    new_tab: false,
  }, 
];
