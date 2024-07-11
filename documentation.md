# Project Documentation

## Table of Contents

- [Introduction](#introduction)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Features](#features)
  - [Service Worker Registration](#service-worker-registration)
  - [Web Pages](#web-pages)
    - [Chemistry](#chemistry)
      - [Structure of Matter](#structure-of-matter)
    - [Blog](#blog)
  - [Context and State Management](#context-and-state-management)
- [Service Worker](#service-worker)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction

This project is a web application designed to provide educational content and resources. It features a service worker for offline support and faster loading times in production, a dark mode toggle, and various educational sections, including Chemistry and a Blog for students.

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Download and install from [Node.js website](https://nodejs.org/))
- Git (Download and install from [Git website](https://git-scm.com/downloads))


### Installation

1. Clone the repository to your local machine:
   ```sh
   git clone https://github.com/your-username/your-project-name.git

2. Navigate to the project directory:
```cd your-project-name```

3. Install the necessary dependencies:
``npm install``

### Running the Project
To run the project locally, execute:
```npm start```
This will start a development server, and you can view the application in your browser at http://localhost:3000.

## Features
### Service Worker Registration
The service worker is registered to enable offline support and faster loading times in production. The registration process checks for the production environment and the availability of the service worker in the navigator. For more details, see [src/serviceWorkerRegistration.js.](src/serviceWorkerRegistration.js)



### Web Pages
#### Chemistry
##### Structure of Matter
This section includes educational content on the structure of matter, featuring pages on Chemical Bonds and Atomic Models. Each page uses components like ContentsTable and SectionTitle for layout and darkModeContext for theme toggling. For implementation details, see:

- Chemical Bonds
- Atomic Models
### Blog
The Blog section provides resources for students, including links to external tools and services. It uses the ```TopWave``` component for consistent styling across pages. For more information, see Students Resources.


### Context and State Management
The application uses React context for managing the dark mode state across the application. The darkModeContext is utilized in various components to toggle themes. For more details, see [Dark Mode Context](src\context\DarkModeContext.jsx).

Service Worker
The service worker is set up with Workbox for precaching, routing, and strategies like StaleWhileRevalidate for resource fetching. It enhances the application's performance and offline capabilities. For configuration details, see Service Worker.

Contributing
Contributions are welcome! Please read our contributing guidelines for how to propose changes to the project or report issues.

License
This project is licensed under the MIT License. See the LICENSE file for details. ```