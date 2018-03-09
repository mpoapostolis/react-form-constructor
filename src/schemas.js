export const schema = [
    [
      {
        errmsg: 'this field cannot be empty',
        type: 'text',
        validator: 'no-empty',
        field: 'name',
        label: 'Name',
      },
      {
        errmsg: 'this field cannot be empty',
        type: 'text',
        validator: 'no-empty',
        field: 'surname',
        label: 'Surname',
      },
    ],
    [
      {
        errmsg: 'this field cannot be empty',
        type: 'text',
        validator: 'no-empty',
        field: 'group',
        label: 'Group',
      },
      {
        errmsg: `Valid e-mail can contain only latin letters, numbers, '@' and '.'`,
        type: '',
        validator: 'email',
        field: 'Email',
        label: 'Email',
      },
    ],
    [
      {
        type: '',
        field: 'phone1',
        label: 'Phone 1',
      },
      {
        type: '',
        field: 'phone2',
        label: 'Phone 2',
      },
      {
        type: '',
        field: 'phone3',
        label: 'Phone 3',
      },
    ],
    [
      {
        errmsg: 'this field cannot be empty',
        type: 'text',
        validator: 'no-empty',
        field: 'role',
        label: 'Role',
      },
    ],
  ];
  