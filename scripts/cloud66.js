// Description:
//   Testing c66

const c66 = require('../lib/cloud66');

const STACKS = [
  { name: 'Test-1', id: '3f72cb41019679473f551231802f3a90' },
  { name: 'Test-2', id: '9ff756181884630cfc6206415a5eca12' },
  { name: 'Test-3', id: 'ac7c43369aceb4a52d5cad94f7baf4bf' },
  { name: 'Test-4', id: '198f011723502480b94e8c0785ebe728' },
  { name: 'Test-5', id: 'f2a96ed716b2880ae2b2c93e3a753215' },
  { name: 'Test-6', id: '91ac6f4c0c27511d562d79a64d158071' },
]

module.exports = function (robot) {
  robot.respond(/list test server branches/, async (res) => {
    for (const {name, id} of STACKS) {
      const branch = await c66.getDeployBranch(id);
      res.reply(`${name} \t ${branch}`)
    }
  });
}

