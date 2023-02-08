const forbiddenMessage = 'Usage of className is deprecated, please use class instead';

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'Forbid usage of className',
            category: 'Possible Errors',
            recommended: true,

        }
    },
    create: (context) => {
        return {
            JSXAttribute: (node) => {
                if (node.name.name === 'className') {
                    context.report({
                        node,
                        message: forbiddenMessage
                    });
                }
            }
        };
    }
}