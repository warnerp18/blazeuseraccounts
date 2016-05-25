Template.Dashboard.helpers({
  admin: function() {
    return Roles.userIsRole(Meteor.userId(), 'admin');
  }
});
