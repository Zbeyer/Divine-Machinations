# Divine-Machinations

- https://galaxy-beta.meteor.com/zbomb/us-east-1/apps

- https://galaxy-beta.meteor.com/zbomb/us-east-1/apps/machinations.meteorapp.com/overview

- [machinations](machinations.meteorapp.com)

```bash
meteor deploy machinations
```



## Blaze 

Blaze is a templating language that makes reused HTML, JS, or CSS easy to use, find, and keep organized

## Meteor

Meteor is a wrapper around node that lets you incorporate a database without using something like express. By defaualt it uses MongoDB and talks to its server with `Meteor.call` and queries mongo from the server

```ts
			await ServerDB.updateUser(
				{ _id: user._id },
				{
					$set: {
						"user.dataId": iDstring,
					},
				},
			);
```

