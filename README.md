# MilesNation

MilesNation is a premium running platform for marathons, virtual challenges, verified leaderboard results, participant dashboards, and administrator workflows. The project is structured as a Vite + React + TypeScript frontend with Firebase-ready configuration and a secure server-side integration pattern for authentication, storage, and payments.

## Project status

This repository contains the application foundation, UI, routing, and configuration scaffolding. Because the workspace environment is blocking dependency installation in the terminal, real package installs and automated build verification have not yet been executed here. The remaining setup steps are documented clearly below.

## Required environment variables

Copy `.env.example` to `.env` and fill in your Firebase and Razorpay values.

```bash
cp .env.example .env
```

### Frontend Firebase values

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID`

### Frontend optional site values

- `VITE_CONTACT_EMAIL`
- `VITE_CONTACT_PHONE`
- `VITE_SOCIAL_INSTAGRAM`
- `VITE_SOCIAL_X`
- `VITE_SOCIAL_YOUTUBE`

> Do not store secret keys or service-account JSON in the client bundle. Use Firebase Functions or a secure backend for webhook validation and payment verification.

## Firebase setup

1. Create a Firebase project.
2. Enable Authentication, Firestore, Storage, and Hosting.
3. Add your web app config to `.env`.
4. Deploy `firestore.rules` and `storage.rules` using Firebase CLI.
5. Add the Stripe-equivalent server-side payment architecture for Razorpay in Firebase Functions.

## Razorpay setup

1. Create a Razorpay account and get test keys.
2. Store the secret key and webhook secret in Firebase Functions environment variables or another secure server environment.
3. Use trusted backend logic to create orders, verify signatures, and update registration state.
4. Use test mode until the integration is validated in a non-production project.

## Local development

```bash
npm install
npm run dev
```

## Testing

```bash
npm run test
```

## Production build

```bash
npm run build
```

## Firebase security and rules

Project files include:

- `firestore.rules`
- `storage.rules`
- `firestore.indexes.json`
- `firebase.json`

These rules intentionally avoid permissive write access and require administrator authorization for privileged operations.

## Notes

- Real credentials were not provided in this workspace.
- The platform includes a proper architecture for auth, registration, leaderboards, payments, and admin access, but live Firebase and Razorpay credentials are required for end-to-end production behavior.
