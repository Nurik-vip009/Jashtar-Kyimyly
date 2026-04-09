// Декларации для CSS модулей
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.sass" {
  const content: { [className: string]: string };
  export default content;
}

// Декларации для Swiper CSS
declare module "swiper/css" {
  const content: any;
  export default content;
}

declare module "swiper/css/navigation" {
  const content: any;
  export default content;
}

declare module "swiper/css/pagination" {
  const content: any;
  export default content;
}

// Декларации для изображений
declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}
