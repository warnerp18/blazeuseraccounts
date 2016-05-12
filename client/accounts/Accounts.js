AccountsTemplates.addFields([
  {
    _id: 'firstName',
    type: 'text',
    displayName: 'First Name',
    required: true,
    re: /(?=.*[a-z])(?=.*[A-Z])/,
    errStr: '1 lower case and 1 uppercase letter required',
  },
  {
    _id: 'profession',
    type: 'select',
    displayName: 'Profession',
    select: [
      {
        text: 'Developer',
        value: 'developer',
      },
      {
        text: 'Designer',
        value: 'designer',
      },
      {
        text: 'Other',
        value: 'other',
      }
    ]
  },
]);
