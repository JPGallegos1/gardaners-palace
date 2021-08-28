import { Global } from "@emotion/react";
const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'Manrope ExtraLight';
      src: local('Manrope ExtraLight'), local('Manrope-ExtraLight'),
          url('/static/Manrope-ExtraLight.woff2') format('woff2'),
          url('/static/Manrope-ExtraLight.woff') format('woff'),
          url('/static/Manrope-ExtraLight.ttf') format('truetype');
      font-weight: 200;
      font-style: normal;
    }

    @font-face {
      font-family: 'Manrope Light';
      src: local('Manrope Light'), local('Manrope-Light'),
          url('/static/Manrope-Light.woff2') format('woff2'),
          url('/static/Manrope-Light.woff') format('woff'),
          url('/static/Manrope-Light.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
      font-family: 'Manrope Regular';
      src: local('Manrope Regular'), local('Manrope-Regular'),
          url('/static/Manrope-Regular.ttf') format('truetype');
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: 'Manrope Medium';
      src: local('Manrope Medium'), local('Manrope-Medium'),
          url('/static/Manrope-Medium.woff2') format('woff2'),
          url('/static/Manrope-Medium.woff') format('woff'),
          url('/static/Manrope-Medium.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
    }

    @font-face {
      font-family: 'Manrope SemiBold';
      src: local('Manrope SemiBold'), local('Manrope-SemiBold'),
          url('/static/Manrope-SemiBold.woff2') format('woff2'),
          url('/static/Manrope-SemiBold.woff') format('woff'),
          url('/static/Manrope-SemiBold.ttf') format('truetype');
      font-weight: 600;
      font-style: normal;
    }

    @font-face {
      font-family: 'Manrope Bold';
      src: local('Manrope Bold'), local('Manrope-Bold'),
          url('/static/Manrope-Bold.woff2') format('woff2'),
          url('/static/Manrope-Bold.woff') format('woff'),
          url('/static/Manrope-Bold.ttf') format('truetype');
      font-weight: 700;
      font-style: normal;
    }
        
    @font-face {
      font-family: 'Manrope ExtraBold';
      src: local('Manrope ExtraBold'), local('Manrope-ExtraBold'),
          url('/static/Manrope-ExtraBold.ttf') format('truetype');
      font-weight: 800;
      font-style: normal;
    }
        
      `}
  />
);
export default Fonts;
