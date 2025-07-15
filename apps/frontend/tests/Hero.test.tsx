import { render, screen } from '@testing-library/react';
import Hero from '../src/components/Hero';
import i18n from '../src/i18n';
import en from '../src/locales/en/translation.json';
import fr from '../src/locales/fr/translation.json';

describe('Hero component', () => {
  it('renders English translation', async () => {
    await i18n.changeLanguage('en');
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(en.hero.title);
    expect(screen.getByText(en.hero.subtitle)).toBeInTheDocument();
  });

  it('renders French translation', async () => {
    await i18n.changeLanguage('fr');
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(fr.hero.title);
    expect(screen.getByText(fr.hero.subtitle)).toBeInTheDocument();
  });
});
