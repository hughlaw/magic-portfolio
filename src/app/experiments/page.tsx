import { Column, Heading, SmartImage, Tag, Flex } from '@/once-ui/components';
import { Mailchimp } from '@/components';
import { baseURL } from '@/app/resources';
import { person, newsletter, experiments } from '@/app/resources/content';
import { Meta, Schema } from '@/once-ui/modules';
import Link from 'next/link';

interface Experiment {
  title: string;
  description: string;
  link: string;
  tags?: string[];
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export async function generateMetadata() {
  return Meta.generate({
    title: experiments.title,
    description: experiments.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(experiments.title)}`,
    path: experiments.path,
  });
}

export default function Experiments() {
  return (
    <Column maxWidth="s">
      <Schema
        as="experiments"
        baseURL={baseURL}
        title={experiments.title}
        description={experiments.description}
        path={experiments.path}
        image={`${baseURL}/og?title=${encodeURIComponent(experiments.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/experiments`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s">
        {experiments.title}
      </Heading>
      <Column fillWidth gap="32" flex={1}>
        <p>
          I use this section as a playground for exploring new tech I'm
          interested in. These experiments are not always finished, but I
          document my process here. If you want to dig in to more details on an
          experiment follow the link, or even dive in to the code on my GitHub.
        </p>

        {experiments.experiments.map(
          (experiment: Experiment, index: number) => (
            <div key={index}>
              <Flex
                gap="l"
                vertical="start"
                border="neutral-medium"
                radius="m"
                padding="16"
              >
                {experiment.image && (
                  <Flex
                    border="neutral-medium"
                    radius="m"
                    minWidth={experiment.image.width}
                    height={experiment.image.height}
                  >
                    <SmartImage
                      enlarge
                      radius="m"
                      sizes={experiment.image.width.toString()}
                      alt={experiment.image.alt}
                      src={experiment.image.src}
                    />
                  </Flex>
                )}
                <Column gap="s" flex={1}>
                  <Link
                    href={experiment.link}
                    className="font-semibold hover:text-blue-600 transition-colors"
                  >
                    <Heading as="h2" wrap="balance" variant="heading-strong-xl">
                      {experiment.title}
                    </Heading>
                  </Link>
                  <p className="text-gray-600">{experiment.description}</p>
                  {experiment.tags && (
                    <Flex gap="8" wrap>
                      {experiment.tags.map((tag: string, tagIndex: number) => (
                        <Tag key={tagIndex} size="l">
                          {tag}
                        </Tag>
                      ))}
                    </Flex>
                  )}
                </Column>
              </Flex>
            </div>
          )
        )}
      </Column>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
