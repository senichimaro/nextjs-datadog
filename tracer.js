// This line must come before importing any instrumented module.
const tracer = require('dd-trace').init()
// DataDog Initialization
import { datadogRum } from '@datadog/browser-rum';
datadogRum.init({
    applicationId: 'e35adaad-c8b4-4e9b-9888-ca125e5361cc',
    clientToken: 'pub1b9033785ffb0f362b8f99f8ea5eb545',
    site: 'datadoghq.eu',
    service:'nextjs-datadog',
    env:'acceptance',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel:'mask-user-input'
}); 
export default datadogRum.startSessionReplayRecording();