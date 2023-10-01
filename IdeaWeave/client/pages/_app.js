import { ThemeProvider } from '../context/theme';
import TopNav from '../components/TopNav';

export default function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <TopNav />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
