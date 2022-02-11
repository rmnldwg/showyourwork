// Imports
const artifact = require("@actions/artifact");

// Exports
module.exports = { publishLogs };


/**
 * Publish an artifact containing all the showyourwork logs and temp files.
 *
 */
async function publishLogs() {
    // Upload an artifact
    const GITHUB_WORKSPACE = shell.env["GITHUB_WORKSPACE"];
    const artifactClient = artifact.create();
    const uploadResponse = await artifactClient.uploadArtifact(
        "showyourwork-logs", 
        [".showyourwork"], 
        GITHUB_WORKSPACE, 
        {
            continueOnError: false
        }
    );
}
