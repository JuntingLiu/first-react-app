// DESC: 记录一个问题，
// 使用 styled-components 来编写样式组件后，
//  在解析 font "\e636" 问题时会被转译，所以需要 "\\e636" 方式，才能使用 font class 的方式
import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1584627580818'); /* IE9 */
    src: url('./iconfont.eot?t=1584627580818#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAOMAAsAAAAAB7AAAANAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqCdIJZATYCJAMQCwoABCAFhG0HQBvDBhHVm5XIvjjgyZxGMRXNRjjsxBkeh8B81cF7HwRUZ1VPd/ZmJ0v45OQA6Ufg6WT9AkACBABvbcrV9Y2KUCzJefBd/kfymxHSFQB/3Dv9o8TnsyyXOcb5xwDjbV1gY00KJIwLJEFvGLugJe6HAAyCJBAVVXWaoKMwhwlA9OretT16xodCsaSOwK5irrIX8zCha9O1K8Dc4PviM2npoGGSmGMbdKnsRMk79S5LjrONo5WHwJ/OArBFIIEEoEB0q7R1QEaxBBJD7azIAjo6GkzVlPguy2ZDgqPIdOsvDwQSDYQdZqEDABkoLuGdcpgQ8C5RSpU8CxagAXyQOTpgAD2A1ZiqgGleQCFNhtJ1zx0cnIdaOjWxDt251suy5FBMk6aDcM3ZsDg0MXqam7dYEmSs8mnW/rB5JhjCOGHMuNZ4q3V8kF7Q9NA2xm0vHXs60fHePcv9+9a7d5veudPGljQJOWnPvXvDZ4z4TuN3bvVsunj5skUeRz3XrT156NlTEbm5osbVdm2fTKRB/XXrdlXPmZPDiS7Vb8ZU3OzsZDPl93oU1W+qlXXoXnRf/SkaOOhsTrIwlSb1jbV0d2xtrl2S96aNddBlX88/fpE/I4O4PmKxPHdWLrbYHttVLUrSF40eoW3cqEHxCMyBOm0DZqOLvV4bjlN/W+4TNm7aH5ah/a9x9APAdlRekJUB1SaXJL7LR7Lgh/2GR2ebvGvrXEBfAfBo+bpR0Gs7qhjGf+v8zvzf00qFByguNPVKKXxHHt49gCLlDnGNy1U25HLzbAqFp1oIAh3PBDSqEQgSnQhUkRPAhJkMsEOnGAziVV9sxt0AJELZA3EmAxC42AsaThwHiYurqCI/BRNevoIdLkkwsAj3Nc1EhUdVzqgFHZg/RLutZBtFhcU39O+iOS0MKC/kMwZhaPt8csEVeYoJ58ePIgTEW4UZHIalbLDzltBKG0T2qeuo6kmt3WqjKGfUgg7MH6LdVvLKiyp8/ob+XTQ3EKqsL+Qztg9D23dAF9naiXArj5wfP4oQEG8VZmDBYsU22Kt7JbTShgGRfepQKeoqa5dX1DdcARiY1yqhCSmUMGEaylHwUqqvdbVfI0XkpgE=') format('woff2'),
    url('./iconfont.woff?t=1584627580818') format('woff'),
    url('./iconfont.ttf?t=1584627580818') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1584627580818#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
