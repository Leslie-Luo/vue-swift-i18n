const { registerCommand, msg } = require('../utils/vs');
const { openFileByPath } = require('../utils');
const resolveEditor = require('../lib/resolveEditor');

module.exports = context => {
    context.subscriptions.push(
        registerCommand('extension.vueSwiftI18n.swiftI18n', uri => {
            if (uri && uri.path) {
                openFileByPath(uri.path).then(editor => {
                    if (
                        editor.document.languageId === 'vue' ||
                        editor.document.languageId === 'javascript'
                    ) {
                        resolveEditor(editor);
                    }
                });
            } else {
                msg.info(uri);
            }
        })
    );
};
