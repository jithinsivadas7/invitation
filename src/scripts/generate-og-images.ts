import { createCanvas, registerFont } from 'canvas';
import fs from 'fs';
import path from 'path';

async function generateOGImage(
  title: string,
  subtitle: string,
  outputPath: string,
  fontFamily: string = 'Malayalam'
) {
  // Create canvas with 1200x630 dimensions (standard OG image size)
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext('2d');

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
  gradient.addColorStop(0, '#fdf2f8'); // pink-50
  gradient.addColorStop(0.5, '#ffffff'); // white
  gradient.addColorStop(1, '#faf5ff'); // purple-50
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 630);

  // Add decorative elements
  ctx.fillStyle = '#ec4899'; // pink-500
  ctx.globalAlpha = 0.1;
  ctx.beginPath();
  ctx.arc(100, 100, 80, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#8b5cf6'; // purple-500
  ctx.beginPath();
  ctx.arc(1100, 530, 80, 0, Math.PI * 2);
  ctx.fill();

  // Reset opacity
  ctx.globalAlpha = 1;

  // Add text
  ctx.textAlign = 'center';
  ctx.fillStyle = '#1e293b'; // slate-800

  // Title
  ctx.font = `bold 60px ${fontFamily}`;
  const titleLines = title.split('&').map(line => line.trim());
  titleLines.forEach((line, index) => {
    ctx.fillText(line, 600, 250 + (index * 80));
  });

  // Subtitle
  ctx.font = `40px ${fontFamily}`;
  ctx.fillStyle = '#475569'; // slate-600
  ctx.fillText(subtitle, 600, 450);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(outputPath, buffer);
}

async function main() {
  // Register Malayalam font
  registerFont(path.join(process.cwd(), 'public/fonts/Manjari-Regular.ttf'), {
    family: 'Malayalam'
  });

  // Ensure the output directory exists
  const outputDir = path.join(process.cwd(), 'public/images');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Generate English OG image
  await generateOGImage(
    'Wedding Reception - Athma Prayag & Arya Rajan',
    'Join us in celebrating our special day',
    path.join(outputDir, 'og-image-en.jpg')
  );

  // Generate Malayalam OG image
  await generateOGImage(
    'വിവാഹ സ്വീകരണം - ആത്മ പ്രയാഗ് & ആര്യ രാജൻ',
    'ഞങ്ങളുടെ സന്തോഷം പങ്കുവയ്ക്കാൻ സ്വാഗതം',
    path.join(outputDir, 'og-image-ml.jpg')
  );
}

main().catch(console.error); 