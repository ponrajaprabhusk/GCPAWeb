// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyArJwOw-uXdCnEA-kvJpV1tmcPQU9mSB6g",

    authDomain: "gcpaweb.firebaseapp.com",
  
    projectId: "gcpaweb",
  
    storageBucket: "gcpaweb.appspot.com",
  
    messagingSenderId: "899563581116",
  
    appId: "1:899563581116:web:cd9e50532c2a142e772ab9"

  },
  useEmulators: true,
  recaptcha: {
    siteKey: '6LfhqpQfAAAAAMojn2xDl8B3GJ56WtdZf9Vbaq9m',
  },
  endpoint : "https://gcpawards.com/blog/wp-json/wp/v2/posts/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.