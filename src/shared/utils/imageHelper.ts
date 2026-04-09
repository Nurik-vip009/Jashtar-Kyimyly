// src/shared/utils/imageHelper.ts

// Базовый URL сервера (тот же, что и в apiclient.ts)
const BASE_URL = "http://157.230.235.0";

export const getImageUrl = (imagePath: string | undefined | null): string => {
  if (!imagePath) {
    console.warn("getImageUrl: Empty image path");
    return "";
  }

  console.log("getImageUrl input:", imagePath);

  // Если уже полный URL
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    console.log("getImageUrl: Already full URL ->", imagePath);
    return imagePath;
  }

  // Формируем полный URL
  let cleanPath = imagePath;

  // Убираем лишний / в начале если есть
  if (cleanPath.startsWith("/")) {
    cleanPath = cleanPath;
  } else {
    cleanPath = `/${cleanPath}`;
  }

  const fullUrl = `${BASE_URL}${cleanPath}`;
  console.log("getImageUrl: Constructed URL ->", fullUrl);

  return fullUrl;
};

// Функция для проверки, существует ли изображение
export const checkImageExists = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      console.log("Image exists:", url);
      resolve(true);
    };
    img.onerror = () => {
      console.error("Image does not exist:", url);
      resolve(false);
    };
    img.src = url;
  });
};
