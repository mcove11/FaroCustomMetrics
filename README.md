# FaroTesting

### To run

***Via Node**
```bash
npm install
node website.js
```
**Via Docker**

```bash
docker build . -t farotestapp
docker run -p 3001:3001 farotestapp

```

### To Configure: 

1. Update The URL and app-name to match your app in index.html. 
2. Optional: Update User Info object in main.js to whatever user information you'd like to see. By default it will generate generic values. 

To visualize the raw data outside of the FOE plugin: dashboard.json is included to be imported into Grafana.

### To Produce Metrics
1. Navigate to http://localhost:3001. 
2. Click Sign In
3. Add to cart multiple times. 
4. Refresh and repeat steps multiple times, in different order 

Instead of manually creating traffic you can run a small k6 browser test that will run 10 Virtual Users for 30 seconds: 

Install K6: https://k6.io/docs/get-started/installation/

```bash 
K6_BROWSER_ENABLED=true k6 run test.js
```


