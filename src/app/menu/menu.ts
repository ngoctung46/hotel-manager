import { MenuItem } from './menu-item.model';
export const MENU: MenuItem[] = [
    new MenuItem('Home',''),
    new MenuItem(
        'Manage',
        '/manage',
        [
            new MenuItem('Rooms', '/room'),
            new MenuItem('Services','/room')
        ]),
    new MenuItem(
        'Reports',
        '/reports',
        [
            new MenuItem('Daily Report','daily-report'),
            new MenuItem('Monthly Report', 'monthly-report'),
            new MenuItem('Periodical Report', 'periodical-report')
        ])
];
