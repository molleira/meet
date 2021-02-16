# meet

#### Project Description
meet is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

#### How to get the project running
Visit this [link to the project on gh-pages](https://molleira.github.io/meet/)

#### Project dependencies
* React

#### Which API the project uses
* React

#### User Stories
**01. Filter events by city**
</br>User Story: As a user, I should be able to filter events by city so that I can see a list of events that take place in that particular city.
* Scenario 1: When user hasn’t searched for a city show upcoming events from all cities.
  * **Given** user hasn’t searched for any city
  * **When** the user opens the app
  * **Then** the user should see a list of all upcoming events
* Scenario 2: Users should see a list of suggestions when they search for a city.
  * **Given** the the main page is open
  * **When** user starts typing in the city textbox
  * **Then** the user should see a list of cities (suggestions) that match what they’ve typed
* Scenario 3: User can select a city from the suggested list.
  * **Given** the user was typing “Berlin” in the city textbox
  * And the list of suggested cities is showing
  * **When** the user selects a copy (e.g. “Berlin, Germany”) from the list
  * **Then** their city should be changed to that city (I.e. “Berlin, Germany”)
  * And the list suggestions should disappear
  * And the user should receive a list of upcoming events in that city

**02. Show/hide an event’s details**
</br>User Story: As a user, I should be able to see and hide the details of an event so that I can see more os less information about that single event.
* Scenario 1: An event element is collapsed by default.
  * **Given** the main page is open
  * **When** the user opens the app
  * **Then** the user should see a list of upcoming events with their details hidden
* Scenario 2: User can expand an event to see its details.
  * **Given** the main page is open
  * **When** the user opens the app
  * **Then** the user should be able to expand an event to see its details
* Scenario 3: User can collapse an event to hide its details.
  * **Given** user expanded an event’s details
  * **When** the user clicks to hide details
  * **Then** the details of that event should be hidden

**03. Specify number of events**
</br>User Story: As a user, I should be able to specify a number of events I want to see so that I can see more or less events in the list.
* Scenario 1: When user hasn’t specified a number, 32 is the default number.
  * **Given** the main page is open
  * **When** the user opens the app
  * **Then** the user should see a list of 32 upcoming events by default
* Scenario 2: User can change the number of events they want to see.
  * **Given** the main page is open
  * **When** the selects how many events want to see
  * **Then** the user should be able to see that exact amount of events in the list

**04. Use the app when offline**
</br>User Story: As a user, I should be able to use the app offline so that I can see the upcoming events when not having an internet connection.
* Scenario 1: Show cached data when there’s no internet connection.
  * **Given** the user is offline
  * **When** the user opens the app
  * **Then** the user should see the information stored in the cache
* Scenario 2: Show error when user changes the settings (city, time range).
  * **Given** the user is offline
  * **When** the user changes the settings like city or time range
  * **Then** the user should see an error indicating that the information can’t be loaded

**05. Data visualization**
</br>User Story: As a user, I should be able to see a chart with data of the upcoming events so that I can see information visually.
* Scenario 1: Show a chart with the number of upcoming events in each city.
  * **Given** the main page is open
  * **When** the user scrolls through different cities
  * **Then** the user should see a chart showing information of upcoming events in each city

**06. Add an app shortcut to the home screen**
</br>User Story: As a user, I should be able to add an app shortcut to the home screen so that I can easily access the app.
