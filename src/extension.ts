import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
   // The "activate" function is called when your extension is first activated.
   // Since syntax highlighting is handled by the grammar defined in your package.json,
   // this function can remain empty for now.
   console.log('Congratulations, your extension "sigil-language-support" is now active!');
}

export function deactivate() {
   // This function is called when your extension is deactivated.
}