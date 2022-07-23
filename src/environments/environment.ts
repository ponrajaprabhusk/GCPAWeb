// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: { 
    apiKey: "AIzaSyD-QS1h-zl67_scAtDuQz2LYsPdBEK1YHM",
    authDomain: "gcpa1203.firebaseapp.com",
    projectId: "gcpa1203",
    storageBucket: "gcpa1203.appspot.com",
    messagingSenderId: "710753657613",
    appId: "1:710753657613:web:d5a5dc4e97291218188644",
    measurementId: "G-0ZE5XHJ9P2"
  },
  useEmulators: true,
  recaptcha: {
    siteKey: '6LfhqpQfAAAAAMojn2xDl8B3GJ56WtdZf9Vbaq9m',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
