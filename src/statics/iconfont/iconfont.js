// DESC: 记录一个问题，
// 使用 styled-components 来编写样式组件后，
//  在解析 font "\e636" 问题时会被转译，所以需要 "\\e636" 方式，才能使用 font class 的方式
import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1585140406996'); /* IE9 */
    src: url('./iconfont.eot?t=1585140406996#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPoAAsAAAAACEQAAAOaAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqDZIM5ATYCJAMUCwwABCAFhG0HRxtEBxEVnAXJfhbYzcmsrOUizPbj+Ujib7RI2vdF8MDTqe/j0tul5GQGE5DORjrYaYCAub5L23qT+KEsfcQi7T2Jd2Q7Bj72VoL1F4eqmeLzLRaXuYclgOGc5wI2xtTVFrA6QFrnDmM3ETTE4xCARXJZibLlqzow0YBxAhAd27VphplRoBvSBSYCW8VS7ScmY2DKMfI8MIn/vHhD7kyQGAowtWbrci0p+Vy/rKU8Pg8NKQLmdDrAWAUKyAo0iO6Vho6oKJCVwvL+TlMSsDCRyOf6ebbn+V/W8vngcw4ksmAQJHqaf56wAVL9ASgpuzQ8x2RIeJ6NUSXML5Oh4GUt1rOkGgBYE4XGA0mmMh64k0ShUSEhhqVNM8Lu7x/Ux3HgBtevO4TDKZKS3Ilelysd57lRy33Qa38QfVwtHe4+6xZFumZuz+hw9iSkIMvl77A62OvVn5ncmh9dt9k++ziwhHXYGntRJLrdiTy6qHP7ajxrSmOPCdHC63WNE3PjhvP69cYT0wQtbfN6+40d8YbEdasinDPmzJ4e/md/vXr3cvQoJUdt3z5KlhwCvlTygP77Vx9oUGbJH5lGX6dPwIGIxYuOHE514mjaQoVExQtNm9wdpmaNxYvXVyg4sSCHW1e4krHslVaBvnDjbV+8hlOWbt6ueJL+U7xHzxMFcwijVPYumVztAhrZq5Qs/LSxu+e5mIg/sek+pUvOpf4z1MkTagakUiqRTE+ip7+/XLZMytz+Kk1WyKUqVbk58okVMOr3OdGpPaP/dLnNfnkoCMB3QJ1W5Tjepw4rQh/UbVX0X/8OFVoW7tIkqOg3064BuL1kO+UCn0ejPPDDhHRm/tlOOg2ANtlAaWi3CgvTDAlikNMMJgk/sep/WkLdn8YUgUQnME2mDBI/EkBhkhapsVnBwE5esGFSAiyyqLDaTpjuKIROBmQ2QgJBsE0gCeQQKIJdQGrsPTCI9A5sBKfAwvFqseXcMp5tBAPFGMI/cFSVhNQ6E+k3NO88kDSb414oLbvBtZx8+IAlyhQz2o/xVAlIqgL20mmY5xXUUqUYqZWo1r5tU9WDrKgqOjMbAgUUioHQH2CRSoloazUrfP8NMt5yAWmo61G+INHi7oHL4nRAHgRlp7pb6d36MDxKkTqKiEoB7GUdymGgAurqQSkUUZZkgK/ms5Vm1FVgLS8q3nEbYAF3MpJCCS0MYWOwmsvhV1ixtwqmx8CUTIzS6QAAAA==') format('woff2'),
    url('./iconfont.woff?t=1585140406996') format('woff'),
    url('./iconfont.ttf?t=1585140406996') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1585140406996#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
