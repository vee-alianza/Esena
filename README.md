<h1 align= "center" dir="auto"> Welcome to <a href="https://esena.herokuapp.com/">Esena</a>! </h1> <a name="top"> </a>
<h5 align= "center" dir="auto">
  Creators:
      <a href="https://github.com/ethanchen7">Ethan Chen</a>
      ,
      <a href="https://github.com/lanakomar">Lana Komar</a>
      ,
      <a href="https://github.com/vee-alianza">Vee Alianza</a>
      ,
      <a href="https://github.com/xwnnie">Xiaowen Nie</a>
   </br>
   </br>
   <a href="https://esena.herokuapp.com/">» Live Link «</a>
</h5>
<h4 align= "center" dir="auto">
  <a href="https://github.com/vee-alianza/Esena/wiki">» Explore the Wiki «</a>
</h4>

Esena is an application inspired by [Asana](https://asana.com/) where teamwork makes the dream work by organizing and facilitating collaboration among team members.

<h4 align= "center" dir="auto">
  <a href="https://github.com/vee-alianza/Esena#-welcome-to-esena-">» Table of Contents «</a>
  <h4 align= "center" dir="auto">
      |
      <a href="https://github.com/vee-alianza/Esena#---explore-the-wiki-">About</a>
      |
      <a href="https://github.com/vee-alianza/Esena#technologies-used">Technologies Used</a>
      |
      <a href="https://github.com/vee-alianza/Esena#getting-started">Getting Started</a>
      |
      <a href="https://github.com/vee-alianza/Esena#features">Features</a>
      |
  </h4>
</h4>

# Technologies Used
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
</br>

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)


# Getting started
1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/vee-alianza/Esena.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***


*IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on alpine-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***
<!--
### Dev Containers (OPTIONAL for M1 Users)
The following instructions detail an *optional* development setup for M1 Mac users having issues with the `psycopg` package.

