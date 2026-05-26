const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const replaceMap = {
  'Ã¡': 'a', 'Ã©': 'e', 'Ã­': 'i', 'Ã³': 'o', 'Ãº': 'u', 'Ã±': 'n', 'Ã¼': 'u',
  'Ã ': 'A', 'Ã‰': 'E', 'Ã ': 'I', 'Ã“': 'O', 'Ãš': 'U', 'Ã‘': 'N', 'Ãœ': 'U',
  'Â¡': '!', 'Â¿': '?', 'â€”': '--', 'â€“': '-', 'â€œ': '"', 'â€ ': '"', 'â€˜': "'", 'â€™': "'"
};

function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === '.git' || file === 'node_modules') continue;
    const res = path.resolve(dir, file);
    if (fs.statSync(res).isDirectory()) {
      getFiles(res, files);
    } else if (res.endsWith('.md')) {
      files.push(res);
    }
  }
  return files;
}

const files = getFiles(process.cwd());
let modified = false;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  content = content.replace(/SofÃ­a Plataforma/g, 'Nazaret Rabazo Mengual');
  content = content.replace(/Sofia Plataforma/g, 'Nazaret Rabazo Mengual');
  content = content.replace(/Sofía Plataforma/g, 'Nazaret Rabazo Mengual');
  content = content.replace(/Mateo Operaciones/g, 'Sergio Carpintero Gonzalez');
  content = content.replace(/Nazaret Rabazo MEngual/g, 'Nazaret Rabazo Mengual');

  content = content.replace(/\bSofÃ­a\b/g, 'Nazaret');
  content = content.replace(/\bSofia\b/g, 'Nazaret');
  content = content.replace(/\bSofía\b/g, 'Nazaret');
  content = content.replace(/\bMateo\b/g, 'Sergio');

  for (const [key, val] of Object.entries(replaceMap)) {
    content = content.split(key).join(val);
  }

  content = content.replace(/[áéíóúüñÁÉÍÓÚÜÑ]/g, match => {
      const map = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','ü':'u','ñ':'n','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U','Ü':'U','Ñ':'N'};
      return map[match] || match;
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    modified = true;
  }
}

if (modified) {
  console.log(`Changes found, committing...`);
  execSync(`git add .`);
  execSync(`git commit -m "Actualizacion final nombres de equipo y limpieza de tildes"`);
  execSync(`git push origin HEAD`);
} else {
  console.log(`No changes needed.`);
}
