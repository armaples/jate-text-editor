# JATE (Just Another Text Editor)

## Description
This app is a basic text editor. The user can easily install the app for offline use. Each session is saved to both local storage and indexedDB when the window becomes unfocused. 

## Table of Contents
- [Installation](#installation)
- [Application Preview](#application-previous)
- [Deployed Application](#deployed-application)
- [MIT License](#mit-license)

## Installation
Navigate to the deployed application (link below) and click "Install" to install the application for offline usage. 
  
## Application Preview
![Preview](./images/appPreview1.png)
Above is what the app looks like before any data is stored. 

![Preview](./images/appPreview2.png)
When data is stored, it will display automatically when coming back to the page based on the last save. 

![Preview](./images/appPreview4.png)
The information is saved to indexedDB, which is where the first attempt is made to retrieve such data if it exists.

![Preview](./images/appPreview3.png)
If there is no information in the indexedDB, it will try the local storage. 

## Deployed Application
[Click here to see the deployed application.](https://shielded-reaches-64012.herokuapp.com/)

## MIT License
Distributed under the MIT License. Please follow [this link](https://opensource.org/licenses/MIT) for more information, or click on the badge at the top.
