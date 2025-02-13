import '@mantine/core/styles.css';
import { MantineProvider, AppShell } from '@mantine/core';
import { theme } from './theme';
import { HomePage } from './pages/Home.page';
import { Footer } from './components/Footer/Footer';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <AppShell
        footer={{ 
          height: 34,
        }}
        padding="md"
      >
        <AppShell.Main >
          <HomePage />
        </AppShell.Main>
        <AppShell.Footer>
          <Footer />
        </AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}
