import { ThemeProvider } from '../context/theme';
import TopNav from '../components/TopNav';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../context/auth';
import { PostProvider } from '../context/post';
import { MediaProvider } from '../context/media';

export default function MyApp({ Component, pageProps }) {
    return (
            <ThemeProvider>
                <AuthProvider>
                    <PostProvider>
                        <MediaProvider>
                            <TopNav />
                            <Toaster />
                            <Component {...pageProps} />
                        </MediaProvider>
                    </PostProvider>
                </AuthProvider>
            </ThemeProvider>
    );
}
