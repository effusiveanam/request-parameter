'use strict';

module.exports = function(app) {
  const fetch = require('node-fetch');
  var todoList = require('../controllers/todoListController');
  //const https = require('https');
  
  var url ='https://localhost:8080/';
  var headers = {
  "Content-Type": "application/json"
   }

const get_data = async url => {
  try {
   const response = await fetch(url, { method: 'GET', headers: headers})
  const json = await response.json();
   console.log(json);
   let state_parameter = response.state_parameter; // have to write fetch the value logic
   let decodedData = Buffer.from(state_parameter, 'base64').toString('ascii');
   console.log(decodedData); 
  } catch (error){
    console.log("error");
  }
};
  
  get_data(url);

  // todoList Routes
/*  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);*/
};
