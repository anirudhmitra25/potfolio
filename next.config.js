/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

}

module.exports = {
  env:{
REACT_APP_FIREBASE_API_KEY: "AIzaSyBRHZZKcEUC4H7kYo5WF1l7uTxnlnXMiEI",
REACT_APP_FIREBASE_AUTH_DOMAIN: "portfolio-78227.firebaseapp.com",
REACT_APP_FIREBASE_PROJECT_ID:"portfolio-78227",
REACT_APP_FIREBASE_STORAGE_BUCKET:"portfolio-78227.appspot.com",
REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"558296696148",
REACT_APP_FIREBASE_MESSAGING_APP_ID:"1:558296696148:web:d85cc1a307a313f0dc34c1",
REACT_APP_FIREBASE_MESSAGING_MEASUREMENT_ID:"G-57W0YHYP3H",
  },
  nextConfig
}
