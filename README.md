# LABORATORY-TEMPLATING

This laboratory is my testing and experimentation with the templating engine such as **Nunjucks** and **Handlebars**. For this project, I have used **NX** for creating the workspace and **Express** for creating the api. The two engine will be connected to my API using middlewares. I tried this two templating for testing if there were any difference between the two. I have found that, they work the same but with a different syntax. Through my reading of those template, I also discover many other templating engine such as Pug but once you master one, you can switch to an other one easily.

## Plan of the presentation

I explain with all the details how I build the project and my way of working.

- [Experiences](#experiences)
- [Running](#running)
- [System](#system)

## Experiences

#### Handlebars (API1)

- Test of expression
- Test of metadata
- Test of layout
- Test of helpers
- Test of array
- Test of raw
- Test of whitespace
- Test of partials
- Test of inline
- Test of blocks

#### Nunjuck (API2)

- Test of expression
- Test of template
- Test of tags
- Test of array
- Test of raw
- Test of whitespace
- Test of import
- Test of include
- Test of inheritance

## Running

I am using NX, so for starting the project use the following command:

```bash
$ nx serve api1
$ nx serve api2
```

For testing the app, use Postman.

## System

Ubuntu Version: Ubuntu 20.04.1 LTS
Node Version: v16.15.1

```bash
# Get the version of node
$ node -v

# Get the latest version of ubuntu
$ lsb_release -a
```
