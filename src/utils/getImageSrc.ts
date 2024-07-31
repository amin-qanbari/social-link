export const getImageSrc = (input: string) => {
  switch (input) {
    case "اینستاگرام":
      return "/assets/images/instagram.png";
    case "تلگرام":
      return "/assets/images/telegram.png";
    case "فیسبوک":
      return "/assets/images/facebook.png";
    case "وب سایت":
      return "/assets/images/website.png";
    case "لینکدین":
      return "/assets/images/linkedin.png";
    case "تویتر":
      return "/assets/images/twitter.png";
    default:
      return "";
  }
};
