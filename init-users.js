db.createCollection('users');
db.users.insert([
  {
    _id: ObjectId("66f50fc71f16496b86964033"),
    firstname: 'Léo',
    lastname: 'Martin',
    email: 'leo.martin@example.com',
    password: 'abc123def456ghi789:jkl987mno654pqr321stu000vwx999yyy888zzz777aaa666bbb555ccc444',
    phoneNumber: '0601020304',
    description: 'Léo est un membre de l’équipe de développement.',
    role_id: 1,
    route_id: ObjectId("507f1f77bcf86cd799439011"),
    reservation_id: ObjectId("507f1f77bcf86cd799439012")
  },
  {
    _id: ObjectId("a4f23cd91a2047f38c3b423f"),
    firstname: 'Camille',
    lastname: 'Durand',
    email: 'camille.durand@example.com',
    password: 'abc123def456ghi789:jkl987mno654pqr321stu000vwx999yyy888zzz777aaa666bbb555ccc444',
    phoneNumber: '0611223344',
    description: 'Camille est un utilisateur régulier de la plateforme.',
    role_id: 2,
    route_id: ObjectId("507f1f77bcf86cd799439013"),
    reservation_id: ObjectId("507f1f77bcf86cd799439014")
  },
  {
    _id: ObjectId("b8d74e2b341847a5aa09e456"),
    firstname: 'Alex',
    lastname: 'Lemoine',
    email: 'alex.lemoine@example.com',
    password: 'abc123def456ghi789:jkl987mno654pqr321stu000vwx999yyy888zzz777aaa666bbb555ccc444',
    phoneNumber: '0677889900',
    description: 'Alex est stagiaire au sein du projet de refonte.',
    role_id: 3,
    route_id: ObjectId("507f1f77bcf86cd799439015"),
    reservation_id: ObjectId("507f1f77bcf86cd799439016")
  }
]);
