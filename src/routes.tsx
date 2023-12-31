import ListPage from './pages/list_page/list_page';
import NewPage from './pages/new_page/new_page';
import MainPage from './pages/main_page/main_page';
import LoginPage from './pages/login_page/login_page';
import JoinPage from './pages/join_page/join_page';
import MyPage from './pages/my_page/my_page';
import AuthPage from './pages/auth_page/auth_page';
import DetailPage from './pages/detail_page/detail_page';
import ApplicationPage from './pages/app_page/app_page';
import MyPrivacy from './pages/my_privacy/ my_privacy';
import EditPage from './pages/edit_page/edit_page';
import SearchPage from './components/search_page/search_page';
import AboutPage from './pages/aboutpage/aboutpage';
import SearchResult from './components/search_page/search_result';
export const ROUTE = {
  MAIN: {
    path: '/',
    link: '/',
    element: MainPage,
  },
  LOGIN: {
    path: '/login',
    link: '/login',
    element: LoginPage,
  },
  JOINPAGE: {
    path: '/joinpage',
    link: '/joinpage',
    element: JoinPage,
  },
  MYPAGE: {
    path: '/mypage',
    link: '/mypage',
    element: MyPage,
    isAuth: true,
    isMain: false,
  },
  LISTPAGE: {
    path: '/challenges',
    link: '/challenges',
    element: ListPage,
  },
  CATEPAGE: {
    path: '/challenges',
    link: '/challenges',
    element: ListPage,
  },
  SEARCHPAGE: {
    path: '/challengesresult',
    link: '/challengesresult',
    element: SearchPage,
  },
  DETAILPAGE: {
    path: '/detail/:id',
    link: '/detail',
    element: DetailPage,
  },
  APPPAGE: {
    path: '/applicationpage/:id',
    link: '/applicationpage',
    element: ApplicationPage,
  },
  NEWPAGE: {
    path: '/newpage',
    link: '/newpage',
    element: NewPage,
  },
  EDITPAGE: {
    path: '/editpage/:id',
    link: '/editpage',
    element: EditPage,
  },
  AUTHPAGE: {
    path: '/authpage/:id',
    link: '/authpage',
    element: AuthPage,
  },
  MYPRIVACY: {
    path: '/myprivacy',
    link: '/myprivacy',
    element: MyPrivacy,
  },
  ABOUTPAGE: {
    path: '/aboutpage',
    link: '/aboutpage',
    element: AboutPage,
  },
  SEARCHRESULT: {
    path: '/results',
    link: '/results',
    element: SearchResult,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