1. Make sure you have the [Microsoft Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension installed.
2. Make sure you have [Docker](https://www.docker.com/products/docker-desktop/) installed on your computer.
3. Clone the repository (only this branch)
   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```
4. Open the repo in VS Code.
5. Click "Open in Container" when VS Code prompts to open container in the bottom right hand corner.
6. **Be Patient!** The initial install will take a LONG time, it's building a container that has postgres preconfigured and even installing all your project dependencies. (For both flask and react!)

   **Note:** This will take much less time on future starts because everything will be cached.

7. Once everything is up, be sure to make a `.env` file based on `.env.example` in both the root directory and the *react-app* directory before running your app. You do not need a `DATABASE_URL` in the `.env` file if you are using this Docker setup for development - the URL is already set in the image (see `.devcontainer/Dockerfile` for the URL).

8. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

9. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

<br>

## Deploy to Heroku
This repo comes configured with Github Actions. When you push to your main branch, Github will automatically pull your code, package and push it to Heroku, and then release the new image and run db migrations.

1. Write your Dockerfile. In order for the Github action to work effectively, it must have a configured Dockerfile. Follow the comments found in this [Dockerfile](./Dockerfile) to write your own!

2. Create a new project on Heroku.

3. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres".

4. Configure production environment variables. In your Heroku app settings -> config variables you should have two environment variables set:

   | Key            | Value                                            |
   | -------------- | ------------------------------------------------ |
   | `DATABASE_URL` | Autogenerated when adding postgres to Heroku app |
   | `SECRET_KEY`   | Random string full of entropy                    |

5. Generate a Heroku OAuth token for your Github Action. To do so, log in to Heroku via your command line with `heroku login`. Once you are logged in, run `heroku authorizations:create`. Copy the GUID value for the Token key.

6. In your Github Actions Secrets you should have two environment variables set. You can set these variables via your Github repository settings -> secrets -> actions. Click "New respository secret" to create
each of the following variables:

   | Key               | Value                            |
   | ----------------- | -------------------------------- |
   | `HEROKU_API_KEY`  | Heroku Oauth Token (from step 6) |
   | `HEROKU_APP_NAME` | Heroku app name                  |

7. Push to your `main` branch! This will trigger the Github Action to build your Docker image and deploy your application to the Heroku container registry. Please note that the Github Action will automatically upgrade your production database with `flask db upgrade`. However, it will *not* automatically seed your database. You must manually seed your production database if/when you so choose (see step 8).

8. *Attention!* Please run this command *only if you wish to seed your production database*: `heroku run -a HEROKU_APP_NAME flask seed all` -->

# Helpful commands
| Command                        | Purpose                                                                                                                                      |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `pipenv shell`                 | Open your terminal in the virtual environment and be able to run flask commands without a prefix                                             |
| `pipenv run`                   | Run a command from the context of the virtual environment without actually entering into it. You can use this as a prefix for flask commands |
| `flask db upgrade`             | Check in with the database and run any needed migrations                                                                                     |
| `flask db downgrade`           | Check in with the database and revert any needed migrations                                                                                  |
| `flask seed all`               | Just a helpful syntax to run queries against the db to seed data. See the **app/seeds** folder for reference and more details                |
| `heroku login -i`              | Authenticate your heroku-cli using the command line. Drop the -i to authenticate via the browser                                             |
| `heroku authorizations:create` | Once authenticated, use this to generate an Oauth token                                                                                      |
| `heroku run -a <app name>`     | Run a command from within the deployed container on Heroku                                                                                   |

# Features
## Splash Page
Users can log into an existing account, sign up or test the site by clicking on the Demo User feature.

![Splash Page](https://user-images.githubusercontent.com/92604480/172023812-8651c70e-43f5-4770-a9bb-9b5d306050e5.png) </br>
![Login](https://user-images.githubusercontent.com/92604480/172023800-b8decfb0-459e-4201-ab5c-45d43751a183.png)</br>
![Sign-Up](https://user-images.githubusercontent.com/92604480/172025198-2f5ff7b5-5948-4252-b624-57d349528610.png)
## Home Page
### Navigation
* The navigation bar is displayed on the side of the page and persists on each page.

Once the user is logged in, they can create a project, view all projects and tasks they are assigned to and click other user's profiles.
   * Clicking on "Create Project" will display a modal with a form that requires infomation to be entered
   * Clicking on a task will display a modal with the task details, that only assigned users can leave a comment on
   * Clicking on "My Projects" or an existing project will redirect the user to the project page
   * Clicking on "My Tasks" will redirect the use to the task page
   * Clicking on a user's name renders the profile of the user

  ![Homepage](https://user-images.githubusercontent.com/92604480/172023853-5ef2a65c-68f0-44db-8886-4941bd89e68c.png)</br>
  ![Create-Project](https://user-images.githubusercontent.com/92604480/172024005-667b09e5-eaf6-49f5-9d14-fd6d72aa98e5.png)</br>
  ![Task-Comment](https://user-images.githubusercontent.com/92604480/172023888-ef08abe7-f9e9-4149-a05e-1048fb0e5885.png) </br>
  ![Project Page](https://user-images.githubusercontent.com/92604480/172023962-a0cf9d52-9bdf-4def-b32f-b94200c486aa.png)</br>
  ![My-Tasks](https://user-images.githubusercontent.com/92604480/172026827-a63b523a-0a96-4a1f-af1e-ac3a5402ae73.png)</br>
![User-Profile](https://user-images.githubusercontent.com/92604480/172028334-47deff8a-e296-41e7-b09b-373266919918.png)

## Projects
A user can create a project, view the details of the project, edit and delete a project.
   * Clicking on the add-button will display modal form that requires infomation to be entered
   * Clicking on the Overview tab will display the project information
   * Clicking on the dropdown menu on the project will display an Edit and Delete option

These features are available only to the owner of the project
![Create-Project-Page](https://user-images.githubusercontent.com/92604480/172026979-05103f8b-d972-44b9-bf8d-1ad3eae157fc.png)</br>
![Single-Project](https://user-images.githubusercontent.com/92604480/172023947-b80c6763-62bd-4bd0-8510-0cd72d733880.png)</br>
![Edit-Delete-Menu](https://user-images.githubusercontent.com/92604480/172025592-e85a8253-1913-41b7-808c-5064235f60c6.png)
## Tasks
A user can add, edit and delete a task

   * Clicking on "Add Task" will display modal form that requires infomation to be entered
   * An Edit and Delete button will only be displayed to the user that is assigned the task
   * When a task is "Marked Complete", the task will be displayed on the Completed table and the progress bar will indicate the percentage of tasks that has been completed within a project

![Task-Tab](https://user-images.githubusercontent.com/92604480/172024054-d7c53e95-226f-48e8-b2c4-8f0ed58ee0a2.png)</br>
![Add-Task-Modal](https://user-images.githubusercontent.com/92604480/172024073-a0ae913d-495d-4f2b-9637-2a9400385731.png)</br>
![Edit-Delete-Task](https://user-images.githubusercontent.com/92604480/172025054-a65196e1-4d9d-4fea-8a8e-affd05feee82.png)</br>
![Edit-Task-Modal](https://user-images.githubusercontent.com/92604480/172025521-1aa8644f-7c7a-47c4-ace1-31282f1062d1.png)</br>
![Progress-Bar](https://user-images.githubusercontent.com/92604480/172027121-94faf47c-5cc6-4143-8f25-d8017382c061.png)

## Teams
A user can add, edit and delete teammates assigned to a project

   * Clicking on the Edit button on the lower table of a task will display a modal with the teammates assigned to the task

![Add-Teammate](https://user-images.githubusercontent.com/92604480/172027213-68b0b5b6-1c77-4795-b8e2-23f032af99fc.png)</br>
![Teammate](https://user-images.githubusercontent.com/92604480/172027275-67ffa32b-96b8-4e64-bf87-adae221571f8.png)</br>
![Add-Remove-Teammates](https://user-images.githubusercontent.com/92604480/172024038-55567af3-c262-4b3b-9d5f-2ddaaa3c0b36.png)

## Profile Page
A user can edit their profile by clicking "My Profile" on the navigation bar, which will redirect them to their profile page

   * Clicking on the edit button will display modal with the user's pre-filled information

![Profile](https://user-images.githubusercontent.com/92604480/172024130-dbee6e17-d9a6-4e99-85a9-27fac6c27ff5.png)</br>
![Edit-Profile](https://user-images.githubusercontent.com/92604480/172025142-b42f2d62-1540-4bc6-bf01-91b85adfb8f8.png)
## Calendar
A user can view all of the tasks on a calendar.

   * Clicking "My Calendar" with display a calander and users can view tasks by Month, Day, Year

![Month](https://user-images.githubusercontent.com/92604480/172027660-9125fcf6-e637-4b4d-a90e-795d55f3176b.png)</br>
![Day](https://user-images.githubusercontent.com/92604480/172027671-974c72c5-5946-416a-9e49-e4bae833c44a.png)</br>
![Year](https://user-images.githubusercontent.com/92604480/172027686-789e83c3-3341-44db-b351-32a2bb0f900c.png)
## Comments on tasks
Whether the user is on the homepage or on "My Tasks" page, they are able to post, edit and delete a comment on a task

   * Edit and Delete button will only display to the user that has posted that comment

![Task-Comment](https://user-images.githubusercontent.com/92604480/172023888-ef08abe7-f9e9-4149-a05e-1048fb0e5885.png)</br>
![Comments](https://user-images.githubusercontent.com/92604480/172027563-694b2444-5362-4468-89c6-464118ba692c.png)</br>
![iEdit-Delete-Comment](https://user-images.githubusercontent.com/92604480/172027624-fdbda12d-f59f-4741-b55b-a5fd39c82741.png)


## Page Not Found
Accessing a path that does not exist will render a page not found and redirects the user to the homepage automatically after 3 seconds
![404-Page](https://user-images.githubusercontent.com/92604480/172025096-bbe3b258-08f9-4049-8646-cb42e6d939c5.png)




[Back to top](#top)
