<p align="center">
  <img src="./assets/images/ardor-api-wrapper.png" alt="NodeJs Ardor API Wrappeer pacages" width="226">
  <br>
  <a href="https://travis-ci.org/ArdorNxtCommunity/ardor-api-wrapper"><img src="https://travis-ci.org/ArdorNxtCommunity/ardor-api-wrapper.svg?branch=master" alt="Build Status"></a>
</p>

<p align="center">Welcome the NodeJs Ardor API wrapper package</p>


Introduction
------------

How to use this package?
------------------------

### Installation
As any NPM package, please use the following command in your web application project to install the package:

`npm install ardor-api-wrapper`

The package will also install its required depedencies.

### Usage
The usage may depend on the Front-End framework you're using, but you can keep in mind that we will mainly maintain the use of Observables as return values. 

RoadMap
-------
Below is the development roadmap for this package. This map may be adjusted according to feedbacks from users and community members.

- Done
  - Initialization of the package
  - Automatic build (using TravisCI) and deployment process to NPM

- In progress:
  - Remove dependency to Angular HttpClient and use native promises then transform them to Observable
  - Add references to the documentation of the API calls
  - Add tests for each API call
  - Add mandatory parameters in the input parameters for each call
  - Enhance return values (by using model and retun typing)
  - Add usage example for different Front-End frameworks
  - Add local signing of the transactions and avoid sending passphrase to the remote node
  - Add local storage support to handle in-app encryption of the passphrase for future uses


Technical details
-----------------
This section deals with some technical choices made during the developement of this package.

*In Progress*

How to contribute?
-------------------
If you want to contribute to this package, please feel free to submit pull request and I will review and merge them as soon as possible.

Help & Bugs reporting
----------------------
If you have any question, need assistance or found an issue with this package, please visit the Ardor [Slack](https://ardornxt.slack.com/) or [Discord](https://discord.gg/ZrBhZNp) channels. 

You can also reach me on twitter [@aajaji_m](https://twitter.com/aajaji_m)