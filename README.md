# Divine-Machinations

- Apps https://galaxy-beta.meteor.com/zbomb/us-east-1/apps

- Container(s) https://galaxy-beta.meteor.com/zbomb/us-east-1/apps/machinations.meteorapp.com/overview

- Demo [machinations](https://machinations.meteorapp.com)

- Repo https://github.com/Zbeyer/Divine-Machinations

```bash
meteor deploy machinations
```

Front end web revolves around these three: `HTML | CSS | JS`

**HTML**: frameworks: what is on the screen

**CSS**: beautification: make it look pretty

**JS**: functionality: make it do something

## What is Blaze?

BlazeJS is a **reactive UI library** designed for building user interfaces with **HTML templates**. Basically a templating tool for reused JS and HTML

## What is Meteor?

Meteor (or MeteorJS) is a **full-stack JavaScript framework** designed for building **real-time web and mobile applications**. It simplifies development by allowing developers to use **JavaScript for both client-side and server-side code**

Essentially Meteor is a wrapper around `Node.js` that lets you incorporate a database without using something like `express`. By defaualt it uses `MongoDB`, a no-SQL database and talks to *its* server with `Meteor.call` and queries mongo from the server

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



```mermaid
graph TD;

MeteorClient-->MeteorHTML;
MeteorClient-->MeteorCSS;
MeteorClient-->MeteorJS;
MeteorJS-->MeteorServer;

MeteorServer-->QueryFuction;
QueryFuction-->Database;

```

# Web Architecture Skinny

In web design and development, **RESTful** refers to a web architecture that follows the principles of **Representational State Transfer (REST)**. REST is a widely used standard for building **scalable and efficient web services** and is used to make websites use CRUD:

`GET` (Retrieve data)

`POST` (Create new data)

`PUT` (Update data)

`DELETE` (Remove data)

CRUD stands for **Create, Read, Update, and Delete**—the four basic operations that can be performed on a database.

The language I like to use:

-   `fetch` data :get or read
-   `set` data: post, create, or update
-   `delete` or clear wipe data

## Organize

```mermaid
graph TD;

Repository-->Codebase;
Codebase-->client;
Codebase-->lib;
Codebase-->public;
Codebase-->sever;
```

Our reposory is GitHub, this is where we store code

`Client` is a folder that only loads on the Meteor Client. That means it only affects how users see and interact with the site. CSS should stay here.This is all the user will see.

`lib` is a folder that will go in both server and client, helper functions like 1+1=2 that need to work on the front and back ends go here

`Public` is a folder for files that should be public, images go here.

`Server` is a folder that is back end only, database queries go here.

