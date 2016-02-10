var CapTest = new RegExp('[A-Z]');

function fixCase(str) {
  return str.replace(/\/[A-Z]+/g, function(match) {
    return match.toLowerCase();
  }).replace(/[A-Z]+/g, function(match) {
    return '-' + match.toLowerCase();
  });
}

module.exports = {
  rules: {
    "kebab-case": function (context) {
      return {
        "CallExpression": function(call) {
          if (
            call.callee.name !== "require" || 
            call.callee.type !== "Identifier"
          ) return;

          if (CapTest.test(call.arguments[0].value)) {
            context.report({
              message: 'Kebab case required for module names: ' + call.arguments[0].value,
              node: call.callee,
              fix: function(fixer) {
                return fixer.replaceText(
                  call.arguments[0],
                  fixCase(call.arguments[0].raw)
                );
              }
            });
          }
        },
        "ImportDeclaration": function(importDec) {
          if (CapTest.test(importDec.source.value)) {
            context.report({
              message: 'Kebab case required for module names: ' + importDec.source.value,
              node: importDec,
              fix: function(fixer) {
                return fixer.replaceText(
                  importDec.source,
                  fixCase(importDec.source.raw)
                );
              }
            });
          }
        }
      };
    }
  }
};
