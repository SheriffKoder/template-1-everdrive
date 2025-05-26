import localFont from 'next/font/local';

// Local Fonts  
export const LocalFont1 = localFont({
  src: [
    {
      path: '../public/fonts/RecklessNeue-Thin.woff',
    },
  ],
  variable: '--font-local-font-1'
});

export const LocalFont2 = localFont({
  src: [
    {
      path: '../public/fonts/NeutralFaceRegular.woff',
    },
  ],
  variable: '--font-local-font-2'
});

export const LocalFont3 = localFont({
  src: [
    {
      path: '../public/fonts/Sk-Modernist-Regular.otf',
    },
  ],
  variable: '--font-local-font-3'
}); 