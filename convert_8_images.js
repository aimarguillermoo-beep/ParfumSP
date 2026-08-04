import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const images = [
    [String.raw`C:\Users\guill\.gemini\antigravity\brain\a267e1e2-56a5-478c-b38c-95863b106f01\aquilo_lights_bg_1785836931145.jpg`, "aquilo-pour-homme-maison-alhambra-masculino-100ml.webp"],
    [String.raw`C:\Users\guill\.gemini\antigravity\brain\a267e1e2-56a5-478c-b38c-95863b106f01\cheekmate_king_bg_1785836985011.jpg`, "cheekmate-king-armaf-masculino-100ml.webp"],
    [String.raw`C:\Users\guill\.gemini\antigravity\brain\a267e1e2-56a5-478c-b38c-95863b106f01\cheekmate_queen_bg_1785836999267.jpg`, "cheekmate-queen-armaf-100ml-femenino.webp"],
    [String.raw`C:\Users\guill\.gemini\antigravity\brain\a267e1e2-56a5-478c-b38c-95863b106f01\emotion_bg_1785837012346.jpg`, "emotion-le-chameau-femenino-100ml.webp"],
    [String.raw`C:\Users\guill\.gemini\antigravity\brain\a267e1e2-56a5-478c-b38c-95863b106f01\exquisite_bg_1785837025331.jpg`, "exquisite-pour-homme-club-maison-alhambra-masculino-100ml.webp"],
    [String.raw`C:\Users\guill\.gemini\antigravity\brain\a267e1e2-56a5-478c-b38c-95863b106f01\khair_confection_bg_1785837037025.jpg`, "khair-confection-paris-corner-femenino-100ml.webp"],
    [String.raw`C:\Users\guill\.gemini\antigravity\brain\a267e1e2-56a5-478c-b38c-95863b106f01\phantom_my_hero_bg_1785837060069.jpg`, "phantom-my-hero-amper-masculino-100ml.webp"],
    [String.raw`C:\Users\guill\.gemini\antigravity\brain\a267e1e2-56a5-478c-b38c-95863b106f01\pure_crystal_bg_1785837078453.jpg`, "pure-crystal-lattafa-unisex-100ml.webp"]
];

const outputDir = String.raw`C:\Users\guill\OneDrive\Desktop\Parfum_SP\public\images\arabes`;

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function convertImages() {
    for (const [src, destName] of images) {
        if (fs.existsSync(src)) {
            const destPath = path.join(outputDir, destName);
            await sharp(src)
                .webp({ quality: 90 })
                .toFile(destPath);
            console.log(`Saved ${destPath}`);
        } else {
            console.error(`Error: ${src} not found!`);
        }
    }
}

convertImages().catch(console.error);
