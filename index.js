var CapTest = new RegExp('[A-Z]');

module.exports = {
  rules: {
    "snake-case": function (context) {
      return {
        "CallExpression": function(call) {
          if (
            call.callee.name !== "require" || 
            call.callee.type !== "Identifier"
          ) return;

          if (CapTest.test(call.arguments[0].value)) {
            context.report({
              message: 'Snake case required for module names',
              node: call.callee
            });
          }
        },
        "ImportDeclaration": function(importDec) {
          if (CapTest.test(importDec.source.value)) {
            context.report({
              message: 'Snake case required for module names',
              node: importDec
            });
          }
        }
      };
    }
  }
};
