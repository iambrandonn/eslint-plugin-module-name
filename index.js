var CapTest = new RegExp('[A-Z]');

module.exports = {
  rules: {
    "param-case": function (context) {
      return {
        "CallExpression": function(call) {
          if (
            call.callee.name !== "require" || 
            call.callee.type !== "Identifier"
          ) return;

          if (CapTest.test(call.arguments[0].value)) {
            context.report({
              message: 'Param case required for module names: ' + call.arguments[0].value,
              node: call.callee
            });
          }
        },
        "ImportDeclaration": function(importDec) {
          if (CapTest.test(importDec.source.value)) {
            context.report({
              message: 'Param case required for module names: ' + importDec.source.value,
              node: importDec
            });
          }
        }
      };
    }
  }
};
