import fs from 'fs';
import path from 'path';

const DATA_FILE = './src/data.js';
const PUBLIC_DIR = './public';

async function fetchFirstImage(url, outputPath) {
    console.log(`Fetching actual image for ${url}...`);
    try {
        const response = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
        const html = await response.text();
        
        // Find all img src attributes
        const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
        let match;
        const images = [];
        
        while ((match = imgRegex.exec(html)) !== null) {
            let src = match[1];
            // Ignore svgs, icons, trackers, and data URIs
            if (src.includes('data:image')) continue;
            if (src.endsWith('.svg')) continue;
            if (src.includes('favicon')) continue;
            
            // Resolve absolute URL
            try {
                const absoluteUrl = new URL(src, url).href;
                images.push(absoluteUrl);
            } catch(e) {}
        }
        
        if (images.length === 0) {
            console.log(`No suitable images found on ${url}`);
            return false;
        }

        // Try downloading the first valid image
        for (const imgUrl of images) {
            try {
                const imgResponse = await fetch(imgUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
                if (imgResponse.ok) {
                    const arrayBuffer = await imgResponse.arrayBuffer();
                    
                    // Skip tiny images (likely icons or trackers, e.g., < 5KB)
                    if (arrayBuffer.byteLength < 5000) continue;

                    const buffer = Buffer.from(arrayBuffer);
                    fs.writeFileSync(outputPath, buffer);
                    console.log(`Saved image ${imgUrl} to ${outputPath}`);
                    return true;
                }
            } catch (e) {
                // Ignore download errors for individual images
            }
        }
        
        console.log(`Failed to download any valid image from ${url}`);
        return false;
    } catch (e) {
        console.error(`Error connecting to ${url}:`, e.message);
        return false;
    }
}

async function main() {
    let dataContent = fs.readFileSync(DATA_FILE, 'utf8');
    let lines = dataContent.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        
        // Find lines with demoUrl and our auto-generated image paths (dep-X.png or port-X.png)
        if (line.includes('demoUrl:') && (line.includes("image: '/dep-") || line.includes("image: '/port-"))) {
            const urlMatch = line.match(/demoUrl:\s*'([^']+)'/);
            const imgMatch = line.match(/image:\s*'\/([^']+)'/);
            
            if (urlMatch && imgMatch) {
                const url = urlMatch[1];
                const imageName = imgMatch[1];
                const imagePath = path.join(PUBLIC_DIR, imageName);
                
                await fetchFirstImage(url, imagePath);
            }
        }
    }
    console.log("Done fetching actual images.");
}

main().catch(console.error);
