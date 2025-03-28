function startLoading() {
    const loadingEl = document.getElementById('loading');
    const convertButton = document.querySelector('button[onclick="convertConfig()"]');
    const clearButton = document.getElementById('clearButton');
    const checkbox = document.getElementById('enableAdBlockAndIran');
    
    loadingEl.style.display = 'flex';
    convertButton.disabled = true;
    clearButton.disabled = true;
    checkbox.disabled = true;
}

function stopLoading() {
    const loadingEl = document.getElementById('loading');
    const convertButton = document.querySelector('button[onclick="convertConfig()"]');
    const clearButton = document.getElementById('clearButton');
    const checkbox = document.getElementById('enableAdBlockAndIran');
    
    loadingEl.style.display = 'none';
    convertButton.disabled = false;
    clearButton.disabled = false;
    checkbox.disabled = false;
}