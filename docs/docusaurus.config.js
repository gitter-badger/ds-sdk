module.exports = {
  title: 'Dime.Scheduler SDK',
  tagline: 'Software development kit for Dime.Scheduler',
  url: 'https://dimenics.github.io',
  baseUrl: '/ds-sdk/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dimenics',
  projectName: 'ds-sdk',
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      hideOnScroll: true,
      title: 'Dime.Scheduler SDK',
      logo: {
        alt: 'Dime Logo',
        src: 'img/dime.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/dimenics/ds-sdk',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: 'docs/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Website',
              href: 'https://dimescheduler.com',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/dimenics',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/dimenics/ds-sdk',
            }
          ]
        }
      ],
      logo: {
        alt: 'DS logo',
        src: 'img/ds-dark.png',
        href: 'https://dimescheduler.com',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Dimenics.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/dimenics/ds-sdk/edit/master/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
