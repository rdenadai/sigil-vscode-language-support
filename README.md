# Sigil Language Support for Visual Studio Code

This extension provides syntax highlighting and basic language support for the [Sigil](https://github.com/loophole-software/sigil) programming language (`.sl` files) in Visual Studio Code.

![vscode plugin image](https://github.com/rdenadai/sigil-vscode-language-support/blob/38ea4b1a2b33e6ef444019ef06e5b0d52e5e0d78/static/image.png?raw=true)

## Features

- **Syntax Highlighting**: Colorizes keywords, comments, strings, numbers, and more to improve code readability.
- **Bracket Matching**: Highlights matching brackets `()`, `[]`, `{}`.
- **Comment Toggling**: Use `Ctrl+/` (or `Cmd+/`) to toggle line comments (`#`).
- **Auto-Closing Pairs**: Automatically adds closing brackets, quotes, and backticks.

## Installation

1. Open **Visual Studio Code**.
2. Launch the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`).
3. Type `Extensions: Install Extensions` and press Enter.
4. Search for `Sigil Language Support`.
5. Click **Install** to install it.
6. Reload VS Code if prompted.

## Usage

The extension will automatically be activated when you open a file with the `.sl` extension.

### Examples

Here is a preview of the syntax highlighting provided by this extension.

#### Basic Syntax

```sigil
# This is a single-line comment
const PI = 3.14159
let message: string = 'Hello, World!'
let interpolated: string = `Your value is {PI}`

# Function definition
fn greet(name: string) -> string:
    return `Hello, {name}!`
```

#### Control Flow and Classes

```sigil
class Calculator:
    static pub fn add(a, b):
        return a + b

let result = Calculator.add(10, 20)

if result > 25:
    # Loop ten times
    loop 10:
        print('Result is greater than 25')
else:
    print('Result is not greater than 25')
}
```

## Contributing

Found a bug or have a suggestion? Please open an issue on the [GitHub repository](https://github.com/loophole-software/sigil-vscode-language-support).

Sigil Programming Language [GitHub repository](https://github.com/loophole-software/sigil).

## License

This extension is licensed under the MIT License.
