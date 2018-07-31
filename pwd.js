// Code for Present Working Directory

const pwd = function() {
  process.stdout.write(process.cwd());
  process.stdout.write('\n\nprompt >');
};

module.exports = pwd;
