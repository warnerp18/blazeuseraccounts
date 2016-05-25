var postSignUp = function(userId, info) {
  console.log(userId);
  console.log(info.profile.profession);
  Roles.addUsersToRoles(userId,['normal-user', info.profile.profession]);
}
var myLogoutFunc = function() {
  Session.set('nav-toggle', '');
  FlowRouter.go('/');
}
AccountsTemplates.configure({
  postSignUpHook: postSignUp,
  termsUrl: 'terms-of-use',
  privacyUrl: 'privacy',
  onLogoutHook: myLogoutFunc,
});

