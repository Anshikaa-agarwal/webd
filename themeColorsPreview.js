const theme = {
  palette: {
    primary: {
      main: '#002B5B',
      light: '#4056BA',
      dark: '#121C4A',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00B4D8',
      light: '#5edfff',
      dark: '#0077a6',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f4f7fc',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#4a4a4a',
    },
    error: {
      main: '#f44336',
    },
    success: {
      main: '#2e7d32',
    },
    warning: {
      main: '#fbc02d',
    },
    info: {
      main: '#0288d1',
    },
  }
};

function createColorBox(colorName, hex) {
  const div = document.createElement('div');
  div.style.background = hex;
  div.style.color = '#fff';
  div.style.padding = '10px';
  div.style.margin = '5px 0';
  div.style.display = 'flex';
  div.style.justifyContent = 'space-between';
  div.style.alignItems = 'center';
  div.style.border = '1px solid #ccc';
  div.innerHTML = `<strong>${colorName}</strong> <span>${hex}</span>`;
  return div;
}

function renderPalette(palette) {
  const container = document.createElement('div');
  container.style.fontFamily = 'Poppins, sans-serif';
  container.style.maxWidth = '500px';
  container.style.margin = '20px auto';
  container.style.padding = '20px';
  container.style.border = '1px solid #ddd';
  container.style.borderRadius = '10px';
  container.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
  container.style.background = '#fff';

  const title = document.createElement('h2');
  title.innerText = 'Theme Colors';
  title.style.textAlign = 'center';
  container.appendChild(title);

  for (const category in palette) {
    const subPalette = palette[category];
    const catHeader = document.createElement('h3');
    catHeader.innerText = category.charAt(0).toUpperCase() + category.slice(1);
    catHeader.style.marginTop = '20px';
    catHeader.style.fontSize = '1.2rem';
    catHeader.style.color = '#333';
    container.appendChild(catHeader);

    for (const key in subPalette) {
      const colorValue = subPalette[key];
      const box = createColorBox(`${category}.${key}`, colorValue);
      container.appendChild(box);
    }
  }

  document.body.appendChild(container);
}

renderPalette(theme.palette);
