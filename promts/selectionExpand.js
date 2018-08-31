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
  var ui = inquirer
    .prompt({
      default: true,
      type: 'confirm',
      name: 'loop',
      message: this.opt.message || 'Would you like to loop ?'
    })
    .then(
      function(result) {
        if (result.loop) {
          this.askNestedQuestion();
        } else {
          this.done(this.responses);
        }
      }.bind(this)
    );
};

Prompt.prototype.askLoopForChild = function(result) {
  var ui = inquirer
    .prompt({
      default: true,
      type: 'confirm',
      name: 'loop',
      message: this.opt.message || 'Would you like to loop ?'
    })
    .then(
      function(result2) {
        if (result2.loop) {
          this.askNestedQuestionForChild(result);
        } else {
          this.responses.push(result);
          this.askNestedQuestion();
          console.log(
            '+++++++++++++++++++ End Input child props++++++++++++++++++++'
          );
        }
      }.bind(this)
    );
};

Prompt.prototype.askNestedQuestion = function() {
  inquirer.prompt(this.opt.prompts).then(
    function(result) {
      if (result.type === 'object') {
        result.childs = [];
        this.index = 0;
        this.askNestedQuestionForChild(result, this.index);
        return;
      }
      this.responses.push(result);
      this.askForLoop();
    }.bind(this)
  );
};

Prompt.prototype.askNestedQuestionForChild = function(result) {
  inquirer.prompt(this.opt.prompts).then(
    function(result1) {
      result.childs.push(result1);
      this.askLoopForChild(result);
    }.bind(this)
  );
};

Prompt.prototype._run = function(cb) {
  this.done = cb;
  this.askForLoop();
  return this;
};
