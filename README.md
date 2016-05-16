Mark Edit
=========

Mark Edit is a full-featured, open-source Markdown editor based on Showdown.
Main showcase: https://markeditapp.herokuapp.com

> **Note:**
>
> - Documents are stored in a redis serve, which means they are shared between different browsers/computers. Clearing your browser's data will not delete your documents.

### Mark Edit can:

 - Manage multiple Markdown documents online or offline
 - Share a link to a Markdown document that renders it in a nice viewer and multiple people can edit at same time
 - Convert Markdown to HTML
 - Allows the user to refresh the page retaining the content

## Installation

### Step 1: Clone the repo
```
git clone https://github.com/rajabishek/markedit
```

### Step 2: Prerequisites
This will install the dependencies of this website. It will pull in several packages like sharejs, redis, express, bower etc. This will install all the backend dependencies.
```
npm install
```

### Step 3: Install frontend dependencies
```
bower install
```

### Step 4: Start the application
```
node server.js
```

## License
MIT License. See LICENSE file.


