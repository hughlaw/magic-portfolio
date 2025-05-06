import { Flex, Logo } from '@/once-ui/components';

const person = {
  firstName: 'Hugh',
  lastName: 'Law',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Senior Frontend/UX Engineer',
  avatar: '/images/avatar.png',
  email: 'hello@hughlaw.dev',
  location: 'Europe/Dublin', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/hughlaw',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/hughlaw/',
  },
  {
    name: 'X',
    icon: 'x',
    link: '',
  },
  {
    name: 'Email',
    icon: 'email',
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: '/',
  image: '/images/og/home.jpg',
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  // headline: <>Designing, developing and delivering digital delights</>,
  headline: <>Turning complex ideas into simple clicks</>,
  featured: {
    display: false,
    title: (
      <>
        Recent project: <strong className="ml-4">Once UI</strong>
      </>
    ),
    href: '/work/building-once-ui-a-customizable-design-system',
  },
  subline: (
    <Flex direction="column" gap="12">
      <p>
        I'm Hugh, a Senior Frontend/UX Engineer at Hedgey Finance,
        <br /> bridging the gap between design and development.
      </p>
      <p>
        I specialize in designing and building beautiful, accessible, and
        performant web applications.
      </p>
    </Flex>
  ),
};

const about = {
  path: '/about',
  label: 'About',
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: 'https://cal.com',
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        Hugh is a Ireland-based developer with a unique skill set the blends UX
        design with frontend development. With 20+ years experience designing
        and building web experiences from concept to production, he is able to
        uniquely navigate both design and development challenges.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: 'Work Experience',
    experiences: [
      {
        company: 'Hedgey Finance',
        timeframe: 'Dec 2021 – Present',
        role: 'Senior Frontend/UX Engineer',
        achievements: [
          <>
            Designed and developed component libraries using Storybook,
            streamlining the UI development process, allowing us to deliver
            performant, maintainable, and scalable UIs.
          </>,
          <>
            Implemented{' '}
            <a href="https://app.hedgey.finance" target="_blank">
              app.hedgey.finance
            </a>{' '}
            which has facilitated over{' '}
            <strong>$1B in transaction volume</strong> and secures over{' '}
            <strong>$250M in Total Value Locked (TVL)</strong> through its
            interfaces and smart contracts.
          </>,
          <>
            Developed airdrop claim portals in NextJS to give clients custom UIs
            to integrate with Hedgey's claim APIs.
          </>,
          <>
            Developed intuitive UX flows tailored for Web3, simplifying complex
            blockchain concepts for users.
          </>,
          <>
            Collaborated with the senior team to create dashboards and UI flows
            for vesting plans and token unlock campaigns.
          </>,
        ],
        images: [
          {
            src: '/images/projects/hedgey/hedgey-01.jpeg',
            alt: 'Hedgey Finance Project',
            width: 16,
            height: 9,
          },
          {
            src: '/images/projects/hedgey/hedgey-02.jpeg',
            alt: 'Hedgey Finance Project',
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: 'Better Examinations Online',
        timeframe: 'Mar 2020 – Dec 2021',
        role: 'UX Lead / Frontend Developer',
        achievements: [
          <>
            Primary advocate for user-based decisions in product roadmap and UX
            activities.
          </>,
          <>
            Developed and maintained the BE UI component library and style
            guide.
          </>,
          <>
            Moved Better Examinations Online from proof of concept to production
            app with several high-profile clients.
          </>,
        ],
        images: [
          {
            src: '/images/projects/better-examinations/better-examinations-01.jpeg',
            alt: 'Better Examinations Project',
            width: 16,
            height: 9,
          },
          {
            src: '/images/projects/better-examinations/better-examinations-02.jpeg',
            alt: 'Better Examinations Project',
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: 'Terminalfour',
        timeframe: 'May 2014 – Mar 2020',
        role: 'UX Lead / Frontend Developer',
        achievements: [
          <>
            Reimagined, designed, and drove the implementation of new product UI
            from v7 to v8 (the biggest in company history).
          </>,
          <>
            Created a product style and implementation guide for a consistent
            look and feel across the product.
          </>,
          <>
            Developed a frontend component library to ensure UI elements are
            updated and maintained easily.
          </>,
        ],
        images: [
          {
            src: '/images/projects/terminalfour/terminalfour-01.jpeg',
            alt: 'Terminalfour Project',
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: 'Terminalfour',
        timeframe: 'May 2011 – May 2014',
        role: 'Web Developer / Designer',
        achievements: [
          <>
            Worked on large-scale client projects for universities and
            organizations in Europe, the US, and Australia, including the OECD,
            RMIT University, Liverpool Hope University, UCD Dublin and many
            more.
          </>,
          <>
            Implemented client sites using the company CMS and collaborated
            directly with clients and internal teams.
          </>,
        ],
        images: [],
      },
      {
        company: 'Singularity',
        timeframe: 'Jun 2009 – Sep 2009',
        role: 'HCI Designer',
        achievements: [
          <>
            Developed a new user interface for Singularity's LiveAgility BPM
            Software, an online SaaS version of their BPM software.
          </>,
        ],
        images: [],
      },
      {
        company: 'Marble Multimedia',
        timeframe: 'Jan 2002 – May 2011',
        role: 'Freelance Web Developer / Graphic Designer',
        achievements: [
          <>
            Worked as a freelance web developer and graphic designer for a
            variety of clients and projects.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: 'Education',
    institutions: [
      {
        name: 'University of Ulster',
        description: <>MSc Computing & Creative Technology - Distinction</>,
      },
      {
        name: 'University of Ulster',
        description: (
          <>BSc Hon Multimedia Computing & Design - 1st Class Honours</>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: 'Technical skills',
    skills: [
      {
        title: 'Figma',
        description: <>Ability to design and prototype in Figma.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: 'Svelte / Sveltekit',
        description: (
          <>Good understanding of the Svelte framework and ecosystem.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: 'React, Next.js',
        description: (
          <>Knowledge and experience developing with React and Next.js</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: 'Cypress, Jest, Jasmine, Playwright',
        description: (
          <>
            Knowledge and experience with testing frameworks for unit,
            integration and e2e testing.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  path: '/blog',
  label: 'Blog',
  title: 'Writing about design and tech...',
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: '/work',
  label: 'Work',
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: '/gallery',
  label: 'Gallery',
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: '/images/gallery/horizontal-1.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-2.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-3.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-4.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/vertical-1.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-2.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-3.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-4.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
