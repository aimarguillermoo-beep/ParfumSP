import sharp from 'sharp';
import path from 'path';

const files = [
  {
    src: "C:/Users/guill/.gemini/antigravity/brain/2dab5899-60f8-4f7d-92f8-e1b4f83730ff/adine_mockup_1783963338838.jpg",
    dest: "c:/Users/guill/OneDrive/Desktop/Parfum_SP/public/images/mockups/adine_mockup.webp"
  },
  {
    src: "C:/Users/guill/.gemini/antigravity/brain/2dab5899-60f8-4f7d-92f8-e1b4f83730ff/supremacy_not_only_intense_mockup_1783963636905.jpg",
    dest: "c:/Users/guill/OneDrive/Desktop/Parfum_SP/public/images/mockups/supremacy_not_only_intense_mockup.webp"
  },
  {
    src: "C:/Users/guill/.gemini/antigravity/brain/2dab5899-60f8-4f7d-92f8-e1b4f83730ff/tag_uomo_rosso_mockup_1783963651976.jpg",
    dest: "c:/Users/guill/OneDrive/Desktop/Parfum_SP/public/images/mockups/tag_uomo_rosso_mockup.webp"
  }
];

async function convert() {
  for (const file of files) {
    try {
      console.log(`Converting ${path.basename(file.src)} -> ${path.basename(file.dest)}...`);
      await sharp(file.src)
        .webp({ quality: 90 })
        .toFile(file.dest);
      console.log(`Successfully saved to ${file.dest}`);
    } catch (err) {
      console.error(`Error converting ${file.src}:`, err);
    }
  }
}

convert();
