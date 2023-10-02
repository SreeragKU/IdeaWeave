import { ThemeProvider } from '../context/theme';
import TopNav from '../components/TopNav';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../context/auth';

export default function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <AuthProvider>
                <TopNav />
                <Toaster />
                <Component {...pageProps} />
            </AuthProvider>
        </ThemeProvider>
    );
}
