### Setup

Requires node, npm and gulp

To install gulp:

```
$ npm install -g gulp
```

Install dependencies:

```
$ npm install
```

Copy app-keys-example.json to app-keys.json and fill in with your credentials:

```
$ cp app-keys-example.json app-keys.json
```

```
{
  "google_maps_api_browser_key": "YOUR_API_KEY"
}
```


### Running App

```
gulp && gulp watch
```
