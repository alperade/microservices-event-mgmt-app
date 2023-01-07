<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">ConferenceGo</h3>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#deployment-resources">Deployment Resources</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot][product-screenshot]

An API-based SPA to create and manage events using Django REST and React frameworks with Postgres.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* Django
* ReactJS
* PostgreSQL
* Bootstrap
* RabbitMQ
* Docker

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

* Run Docker
* Create Docker Volume
  ```sh
  docker volume create beta-data
  ```
* Build Docker Images
  ```sh
  docker compose build
  ```
* Run Docker Containers
  ```sh
  docker compose up
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/alperade/microservices-event-mgmt-app.git
   ```
2. Sign up to Open Weather and Pexel and get API keys

3. Create an `.env` file
   ```py
   PEXELS_API_KEY = 'ENTER PEXELS API KEY HERE'
   OPEN_WEATHER_API_KEY = 'ENTER OPEN WEATHER API KEY HERE'
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- DEPLOYMENT RESOURCES -->
## Deployment Resources

* https://learn.microsoft.com/en-us/azure/app-service/tutorial-custom-container?tabs=azure-cli&pivots=container-linux
* Specify --platform=linux/amd64 each time you need to build or run an amd64 image/container.
* https://stackoverflow.com/questions/60163440/docker-fails-to-pull-the-image-from-within-azure-app-service

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [ ] Create user model, add user authorization and authentication
- [ ] Update Readme Roadmap

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Alper Ademoglu: alperademoglu@gmail.com - [Linkedin](https://www.linkedin.com/in/alper-ademoglu/)

Project Link: [https://github.com/alperade/microservices-event-mgmt-app](https://github.com/alperade/microservices-event-mgmt-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: /screenshot.png
