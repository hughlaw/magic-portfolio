import { baseURL } from '@/app/resources';
import { newsletter, person } from '@/app/resources/content';
import { Mailchimp } from '@/components';
import GSAPContent from '@/components/experiments/gsap/GSAPContent';
import { Column, Heading } from '@/once-ui/components';
import { Meta, Schema } from '@/once-ui/modules';

export async function generateMetadata() {
  return Meta.generate({
    title: 'GSAP Animations',
    description:
      'Exploring advanced animations and transitions using GSAP (GreenSock Animation Platform)',
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent('GSAP Animations')}`,
    path: '/experiments/gsap',
  });
}

export default function GSAPExperiment() {
  function onClickBox() {
    return;
  }

  return (
    <Column maxWidth="s">
      <Schema
        as="experimentPosting"
        baseURL={baseURL}
        title="GSAP Animations"
        description="Exploring advanced animations and transitions using GSAP (GreenSock Animation Platform)"
        path="/experiments/gsap"
        image={`${baseURL}/og?title=${encodeURIComponent('GSAP Animations')}`}
        author={{
          name: person.name,
          url: `${baseURL}/experiments`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s">
        GSAP Animations
      </Heading>
      <Column flex={1} gap="64">
        <p>
          This experiment explores the capabilities of GSAP (GreenSock Animation
          Platform) for creating smooth, performant animations in React
          applications.
        </p>

        <GSAPContent />
      </Column>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
