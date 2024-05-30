class EnvVarNotFoundError extends Error {
    constructor(varName) {
        super(`Environment variable ${varName} not found`);
        this.name = 'EnvVarNotFoundError';
    }
}

class UnknownEnvVarError extends Error {
    constructor(varName) {
        super(`Unknown environment variable ${varName} requested`);
        this.name = 'UnknownEnvVarError';
    }
}

const envVars = {};
let config = {
    throwError: true,
    defaultValues: {
        ORIGIN: "http://localhost:3000"
    }
};

const requiredEnvVars = [
    'ENCOUNTER_CDR_API',
    'MIRTH_API',
    'PRACTITIONER_CDR_API',
    'SMILE_API',
    'ORIGIN'
];

// Automatically initialize environment variables when the module is loaded
(function initializeEnvVars() {
    requiredEnvVars.forEach(varName => {
        const envVarName = `REACT_APP_${varName}`;
        if (process.env[envVarName]) {
            envVars[varName] = process.env[envVarName];
        } else if (config.defaultValues[varName] !== undefined) {
            envVars[varName] = config.defaultValues[varName];
        } else if (config.throwError) {
            throw new EnvVarNotFoundError(envVarName);
        }
    });
})();

// Function to get the URL from the cached environment variables
function getEnvURL(envVarName) {
    if (requiredEnvVars.includes(envVarName)) {
        return envVars[envVarName];
    } else {
        throw new UnknownEnvVarError(envVarName);
    }
}

module.exports = {
    getEnvURL,
    EnvVarNotFoundError,
    UnknownEnvVarError
};
