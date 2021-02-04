import { Meteor } from 'meteor/meteor';
import {Accounts} from 'meteor/account-base'
import {TasksCollection} from '../imports/api/TasksCollection'
import '/imports/api/tasksMethods';
import '/imports/api/tasksPublications';

const insertTask = tasktext => TasksCollection.insert({text: tasktext});



const insertTask = (tasktext, user) => TasksCollection.insert ({
  text: tasktext,
  userId: user._id,
  createdAt: new Date (),
});

const SEED_USERNAME = 'tithy';
const SEED_PASSWORD = 'password';


Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)){
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  const user = Accounts.findUserByUsername(SEED_USERNAME)

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