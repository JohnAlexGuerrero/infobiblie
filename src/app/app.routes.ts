import { Routes } from '@angular/router';
import { Dashboard } from './features/home/pages/dashboard/dashboard';
import { OldTestament } from './features/old-testament/pages/old-testament/old-testament';
import { NewTestament } from './features/new-testament/pages/new-testament/new-testament';
import { Reader } from './features/reader/pages/reader/reader';

export const routes: Routes = [
    {
        path: '',
        component: Dashboard,
        title:'home'
    },
    {
        path: 'old-testament',
        component: OldTestament,
        title: 'Old Testament'
    },
    {
        path: 'old-testament/:book',
        component: Reader,
        title: 'reader book Old Testament'
    },
    {
        path: 'new-testament',
        component: NewTestament,
        title: 'New Testament'
    },
    {
        path: 'new-testament/:book',
        component: Reader,
        title: 'Reader book New Testament'
    },
];
