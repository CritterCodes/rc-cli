#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

// Function to capitalize the first letter of a string
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Function to create a new component with a template
const generateComponent = (componentName) => {
    const componentDir = path.join('src', 'components', componentName);
    const jsFile = path.join(componentDir, `${componentName}.component.js`);
    const cssFile = path.join(componentDir, `${componentName}.component.css`);

    // Create component directory
    fs.mkdirSync(componentDir, { recursive: true });

    // Create JS file with a React component template
    const jsContent = `
import React from 'react';
import './${componentName}.component.css';

const ${capitalize(componentName)} = () => {
    return (
        <div className="${componentName}">
            <h1>${capitalize(componentName)} Component</h1>
        </div>
    );
};

export default ${capitalize(componentName)};
    `;
    fs.writeFileSync(jsFile, jsContent.trim());

    // Create an empty CSS file
    fs.writeFileSync(cssFile, '');

    console.log(`Component ${componentName} created successfully!`);
};

// Function to create a new API file
const generateApi = (apiName) => {
    const apiDir = path.join('src', 'apis');
    const apiFile = path.join(apiDir, `${apiName}.api.js`);

    // Create directory if not exists
    fs.mkdirSync(apiDir, { recursive: true });

    // Create API JS file with a template
    const apiContent = `
import axios from 'axios';

const ${capitalize(apiName)}Api = async () => {
    try {
        const response = await axios.get('/api/${apiName}');
        return response.data;
    } catch (error) {
        console.error('Error fetching ${apiName}:', error);
        throw error;
    }
};

export default ${capitalize(apiName)}Api;
    `;
    fs.writeFileSync(apiFile, apiContent.trim());

    console.log(`API ${apiName} created successfully!`);
};

// Function to create a new util file
const generateUtil = (utilName) => {
    const utilDir = path.join('src', 'utils');
    const utilFile = path.join(utilDir, `${utilName}.util.js`);

    // Create directory if not exists
    fs.mkdirSync(utilDir, { recursive: true });

    // Create util JS file with a template
    const utilContent = `
// Utility function for ${utilName}

export const ${capitalize(utilName)}Util = () => {
    // Add utility logic here
};
    `;
    fs.writeFileSync(utilFile, utilContent.trim());

    console.log(`Util ${utilName} created successfully!`);
};

// Function to create a new context file
const generateContext = (contextName) => {
    const contextDir = path.join('src', 'context');
    const contextFile = path.join(contextDir, `${contextName}.context.js`);

    // Create directory if not exists
    fs.mkdirSync(contextDir, { recursive: true });

    // Create context JS file with a template
    const contextContent = `
import React, { createContext, useContext, useState } from 'react';

const ${capitalize(contextName)}Context = createContext();

export const use${capitalize(contextName)} = () => useContext(${capitalize(contextName)}Context);

export const ${capitalize(contextName)}Provider = ({ children }) => {
    const [state, setState] = useState(null);

    return (
        <${capitalize(contextName)}Context.Provider value={[state, setState]}>
            {children}
        </${capitalize(contextName)}Context.Provider>
    );
};
    `;
    fs.writeFileSync(contextFile, contextContent.trim());

    console.log(`Context ${contextName} created successfully!`);
};

// Main script logic
const args = process.argv.slice(2);

if (args[0] === 'generate' || args[0] === 'g') {
    const type = args[1];
    const name = args[2];

    if (!name) {
        console.error('Please provide a name.');
        process.exit(1);
    }

    switch (type) {
        case 'component':
        case 'c':
            generateComponent(name);
            break;
        case 'api':
        case 'a':
            generateApi(name);
            break;
        case 'util':
        case 'u':
            generateUtil(name);
            break;
        case 'context':
        case 'ctx':
            generateContext(name);
            break;
        default:
            console.error('Unknown generate command. Use "component", "api", "util", or "context".');
            process.exit(1);
    }
} else {
    console.error('Unknown command. Use "generate" or "g".');
    process.exit(1);
}
