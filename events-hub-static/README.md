## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Set Environment Variables

The application uses environment variables to store OIDC configurations. Follow the steps below to set up the environment variables:

1. Create a new file named `.env.local` in the root directory of the project.

2. Open the `.env.local` file and define the following environment variables with your OIDC configurations:

```dotenv
NEXT_PUBLIC_OIDC_AUTHORITY="https://api.asgardeo.io/t/sume/oauth2/token"
NEXT_PUBLIC_OIDC_CLIENT_ID="Your_OIDC_Client_ID"
NEXT_PUBLIC_OIDC_REDIRECT_URI="http://localhost:3000"
NEXT_PUBLIC_OIDC_RESPONSE_TYPE="code"
NEXT_PUBLIC_OIDC_SCOPE="openid profile email"
NEXT_PUBLIC_OIDC_POST_LOGOUT_REDIRECT_URI="http://localhost:3000"
NEXT_PUBLIC_OIDC_SILENT_REDIRECT_URI="http://localhost:3000"
```

Replace `Your_OIDC_Client_ID` with your actual OIDC client ID provided by your OIDC provider.

### Run the Application

To start the development server and run the application, use the following command:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`. Open your browser and navigate to this URL to view the application.

