// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0, 1]

// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses ?



//      Example 1:

// Input: numCourses = 2, prerequisites = [[1, 0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.
//      Example 2:

// Input: numCourses = 2, prerequisites = [[1, 0], [0, 1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should
// also have finished course 1. So it is impossible.

var canFinish = function (numCourses, prerequisites) {
     let graph = Array.from(new Array(numCourses), () => [])
     let dependencies = new Array(numCourses).fill(0)
     let counter = 0

     for (let [course, prereq] of prerequisites) {
          // point prereq to course 
          graph[prereq].push(course)
          dependencies[course]++
     }

     let queue = []
     // search for any courses without prereqs/dependencies
     dependencies.forEach((course, indexOfCourse) => {
          if (course === 0) {
               queue.push(indexOfCourse)
          }
     })

     // BFS
     while (queue.length > 0) {
          let indexOfCourse = queue.shift()    //index of course
          let satisfiesCourses = graph[indexOfCourse]
          counter++

          satisfiesCourses.forEach((neighbor) => {
               // decrement the course dependency
               dependencies[neighbor]--
               if (dependencies[neighbor] === 0) {
                    queue.push(neighbor) // add course number to the queue
               }
          })
     }

     return counter === numCourses ? true : false

};


/*
let counter = 0
    // numCourses = 2
    // prerequisites = [ [0,1], [0,2], [1,3], [2,3] ]
    let graph = Array.from(new Array(numCourses), () => [])
    let ranks = new Array(numCourses).fill(0)

    for(let [course, prereq] of prerequisites){
        // so at index(representing node) - it will contain neighbors(what it is pointing at)
        graph[prereq].push(course)
        ranks[course]++    // at rank index(course) represents how many dependencies (nodes pointing at this node)
    }

    let queue = []

    // ranks.forEach((course, index) => if(!course) queue.push(index))
    for(let i = 0; i<ranks.length; i++){
        if(ranks[i] === 0){
            queue.push(i)     // i represents course name
        //pushing graph[i] will push all of the edges into the queue
        }
    }



    // BFS TRAVERSAL
    while(queue.length > 0){
        let currentCourse = queue.shift() // .shift() takes out first item
        let coursePrereqs = graph[currentCourse] //3 -> [1,2]
        counter++

        coursePrereqs.forEach((neighbor) =>{
            ranks[neighbor]--
            if(ranks[neighbor] === 0){
                queue.push(neighbor)
            }
        })

    }


    return counter === numCourses ? true : false

*/