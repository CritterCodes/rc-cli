# RC CLI Tool

`rc` is a simple command-line tool that allows you to quickly generate React components, APIs, utility files, and context files with pre-defined templates. It helps streamline your React project development by creating the necessary boilerplate code for various types of files.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Global Installation

To install `rc` globally so that you can use it across all your projects:

```bash
npm install -g rc-cli-tool
```

### Local Installation

Alternatively, you can install it locally within your project:

```bash
npm install rc-cli-tool --save-dev
```

## Usage

After installation, you can use the rc command to generate components, APIs, utils, and context files.

#### Basic Command Structure

```bash
rc g <type> <name>
```

g or generate: The command to generate a file.

<type>: The type of file to generate. Can be one of component, api, util, or context.
<name>: The name of the component, API, util, or context you want to generate.

## Commands

### Generate a Component

```bash
rc g c <ComponentName>
```

This will create a new React component in src/components/<ComponentName>/.

ComponentName.component.js
ComponentName.component.css

### Generate an API File
```bash
rc g a <apiName>
```

This will create a new API file in src/apis/.

<apiName>.api.js

### Generate a Util File
```bash
rc g u <utilName>
```

This will create a new utility file in src/utils/.

<utilName>.util.js

### Generate a Context File

```bash
rc g ctx <contextName>
```

This will create a new context file in src/context/.

<contextName>.context.js

## Examples

### Create a New Component

```bash
rc g c Header
```

This will generate the following files:

```css
Copy code
src/
└── components/
    └── Header/
        ├── Header.component.js
        └── Header.component.css
```

### Create a New API File

```bash
rc g a users
```

This will generate the following file:

```css
src/
└── apis/
    └── users.api.js
```

### Create a New Utility File
```bash
rc g u formatDate
```

This will generate the following file:

```css
src/
└── utils/
    └── formatDate.util.js
```

### Create a New Context File

```bash
rc g ctx Auth
```

This will generate the following file:

```css
Copy code
src/
└── context/
    └── Auth.context.js
```

## Contributing
If you want to contribute to this project, feel free to submit issues or pull requests. All contributions are welcome!

## Fork the repository
Create your feature branch (git checkout -b feature/your-feature)
Commit your changes (git commit -am 'Add your feature')
Push to the branch (git push origin feature/your-feature)
Create a new Pull Request

## License
This project is licensed under the MIT License. See the LICENSE file for details.

# rc-cli
