// DESC: 记录一个问题，
// 使用 styled-components 来编写样式组件后，
//  在解析 font "\e636" 问题时会被转译，所以需要 "\\e636" 方式，才能使用 font class 的方式
import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1585321152958'); /* IE9 */
    src: url('./iconfont.eot?t=1585321152958#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQkAAsAAAAACJwAAAPWAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDSAqEGINfATYCJAMYCw4ABCAFhG0HThuLB8ieA+7mMhojTpw4meFyPR7+2+/3+8zMvag0Eeue8PQSmaSJpKFRaY2SYXX5/4eo//971g2qtEtnpYEZLFS8dDPlSd6S+IOQWdhtgICK1CVY/8e906bl6Xz2LZe5ln0rwLjzLrA9QcYESgdIot4DvTCBl/cTaDWsE2I/q4ADo8IZFohL2WkFY0mr9BSGZqFumVv0xEyoNKdJ5HkAL/H34xeEZQRJlcEZe3aR6YCUT/q1jhoZGAnnIQZ465khLSJjESjEfav1DpVGF1FajTG0A6Bds6R8up/o/DzqZelrXSBASYjk0P6XR1YpkiBqcPLbwRHFKj5pXy0bss7IbZNFIULhuxQh8VPHvyxlvWKfDrziExzSpOeEJCtye40aOoY2GuuYLZZqQywkQ1mIKpSZrDKAO3ADrl/nCI4nKivFUZogFDNG3igVD2rqnWBAw8GJA7asqCvM39uO4zHUqBojWDjGZe7abX5TZmn9LtZ95imgNZjDzOSLxChRHBWnJvB7N8LzG9OPEYRd04Rl0m7c4K9f77UyO2EX3Zo2aPKCS0dt2VCHn7do4dzaYbt4gIY32e/9XbveC1ZTyQl7904gU0Y4b6UcoP/+pQ90T1/1R6k2MOoF4MBWrjhyuPmJo61iY4mcC3163x0DZ6crV27NjpkeA4el7CvtMq6gqgFbulaRVMyTaTY5qZL+k6TiEzHBhC41yNdekKv0NOenxD3tJeJzDer8adj6U+umcGnwPOrkCWqeywpZgXJunjp32GByzRoSRYOZjVpyNbNoz7pPmCoTfl9Uv8XIiX8KodZfI+Gc0zEvkFvA/wPUaSozpgbyYQriH6jbVMKf8Bvv32K29q6W8M1opgE+1kYexqr/I2nIz+B1yozmvfdWpSUARRawri46ii+bmBdTW7XJqIRWrfiPzl7317IPgNwcmmUeQtJkCLJmk9hCXIRKm02oNduCVguyF7fpo6BEMQHzxgGEbjsg6fQGWbcL2EK8B5VB76DWHQWtGlFrzTbTyUy6gqwYOVjbIFa2+7ySZ8BMUliGnP3cVqUoiCkCUlQ5wIYGhVQT2ciLlDUmqP2dYRhLrKT4PGwWHIbcbh/rV3wVyI6D+mLsjwsOltpOFGT3eYCxR4FYYYgDy2YQlszOx0sKG2NM7fNlEKd+3KyUHlSDWYAoVHL7rFBBQkZgs6XeUahn6azqzykMhkk8SKLw8WBloRlxu1Eflr+9VwXEDgvSd0bYL04w1ZPGSoP2l3vuchO0co5bB0lQBE3oCD1hgHLr7qfSql/26gYoMkZkqtVUaHV6ZUlGCgAAAA==') format('woff2'),
    url('./iconfont.woff?t=1585321152958') format('woff'),
    url('./iconfont.ttf?t=1585321152958') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1585321152958#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-plus:before {
    content: "\\ea05";
  }

  .icon-spin:before {
    content: "\\e851";
  }

  .icon-write:before {
    content: "\\e604";
  }

  .icon-Aa:before {
    content: "\\e636";
  }

  .icon-Magnifier:before {
    content: "\\e62d";
  }
`;
