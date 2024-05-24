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
        DYNAMO_API: "http://localhost:3001/dxf-query?dxfNumber=",
        DXF_REGISTRATION_REDIRECT: "http://localhost:3000/callback",
        LANDING_PAGE_REDIRECT: "http://localhost:3000/callback",
        FETCH_MIRTH_DATA: "http://127.0.0.1:3001/mirth-logs",
        FETCH_SMILE_DATA: "http://127.0.0.1:3001/smile-query",
        ORIGIN: "http://localhost:3000"
    }
};

const requiredEnvVars = [
    'COGNITO_ENDPOINT',
    'DYNAMO_API',
    'DXF_REGISTRATION_REDIRECT',
    'DXF_REGISTRATION_SIGN_UP',
    'LANDING_PAGE_REDIRECT',
    'LANDING_PAGE_SIGN_IN',
    'FETCH_MIRTH_DATA',
    'FETCH_SMILE_DATA',
    'ENCOUNTER_CDR_API',
    'MIRTH_API',
    'PRACTITIONER_CDR_API',
    'SMILE_API',
    'ORIGIN'
];

// Automatically initialize environment variables when the module is loaded
(function initializeEnvVars() {
    requiredEnvVars.forEach(varName => {
        const envVarName = `ENV_${varName}`;
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
