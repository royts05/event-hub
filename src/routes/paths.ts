export const rootPaths = {
  root: '/',
  pageRoot: 'pages',
  authRoot: 'auth',
  userRoot: '',
  mainRoot: '',
  errorRoot: 'error',
};

export default {
  dashboard: `/${rootPaths.pageRoot}/dashboard`,
  events: `/${rootPaths.pageRoot}/events`,
  manageEvents: `/${rootPaths.pageRoot}/manageEvents`,
  addEvent: `/${rootPaths.pageRoot}/addEvent`,
  notification: `/${rootPaths.pageRoot}/notification`,
  settings: `/${rootPaths.pageRoot}/settings`,
  manageAdmin: `/${rootPaths.pageRoot}/manageAdmin`,

  
  cancelledEvents: `/${rootPaths.pageRoot}/cancelledEvents`,
  rejectedEvents: `/${rootPaths.pageRoot}/rejectedEvents`,

  home: `/${rootPaths.userRoot}/home`,
  photos: `/${rootPaths.userRoot}/about`,
  contact: `/${rootPaths.userRoot}/contact`,
  profile: `/${rootPaths.userRoot}/profile`,
  notifications: `/${rootPaths.userRoot}/notifications`,
  
  mainpage: `/${rootPaths.mainRoot}/mainpage`,

  signin: `/${rootPaths.authRoot}/signin`,
  signup: `/${rootPaths.authRoot}/signup`,
  forgotPassword: `/${rootPaths.authRoot}/forgot-password`,
  404: `/${rootPaths.errorRoot}/404`,
};
