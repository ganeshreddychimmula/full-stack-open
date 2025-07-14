# Exercise 0.6 - Fullstackopen
## Challenge
Create a diagram depicting the situation where the user creates a new note using the single-page version of the app.

## Chain of events when user enters the data
participants: User, browser, server
- user enters some data "komastas" and submits the form
note at browser: event handler function is called. 1. Its stops browser reload, 2. A new data is pushed to the data list  is and list is re-rendered (redrawnotes())
- Browser sends POST request to https://studies.cs.helsinki.fi/exampleapp/new_note_spa with {content: "komastas", date: "2025-07-14T19:05:06.506Z"} server
note at server: updates server its data
- Server sends new json file to browser letting it know that it updated the data
notes at server: sends 201 reponse meaning data is created or updated

### chain of events after entering input

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Enter "komastas" & submit form
    Note right of Browser: Event handler triggered<br/>1. Prevents reload<br/>2. Pushes new data (komastas) to list<br/>3. Re-renders list (redrawnotes())

    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa<br/>{content: "komastas", date: "2025-07-14T19:05:06.506Z"}
    Note right of Server: Updates its data

    Server-->>Browser: Returns updated JSON data
    Note right of Server: Sends 201 response (Created/Updated)
```

## All events 
```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    Server-->>Browser: HTML document

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server-->>Browser: CSS file

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    Server-->>Browser: JavaScript file

    Note right of Browser: Browser begins executing JavaScript file
    Note right of Browser: window.omload fires and adds event listener to form submit

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server-->>Browser: data.json file<br/>[{content: "Wow", date: "..."},...]

    Note right of Browser: After response (onStateChange == 4),<br/>browser parses JSON and renders list on screen(redraw notes)

        User->>Browser: Enter "komastas" & submit form
    Note right of Browser: Event handler triggered<br/>1. Prevents reload<br/>2. Pushes new data (komastas) to list<br/>3. Re-renders list (redrawnotes())

    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa<br/>{content: "komastas", date: "2025-07-14T19:05:06.506Z"}
    Note right of Server: Updates its data

    Server-->>Browser: Returns updated JSON data
    Note right of Server: Sends 201 response (Created/Updated)
```