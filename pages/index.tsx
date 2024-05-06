import {
  Button,
  Card,
  CardGrid,
  GuiderLayout,
  Hero,
  Frame,
} from '@neato/guider/client';
import logoUrl from '../public/logo-img.png';

export default function LandingPage() {
  return (
    <GuiderLayout meta={{ layout: 'page' }}>
      <Hero>
        <div style={{ paddingBottom: '0.7em' }}>
          <Frame>
            <img src={logoUrl.src} alt="Logo of sudo-flix" />
          </Frame>
        </div>
        <Hero.Title>Chill Pill</Hero.Title>
        <Hero.Subtitle>
          An all nature solution to overactive dogs. Makes them and you chill.
        </Hero.Subtitle>
        <Hero.Actions>
          <Button to="/intro">Get Started</Button>
          <Button
            to="https://github.com/sussy-code/skool-project"
            type="secondary"
          >
            See source code
          </Button>
        </Hero.Actions>
      </Hero>
    </GuiderLayout>
  );
}
