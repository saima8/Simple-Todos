import {check} from 'meteor/check'
import {TasksCollection} from '../db/TasksCollection'

Meteor.methods({
    'tasks.insert'(text){
        check(text, String);

        if(!this.userID){
            throw new Meteor.Error ('Not authorized');

        }
        TasksCollection.insert({
            text,
            createdAt: new Date,
            userID: this.userID,
        })
    },
    'tasks.remove'(taskId){
        check(taskId, String);

        if (!this.userID){
            throw new Meteor.Error('Not authorized.');
        }
        TasksCollection.remove(taskId);

    },
    'tasks.setIsChecked'(taskId, isChecked) {
        check(taskId, String);
        check(isChecked, Boolean);
     
        if (!this.userId) {
          throw new Meteor.Error('Not authorized.');
        }
     
        TasksCollection.update(taskId, {
          $set: {
            isChecked
          }
        });
      }
})