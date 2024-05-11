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
          <Button to="/intro">Learn more</Button>
          <Button
            to="https://github.com/sussy-code/skool-project"
            type="secondary"
          >
            See source code
          </Button>
        </Hero.Actions>
      </Hero>
      <Frame plain={true}>
        <CardGrid>
          <Card icon="mdi:sprout" title="All Natural">
            Chill Pill exclusively uses exclusively natural and ethically
            obtained ingredients.
          </Card>
          <Card icon="mdi:shield-home" title="USA Based">
            We brainstorm, produce and live in the United States fostering
            homegrown quality and supporting our nation.
          </Card>
          <Card icon="mdi:checkbox-marked" title="FDA Approved">
            Our dog chews are FDA approved ensuring guaranteed trust and
            quality.
          </Card>
        </CardGrid>
      </Frame>
    </GuiderLayout>
  );
}
