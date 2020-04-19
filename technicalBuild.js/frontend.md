Creating a React App 

1. create directory first 
2. cd into directory 

3. create-react-app app . 
4. npm/yarn install axios 

5. delete everything in App.js return (except the parent div)
6. import axios and {useEffect, useState}

*** APP.JS ***
7. set up initial state 
8. set up useEffect 
     - put axios.get() api data inside 

9. start app -- test axios response 
10. grab API and update state via useState 
11. map out the state to cards/containers 

*** make sure CORS is installed on server ***
- Set up Cors in axios link (if we aren’t in control of the server) 
prepend to api url: https://cors-anywhere.herokuapp.com/


12. build forms 
     - name 
     - type
     - value = {stateName.keyName}
     - onChange = {handleChanges}
     - onSubmit 
