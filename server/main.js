import { Meteor } from 'meteor/meteor';

import {TasksCollection} from '../imports/api/TasksCollection'

const insertTask = tasktext => TasksCollection.insert({text: tasktext});

Meteor.startup(() => {
  if (TasksCollection.find().count() == 0){
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task'
    ].forEach(insertTask)
  }
});