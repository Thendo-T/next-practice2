import { UserProvider } from '@auth0/nextjs-auth0';
import { handleAuth } from '@auth0/nextjs-auth0';

function MyApp({Component, pageProps}) {
    return 
    (<UserProvider>
        <Component {... pageProps} />
        </UserProvider>
    )
}

export default handleAuth();
