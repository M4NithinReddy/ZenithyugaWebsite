import fs from 'fs';
import path from 'path';

const DATA_FILE = './src/data.js';
const PUBLIC_DIR = './public';

async function fetchScreenshot(url, outputPath) {
    console.log(`Fetching screenshot for ${url}...`);
    try {
        const response = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false`);
        const json = await response.json();
        
        if (json.status === 'success' && json.data.screenshot) {
            const imgResponse = await fetch(json.data.screenshot.url);
            const arrayBuffer = await imgResponse.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            fs.writeFileSync(outputPath, buffer);
            console.log(`Saved screenshot to ${outputPath}`);
            return true;
        } else {
            console.log(`Failed to get screenshot URL for ${url}`);
            return false;
        }
    } catch (e) {
        console.error(`Error fetching screenshot for ${url}:`, e);
        return false;
    }
}

async function main() {
    let dataContent = fs.readFileSync(DATA_FILE, 'utf8');
    
    // Regular expression to match objects in the arrays
    // We look for: { id: '...', ..., demoUrl: '...' }
    // It's a bit tricky to parse the JS exactly, but we can do string replacement line by line.
    
    let lines = dataContent.split('\n');
    let modified = false;
    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        
        // Find lines that look like a project object with an id and demoUrl but no image
        if (line.includes('{') && line.includes('id:') && line.includes('demoUrl:') && !line.includes('image:')) {
            const idMatch = line.match(/id:\s*'([^']+)'/);
            const urlMatch = line.match(/demoUrl:\s*'([^']+)'/);
            
            if (idMatch && urlMatch) {
                const id = idMatch[1];
                let url = urlMatch[1];
                
                // Some demoUrls are just '#' or empty, skip them
                if (url === '#' || !url.startsWith('http')) continue;
                
                const imageName = `${id}.png`;
                const imagePath = path.join(PUBLIC_DIR, imageName);
                
                const success = await fetchScreenshot(url, imagePath);
                
                if (success) {
                    // Inject the image property before the closing brace
                    line = line.replace(/(\s*)\}\s*(,?)\s*$/, `, image: '/${imageName}'$1}$2`);
                    lines[i] = line;
                    modified = true;
                }
            }
        }
    }
    
    if (modified) {
        fs.writeFileSync(DATA_FILE, lines.join('\n'));
        console.log("data.js has been updated.");
    } else {
        console.log("No new images to fetch or updates to make.");
    }
}

main().catch(console.error);
