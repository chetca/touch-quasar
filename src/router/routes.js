
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { 
        path: '', 
        component: () => import('pages/index') 
      }
    ]
  },

  {
    path: '/form',
    component: () => import('layouts/default'),
    children: [
      { 
        path: 'form', 
        component: () => import('pages/form') 
      }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
