import { defineTheme, directory, group, link, social } from '@neato/guider/theme';
import { Logo } from './components/Logo';
import { NextSeo } from 'next-seo';
import faviconUrl from './public/logo-img.png';

export default defineTheme({
  github: 'sussy-code/skool-project',
  navigation: [
    link('My other project', 'https://sudo-flix.lol', {
      style: 'star',
      newTab: true,
    }),
  ],
  contentFooter: {
    text: 'Made with :3 (sillyness)',
    editRepositoryBase: 'https://github.com/sussy-code/docs/blob/master',
    socials: [
      social.github('https://github.com/sussy-code'),
    ]
  },
  meta: (pageMeta) => (
    <NextSeo {...{
      title: `${pageMeta.title ?? 'Chill Pill'}`,
      description: pageMeta.description ?? 'Chill Pill is a dog sedative to calm your best friend',
      additionalLinkTags: [
        {
          href: faviconUrl.src,
          rel: 'icon',
          type: 'image/x-icon',
        }
      ]
    }} />
  ),
  settings: {
    logo: () => <Logo />,
    backgroundPattern: 'flare',
    toc: false,
    contentFooter: false,
    colors: {
      'primary': '#A476D9',
      'primaryLighter': '#C4ADDE',
      'primaryDarker': '#6E23C3',
      'background': '#0C0B13',
      'backgroundLighter': '#1A1726',
      'backgroundLightest': '#282438',
      'backgroundDarker': '#000000',
      'line': '#37334C',
      'text': '#8C899A',
      'textLighter': '#A6A4AE',
      'textHighlight': '#FFF'
    },
  },
  directories: [
    directory('main', {
      sidebar: [
        link('Introduction', '/intro', { icon: 'mdi:handshake' }),
        link('Ingredients', '/ingredients', { icon: 'mdi:chef-hat' }),
        link('Pricing', '/pricing', { icon: 'mdi:cash-multiple' }),
        link('Contact us', '/contact', { icon: 'mdi:contact'}),
        link('About us', '/about', { icon: 'mdi:about' }),
      ]
    })
  ],
});
