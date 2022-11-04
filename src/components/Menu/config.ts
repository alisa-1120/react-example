import { MenuEntry } from '@pancakeswap-libs/uikit'


const config: (t) => MenuEntry[] = (t) => [
  {
    label: t(672,'Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t(687,'Swap'),
        href: 'https://swanswap.polysmartchain.com/#/swap',
      },
      {
        label:t(686,'Liquidity'),
        href: 'https://swanswap.polysmartchain.com/#/pool',
      },
    ],
  },
  {
    label: t(674,'Farms'),
    icon: 'FarmIcon',
    initialOpenState: true,
    items: [
      {
        label: `${t(1008,'PSC Farms V3')}`,
        href: '/farms',
      },
      /*
      {
        label: `${t(1006,'Activities Farms')}`,
        href: '/activitiesfarms',
      },
     
      {
        label: t(734,'Other Farms'),
        href: '/otherfarms',
      },  */
     
    ],
   },
   {
    label: t(1026,'Social'),
    icon: 'GroupsIcon',
    href: 'https://social.polysmartchain.com/',
   },
   {
    label: t(1028,'PolyJetClub'),
    icon: 'NftIcon',
    items: [
      {
        label: `${t(1028,'PolyJetClub')}`,
        href: 'https://polyjetclub.polysmartchain.com/',
      },
      {
        label: `${t(100027,'PolyPotion')}`,
        href: 'https://polypotion.polysmartchain.com/',
      }
    ],
   },
   {
    label: t(1037,'PolyDao'),
    icon: 'TicketIcon',
    items: [
      {
        label: `${t(1037,'PolyDao')}`,
        href: 'https://polydao.polysmartchain.com/',
      },
      {
        label: `${t(100024,'Proposal')}`,
        href: 'https://proposal.polysmartchain.com/',
      }
    ],
   }



 
  /*
  {
    label: t(100016,'Announcement'),
    icon: 'AuditIcon',
    href: '/announcement',
  },

  {
    label: 'Nests',
    icon: 'PoolIcon',
    href: '/nests',
  },
  */
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  /*
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/goose-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/goose-finance/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      },
    ],
  },
  */
  /*
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/goosedefi/',
      },
      {
        label: 'Docs',
        href: 'https://goosedefi.gitbook.io/goose-finance/',
      },
      {
        label: 'Blog',
        href: 'https://goosefinance.medium.com/',
      },
    ],
  },
  {
    label: 'Partnerships/IFO',
    icon: 'GooseIcon',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  },
  {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  },
  {
    label: 'Audit by CertiK',
    icon: 'AuditIcon',
    href: 'https://certik.org/projects/goose-finance',
  },
  */
]

export default config
