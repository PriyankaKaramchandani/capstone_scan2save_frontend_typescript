# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

# Capstone Project: Scan2Save

This project is a mobile application designed for emergency purposes. Users can create a user and medical profile, and a QR code will be generated. This QR code can be downloaded and saved for emergency situations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Get started
## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/scan2save.git
    cd scan2save
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

## Usage
In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).


## API Endpoints

### Base URL
https://capstone-scan2save-backend.onrender.com/api

## Components

### HomeScreen
The `HomeScreen` component is the main entry point of the application.

### Login
The [Login](http://_vscodecontentref_/6) component allows users to log in to their account.

### SignUp
The `SignUp` component allows users to sign up for a new account.

### UserProfileScreen
The `UserProfileScreen` component displays the user's profile information.

### successSignUp
The `successSignUp` component displays a success message and details on app after a user has successfully signed up.

### Form
The [Form](http://_vscodecontentref_/10) component allows users to create their user and medical profile.

### GenerateQrCode
The `GenerateQrCode` component generates a QR code based on the user's profile information.

### ScanQrCode
The [ScanQrCode](http://_vscodecontentref_/11) component allows users to scan a QR code.

### ScanningPage
The [ScanningPage](http://_vscodecontentref_/12) component displays the result of scanning a QR code.



## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.


## Expo: Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.


## Join the Expo community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
