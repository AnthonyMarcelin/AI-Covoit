Réalisé avec [dbdiagram.io](https://dbdiagram.io/d/covoit_ia-680f8f091ca52373f5ab7e9e)

```js
Table user {
  user_id SERIAL [pk]
  lastname text [not null]
  firstname text [not null]
  email text [unique, not null]
  password text [not null]
  phoneNumber text
  role text [not null]
}

Table route {
  route_id SERIAL [pk]
  user_id INT [not null, ref: > user.user_id]
  start text [not null]
  end text [not null]
  startTime TIMESTAMPTZ [not null]
  placeAvaible INT [not null]
}

Table reservation {
  reservation_id SERIAL [pk]
  route_id INT [not null, ref: > route.route_id]
  user_id INT [not null, ref: > user.user_id]
  date TIMESTAMP
  Status text [not null]
}

Table review {
  review_id SERIAL [pk]
  author_id INT [not null, ref: > user.user_id]
  target_id INT [not null, ref: > user.user_id]
  rate INT [not null]
  commentary TEXT
  date TIMESTAMPTZ
}
```