var postSignUp = function(userId, info) {
  console.log(userId);
  console.log(info);
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

