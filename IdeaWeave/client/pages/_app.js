import { ThemeProvider } from '../context/theme';
import TopNav from '../components/TopNav';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../context/auth';
import { SessionProvider } from "../context/session";

export default function MyApp({ Component, pageProps }) {
    return (
        <SessionProvider>
            <ThemeProvider>
                <AuthProvider>
                    <TopNav />
                    <Toaster />
                    <Component {...pageProps} />
                </AuthProvider>
            </ThemeProvider>
        </SessionProvider>
    );
}
