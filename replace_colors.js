import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.css')) {
      results.push(filePath);
    }
  });
  return results;
}

const files = walk('src');
let totalReplacements = 0;

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  // Purple/indigo to orange
  content = content.replace(/#6366f1/g, '#FF6B00');
  content = content.replace(/#a855f7/g, '#F97316');
  content = content.replace(/from-indigo-600/g, 'from-[#FF6B00]');
  content = content.replace(/to-purple-600/g, 'to-[#F97316]');
  content = content.replace(/from-indigo-500/g, 'from-[#FF6B00]');
  content = content.replace(/to-purple-500/g, 'to-[#F97316]');
  content = content.replace(/indigo-500/g, 'orange-500');
  content = content.replace(/purple-500/g, 'orange-500');
  content = content.replace(/indigo-600/g, 'orange-600');
  content = content.replace(/purple-600/g, 'orange-600');
  content = content.replace(/indigo-400/g, 'orange-400');
  content = content.replace(/purple-400/g, 'orange-400');
  content = content.replace(/indigo-300/g, 'orange-300');
  content = content.replace(/purple-300/g, 'orange-300');
  content = content.replace(/bg-indigo-500/g, 'bg-[#FF6B00]');
  content = content.replace(/bg-purple-500/g, 'bg-[#F97316]');
  content = content.replace(/text-indigo-500/g, 'text-[#FF6B00]');
  content = content.replace(/text-purple-500/g, 'text-[#F97316]');
  content = content.replace(/text-indigo-400/g, 'text-[#FF6B00]');
  content = content.replace(/text-purple-400/g, 'text-[#F97316]');
  content = content.replace(/text-indigo-300/g, 'text-[#FF6B00]');
  content = content.replace(/text-purple-300/g, 'text-[#F97316]');
  content = content.replace(/border-indigo-500/g, 'border-[#FF6B00]');
  content = content.replace(/border-purple-500/g, 'border-[#F97316]');
  content = content.replace(/ring-indigo-500/g, 'ring-[#FF6B00]');
  content = content.replace(/ring-purple-500/g, 'ring-[#F97316]');
  content = content.replace(/shadow-indigo-500/g, 'shadow-[#FF6B00]');
  content = content.replace(/shadow-purple-500/g, 'shadow-[#F97316]');
  content = content.replace(/from-violet-600/g, 'from-[#FF6B00]');
  content = content.replace(/via-indigo-500/g, 'via-[#F97316]');
  content = content.replace(/to-purple-600/g, 'to-[#F97316]');
  content = content.replace(/from-fuchsia-500/g, 'from-[#FF6B00]');
  content = content.replace(/via-rose-500/g, 'via-[#F97316]');
  content = content.replace(/to-pink-600/g, 'to-[#FFA500]');
  content = content.replace(/from-blue-500/g, 'from-[#FF6B00]');
  content = content.replace(/to-pink-500/g, 'to-[#FFA500]');
  content = content.replace(/bg-blue-500/g, 'bg-[#FF6B00]');
  content = content.replace(/bg-indigo-100/g, 'bg-orange-100');
  content = content.replace(/bg-indigo-600/g, 'bg-[#FF6B00]');
  content = content.replace(/bg-indigo-700/g, 'bg-[#FF6B00]');
  content = content.replace(/text-indigo-600/g, 'text-[#FF6B00]');
  content = content.replace(/text-indigo-700/g, 'text-[#FF6B00]');
  content = content.replace(/border-indigo-600/g, 'border-[#FF6B00]');
  content = content.replace(/focus:border-indigo-500/g, 'focus:border-[#FF6B00]');
  content = content.replace(/focus:ring-indigo-500/g, 'focus:ring-[#FF6B00]');
  content = content.replace(/hover:bg-indigo-500/g, 'hover:bg-[#FF6B00]');
  content = content.replace(/hover:bg-indigo-600/g, 'hover:bg-[#FF6B00]');
  content = content.replace(/hover:bg-indigo-700/g, 'hover:bg-[#FF6B00]');
  content = content.replace(/focus-within:border-indigo-500/g, 'focus-within:border-[#FF6B00]');
  content = content.replace(/focus-within:border-indigo-600/g, 'focus-within:border-[#FF6B00]');
  content = content.replace(/hover:border-indigo-500/g, 'hover:border-[#FF6B00]');
  content = content.replace(/bg-purple-500/g, 'bg-[#F97316]');
  content = content.replace(/bg-indigo-500/g, 'bg-[#FF6B00]');
  content = content.replace(/text-purple-200/g, 'text-orange-200');
  content = content.replace(/from-blue-200/g, 'from-orange-200');
  content = content.replace(/via-purple-200/g, 'via-orange-200');
  content = content.replace(/to-pink-200/g, 'to-amber-200');
  content = content.replace(/from-white via-blue-100 to-purple-200/g, 'from-white via-orange-100 to-amber-200');
  content = content.replace(/from-indigo-600\/20/g, 'from-[#FF6B00]/20');
  content = content.replace(/to-purple-600\/20/g, 'to-[#F97316]/20');
  content = content.replace(/from-indigo-600\/10/g, 'from-[#FF6B00]/10');
  content = content.replace(/to-purple-600\/10/g, 'to-[#F97316]/10');
  content = content.replace(/from-indigo-500\/10/g, 'from-[#FF6B00]/10');
  content = content.replace(/to-purple-500\/10/g, 'to-[#F97316]/10');
  content = content.replace(/from-indigo-500\/15/g, 'from-[#FF6B00]/15');
  content = content.replace(/to-purple-500\/15/g, 'to-[#F97316]/15');
  content = content.replace(/from-indigo-500\/20/g, 'from-[#FF6B00]/20');
  content = content.replace(/to-purple-500\/20/g, 'to-[#F97316]/20');
  content = content.replace(/from-blue-500\/10/g, 'from-[#FF6B00]/10');
  content = content.replace(/via-purple-500\/10/g, 'via-[#F97316]/10');
  content = content.replace(/to-pink-500\/10/g, 'to-[#FFA500]/10');
  content = content.replace(/from-blue-500\/20/g, 'from-[#FF6B00]/20');
  content = content.replace(/via-purple-500\/20/g, 'via-[#F97316]/20');
  content = content.replace(/to-pink-500\/20/g, 'to-[#FFA500]/20');
  content = content.replace(/border-indigo-500\/30/g, 'border-[#FF6B00]/30');
  content = content.replace(/border-indigo-500\/50/g, 'border-[#FF6B00]/50');
  content = content.replace(/border-indigo-500\/60/g, 'border-[#FF6B00]/60');
  content = content.replace(/shadow-\[#6366f1\]/g, 'shadow-[#FF6B00]');
  content = content.replace(/shadow-\[#a855f7\]/g, 'shadow-[#F97316]');
  content = content.replace(/shadow-indigo/g, 'shadow-orange');
  content = content.replace(/shadow-purple/g, 'shadow-orange');
  content = content.replace(/ring-purple-500\/50/g, 'ring-[#F97316]/50');
  content = content.replace(/bg-gradient-to-r from-\[#6366f1\] to-\[#a855f7\]/g, 'bg-gradient-to-r from-[#FF6B00] to-[#F97316]');
  content = content.replace(/bg-gradient-to-br from-\[#6366f1\] to-\[#a855f7\]/g, 'bg-gradient-to-br from-[#FF6B00] to-[#F97316]');
  content = content.replace(/bg-gradient-to-r from-\[#a855f7\] to-\[#6366f1\]/g, 'bg-gradient-to-r from-[#F97316] to-[#FF6B00]');
  content = content.replace(/bg-gradient-to-br from-\[#a855f7\] to-\[#6366f1\]/g, 'bg-gradient-to-br from-[#F97316] to-[#FF6B00]');
  content = content.replace(/color:\s*["']#6366f1["']/g, 'color: "#FF6B00"');
  content = content.replace(/color:\s*['"]#a855f7['"]/g, 'color: "#F97316"');
  // Remove complex regex patterns that cause shell issues
  // content = content.replace(/backgroundImage: [\"']linear-gradient\(45deg, #6366f1 10%, #a855f7 93%\)[\"']/g, 'backgroundImage: "linear-gradient(45deg, #FF6B00 10%, #F97316 93%)"');
  // content = content.replace(/backgroundImage: [\"']linear-gradient\(45deg, #a855f7 10%, #6366f1 93%\)[\"']/g, 'backgroundImage: "linear-gradient(45deg, #F97316 10%, #FF6B00 93%)"');
  content = content.replace(/bg-gradient-to-r from-\[#6366f1\]\/5/g, 'bg-gradient-to-r from-[#FF6B00]/5');
  content = content.replace(/to-\[#a855f7\]\/5/g, 'to-[#F97316]/5');
  content = content.replace(/border-\[#6366f1\]\/30/g, 'border-[#FF6B00]/30');
  content = content.replace(/from-\[#6366f1\]\/20/g, 'from-[#FF6B00]/20');
  content = content.replace(/to-\[#a855f7\]\/20/g, 'to-[#F97316]/20');
  content = content.replace(/from-\[#a855f7\]\/20/g, 'from-[#F97316]/20');
  content = content.replace(/to-\[#6366f1\]\/20/g, 'to-[#FF6B00]/20');
  content = content.replace(/text-\[#6366f1\]/g, 'text-[#FF6B00]');
  content = content.replace(/text-\[#a855f7\]/g, 'text-[#F97316]');
  content = content.replace(/focus:ring-\[#6366f1\]/g, 'focus:ring-[#FF6B00]');
  content = content.replace(/focus:ring-\[#a855f7\]/g, 'focus:ring-[#F97316]');
  content = content.replace(/hover:shadow-\[#6366f1\]/g, 'hover:shadow-[#FF6B00]');
  content = content.replace(/hover:shadow-\[#a855f7\]/g, 'hover:shadow-[#F97316]');
  content = content.replace(/hover:border-\[#6366f1\]/g, 'hover:border-[#FF6B00]');
  content = content.replace(/hover:border-\[#a855f7\]/g, 'hover:border-[#F97316]');
  content = content.replace(/focus:border-\[#6366f1\]/g, 'focus:border-[#FF6B00]');
  content = content.replace(/focus:border-\[#a855f7\]/g, 'focus:border-[#F97316]');
  content = content.replace(/bg-\[#6366f1\]/g, 'bg-[#FF6B00]');
  content = content.replace(/bg-\[#a855f7\]/g, 'bg-[#F97316]');
  content = content.replace(/border-\[#6366f1\]/g, 'border-[#FF6B00]');
  content = content.replace(/border-\[#a855f7\]/g, 'border-[#F97316]');
  content = content.replace(/ring-\[#6366f1\]/g, 'ring-[#FF6B00]');
  content = content.replace(/ring-\[#a855f7\]/g, 'ring-[#F97316]');
  content = content.replace(/from-blue-500\/10/g, 'from-[#FF6B00]/10');
  content = content.replace(/via-purple-500\/10/g, 'via-[#F97316]/10');
  content = content.replace(/to-pink-500\/10/g, 'to-[#FFA500]/10');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', filePath);
    totalReplacements++;
  }
});

console.log('Total files updated:', totalReplacements);
