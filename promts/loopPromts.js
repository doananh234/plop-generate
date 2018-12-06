var _ = require('lodash');
var util = require('util');
var inquirer = require('inquirer');

var Base = require('inquirer/lib/prompts/base');

module.exports = Prompt;

function Prompt(question, rl, answers) {
  // Set defaults prompt options
  this.opt = _.defaults(_.clone(question), {
    validate: function() {
      return true;
    },
    filter: function(val) {
      return val;
    },
    when: function() {
      return true;
    }
  });
  this.responses = [];
  return this;
}
util.inherits(Prompt, Base);

Prompt.prototype.askForLoop = function() {
  inquirer
    .prompt({
      default: '',
      type: 'input',
      name: 'answer',
      message: this.opt.message || 'Would you like to loop ?'
    })
    .then(
      function(result) {
        console.log('result.answer', result.answer);
        if (result.answer !== '') {
          this.responses.push(result.answer);
          this.askForLoop();
        } else {
          this.done(this.responses);
        }
      }.bind(this)
    );
};

Prompt.prototype._run = function(cb) {
  this.done = cb;
  this.askForLoop();
  return this;
};
