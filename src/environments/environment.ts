// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
}
export class GitHttpService {
  
  username:string;
  apiUrl:'https://api.github.com/users/'
  client_id = '5b9b9759cc8b0d8c106e'
  client_secret = 'fa73efb1deb0eed34d9f0996dca5d3b3b50d4169'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
