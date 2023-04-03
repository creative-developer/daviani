export class Helpers {
  static getWindowHeightPercentage = percent => (document.documentElement.clientHeight / 100) * percent;

  static calculatePosition = element => {
    const root = document.documentElement;
    const body = document.body;
    const rect = element.getBoundingClientRect();

    const scrollTop = window.pageYOffset || root.scrollTop || body.scrollTop || 0;
    const scrollLeft = window.pageXOffset || root.scrollLeft || body.scrollLeft || 0;

    const clientTop = root.clientTop || body.clientTop || 0;
    const clientLeft = root.clientLeft || body.clientLeft || 0;

    return {
      top: Math.round(rect.top + scrollTop - clientTop),
      left: Math.round(rect.left + scrollLeft - clientLeft),
      height: rect.height,
      width: rect.width,
    };
  };
}
