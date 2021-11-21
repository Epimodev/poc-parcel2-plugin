This project is just a project example used to reproduce an error I've got by trying to run a parcel2 plugin.  

It follow instructions from parcel2 [documention](https://parceljs.org/features/plugins/#the-link%3A-protocol) to run a local plugin.
At the moment, the command `yarn dev` fail with the following error:
```
  > 16 |     "parcel-transformer-svg-sprite": "link:./parcel-transformer-svg-sprite",
  >    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Defined here, but not installed
```
