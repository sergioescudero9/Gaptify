const routes = [
  {
    key: 0,
    path: '/',
    component: './containers/Home',
    exact: true,
  },
  {
    key: 1,
    path: '/otherpage',
    component: './Containers/OtherPage',
    exact: true,
  },
  // {
  //   key: 2,
  //   path: '/:access_token',
  //   component: './Containers/Home',
  //   exact: true,
  // },
  {
    key: 3,
    component: './Containers/NoMatch',
  }
];

export default routes;
