import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const images = [
    [String.raw`C:\Users\guill\.gemini\antigravity\brain\03323cce-449c-4fe5-bb96-f46dc2d9b59a\daring_blue_bokeh_1787266081201.jpg`, "daring-blue-for-life-maison-alhambra-masculino-100ml"],
    [String.raw`C:\Users\guill\.gemini\antigravity\brain\03323cce-449c-4fe5-bb96-f46dc2d9b59a\liberte_bokeh_1787266155841.jpg`, "liberte-pendora-femenino-100ml"],
    [String.raw`C:\Users\guill\.gemini\antigravity\brain\03323cce-449c-4fe5-bb96-f46dc2d9b59a\rose_de_nuit_bokeh_1787266181577.jpg`, "rose-de-nuit-pendora-femenino-100ml"],
    [String.raw`C:\Users\guill\.gemini\antigravity\brain\03323cce-449c-4fe5-bb96-f46dc2d9b59a\very_irresistible_bokeh_1787266211498.jpg`, "very-irresistible-EDT-givenchy-femenino"]
];

const destDirs = [
    String.raw`C:\Users\guill\OneDrive\Desktop\productos_crudos`,
    String.raw`C:\Users\guill\OneDrive\Desktop\Parfum_SP\public\images\arabes`
];

async function convertImages() {
    for (const dir of destDirs) {
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    }

    for (const [src, baseName] of images) {
        if (fs.existsSync(src)) {
            for (const dir of destDirs) {
                const outWebp = path.join(dir, `${baseName}.webp`);
                const outJpg = path.join(dir, `${baseName}.jpg`);
                await sharp(src).webp({ quality: 90 }).toFile(outWebp);
                await sharp(src).jpeg({ quality: 95 }).toFile(outJpg);
                console.log(`Saved ${outWebp}`);
            }
        } else {
            console.error(`Error: ${src} not found!`);
        }
    }
    console.log('Conversion completed successfully!');
}

convertImages().catch(console.error);
