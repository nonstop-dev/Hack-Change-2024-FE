import localFont from 'next/font/local';

export const MTSText = localFont({
  src: [
    {
      path: './Text/MTSText-Regular/MTSText-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Text/MTSText-Medium/MTSText-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Text/MTSText-Bold/MTSText-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Text/MTSText-Black/MTSText-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  preload: true,
});

export const MTSWide = localFont({
  src: [
    {
      path: './Wide/MTSWide-Light/MTSWide-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Wide/MTSWide-Regular/MTSWide-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Wide/MTSWide-Medium/MTSWide-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Wide/MTSWide-Bold/MTSWide-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Wide/MTSWide-Black/MTSWide-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  preload: true,
});

console.log(MTSText, MTSWide);
