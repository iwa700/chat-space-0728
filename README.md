# README

This README would normally document whatever steps are necessary to get the
application up and running.



## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index: true|
|email|string|null: false, unigue:true|
|password|string|null: false|
|passwordconfirmation|string|null: false|


### Association
- has_many:messeges
- has_many:group_users
- has_many:groups,through: :group_users


## messegesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unigue:true|


### Association
- has_many:messeges
- has_many:users,through: :group_users
- has_many:group_users

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
