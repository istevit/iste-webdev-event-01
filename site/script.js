/* ==========================================
   WEB DEVELOPMENT WORKSHOP - INTERACTIVE JAVASCRIPT
   ========================================== */

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function getRandomColor() {
    const colors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
        '#DDA0DD', '#98FB98', '#F0E68C', '#FF69B4', '#87CEEB',
        '#FFB6C1', '#20B2AA', '#87CEFA', '#DEB887', '#5F9EA0'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

function showMessage(element, message, isSuccess = true, duration = 3000) {
    element.textContent = message;
    element.style.color = isSuccess ? '#4CAF50' : '#f44336';
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
    
    setTimeout(() => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(-10px)';
    }, duration);
}

// ==========================================
// ANIMATIONS SECTION
// ==========================================

class AnimationController {
    constructor() {
        this.animatedElement = document.getElementById('animatedElement');
        this.animationType = document.getElementById('animationType');
        this.animationDuration = document.getElementById('animationDuration');
        this.animationTiming = document.getElementById('animationTiming');
        this.durationValue = document.getElementById('durationValue');
        
        this.playBtn = document.getElementById('playAnimation');
        this.pauseBtn = document.getElementById('pauseAnimation');
        this.resetBtn = document.getElementById('resetAnimation');
        
        this.init();
    }
    
    init() {
        if (!this.animatedElement) return;
        
        // Event listeners
        this.playBtn?.addEventListener('click', () => this.playAnimation());
        this.pauseBtn?.addEventListener('click', () => this.pauseAnimation());
        this.resetBtn?.addEventListener('click', () => this.resetAnimation());
        
        this.animationDuration?.addEventListener('input', (e) => {
            this.durationValue.textContent = e.target.value + 's';
            this.updateAnimation();
        });
        
        this.animationType?.addEventListener('change', () => this.updateAnimation());
        this.animationTiming?.addEventListener('change', () => this.updateAnimation());
    }
    
    playAnimation() {
        if (!this.animatedElement) return;
        
        const animationType = this.animationType?.value || 'bounce';
        const duration = this.animationDuration?.value || '2';
        const timing = this.animationTiming?.value || 'ease';
        
        this.animatedElement.style.animation = `${animationType} ${duration}s ${timing} infinite`;
        this.animatedElement.style.animationPlayState = 'running';
    }
    
    pauseAnimation() {
        if (!this.animatedElement) return;
        this.animatedElement.style.animationPlayState = 'paused';
    }
    
    resetAnimation() {
        if (!this.animatedElement) return;
        this.animatedElement.style.animation = 'none';
        // Force reflow
        this.animatedElement.offsetHeight;
        this.updateAnimation();
    }
    
    updateAnimation() {
        if (!this.animatedElement) return;
        
        const animationType = this.animationType?.value || 'bounce';
        const duration = this.animationDuration?.value || '2';
        const timing = this.animationTiming?.value || 'ease';
        
        this.animatedElement.style.animation = `${animationType} ${duration}s ${timing} infinite`;
    }
}

// ==========================================
// INTERACTIVE BUTTONS
// ==========================================

// Button text change
const changeTextBtn = document.getElementById('changeTextBtn');
if (changeTextBtn) {
    let clickCount = 0;
    const messages = [
        "You Clicked Me! 🎉",
        "Clicked Again! 🚀", 
        "Keep Going! ⭐",
        "Amazing! 🌟",
        "You're Awesome! 💫"
    ];
    
    changeTextBtn.addEventListener('click', () => {
        changeTextBtn.textContent = messages[clickCount % messages.length];
        changeTextBtn.style.background = `linear-gradient(45deg, ${getRandomColor()}, ${getRandomColor()})`;
        changeTextBtn.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
            changeTextBtn.style.transform = 'scale(1)';
        }, 200);
        
        clickCount++;
    });
}

// Form validation
const demoForm = document.getElementById('demoForm');
const formMessage = document.getElementById('formMessage');

demoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if(name && email) {
        formMessage.textContent = `Thanks ${name}! Your form has been submitted.`;
        formMessage.style.color = "green";
        demoForm.reset();
    } else {
        formMessage.textContent = "Please fill in all fields!";
        formMessage.style.color = "red";
    }
});

// Box Model Demo
const boxModelDemo = document.getElementById('boxModelDemo');
const marginSlider = document.getElementById('marginSlider');
const borderSlider = document.getElementById('borderSlider');
const paddingSlider = document.getElementById('paddingSlider');
const marginValue = document.getElementById('marginValue');
const borderValue = document.getElementById('borderValue');
const paddingValue = document.getElementById('paddingValue');

marginSlider?.addEventListener('input', (e) => {
    const value = e.target.value;
    marginValue.textContent = value;
    boxModelDemo.style.margin = `${value}px`;
});

borderSlider?.addEventListener('input', (e) => {
    const value = e.target.value;
    borderValue.textContent = value;
    boxModelDemo.style.borderWidth = `${value}px`;
});

paddingSlider?.addEventListener('input', (e) => {
    const value = e.target.value;
    paddingValue.textContent = value;
    boxModelDemo.style.padding = `${value}px`;
});

// DOM Manipulation Demo
const addElementBtn = document.getElementById('addElementBtn');
const changeColorBtn = document.getElementById('changeColorBtn');
const removeElementBtn = document.getElementById('removeElementBtn');
const domPlayground = document.getElementById('domPlayground');

let elementCounter = 1;

addElementBtn?.addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = `New element #${elementCounter} - Created by JavaScript!`;
    newElement.style.backgroundColor = getRandomColor();
    newElement.style.transition = 'all 0.3s ease';
    domPlayground.appendChild(newElement);
    elementCounter++;
});

changeColorBtn?.addEventListener('click', () => {
    const allElements = domPlayground.querySelectorAll('p');
    allElements.forEach(element => {
        element.style.backgroundColor = getRandomColor();
        element.style.transform = 'scale(1.05)';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 200);
    });
});

removeElementBtn?.addEventListener('click', () => {
    const allElements = domPlayground.querySelectorAll('p');
    if (allElements.length > 1) {
        const lastElement = allElements[allElements.length - 1];
        domPlayground.removeChild(lastElement);
    }
});

function getRandomColor() {
    const colors = ['#ffcdd2', '#f8bbd9', '#e1bee7', '#d1c4e9', '#c5cae9', '#bbdefb', '#b3e5fc', '#b2ebf2', '#b2dfdb', '#c8e6c9', '#dcedc8', '#f0f4c3', '#fff9c4', '#ffecb3', '#ffe0b2'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Event Handling Demo
const eventBox = document.getElementById('eventBox');
const keyboardInput = document.getElementById('keyboardInput');
const eventMessages = document.getElementById('eventMessages');

function addEventMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `event-message event-${type}`;
    messageDiv.textContent = `${new Date().toLocaleTimeString()}: ${message}`;
    eventMessages.appendChild(messageDiv);
    eventMessages.scrollTop = eventMessages.scrollHeight;
    
    // Keep only last 10 messages
    while (eventMessages.children.length > 10) {
        eventMessages.removeChild(eventMessages.firstChild);
    }
}

eventBox?.addEventListener('click', (e) => {
    addEventMessage(`Clicked at position (${e.clientX}, ${e.clientY})`, 'click');
    eventBox.style.backgroundColor = getRandomColor();
});

eventBox?.addEventListener('mouseenter', () => {
    addEventMessage('Mouse entered the box', 'hover');
});

eventBox?.addEventListener('mouseleave', () => {
    addEventMessage('Mouse left the box', 'hover');
});

eventBox?.addEventListener('dblclick', () => {
    addEventMessage('Double-clicked! Box is dancing!', 'click');
    eventBox.style.animation = 'pulse 0.5s ease-in-out';
    setTimeout(() => {
        eventBox.style.animation = '';
    }, 500);
});

keyboardInput?.addEventListener('keydown', (e) => {
    addEventMessage(`Key pressed: ${e.key} (Code: ${e.code})`, 'key');
});

// Flexbox Playground
const flexboxDemo = document.getElementById('flexboxDemo');
const flexDirection = document.getElementById('flexDirection');
const justifyContent = document.getElementById('justifyContent');
const alignItems = document.getElementById('alignItems');

flexDirection?.addEventListener('change', (e) => {
    flexboxDemo.style.flexDirection = e.target.value;
});

justifyContent?.addEventListener('change', (e) => {
    flexboxDemo.style.justifyContent = e.target.value;
});

alignItems?.addEventListener('change', (e) => {
    flexboxDemo.style.alignItems = e.target.value;
});

// Local Storage Demo
const noteInput = document.getElementById('noteInput');
const saveNoteBtn = document.getElementById('saveNoteBtn');
const loadNoteBtn = document.getElementById('loadNoteBtn');
const clearNoteBtn = document.getElementById('clearNoteBtn');
const storageMessage = document.getElementById('storageMessage');

function showStorageMessage(message, isSuccess = true) {
    storageMessage.textContent = message;
    storageMessage.style.color = isSuccess ? 'green' : 'red';
    setTimeout(() => {
        storageMessage.textContent = '';
    }, 3000);
}

saveNoteBtn?.addEventListener('click', () => {
    const note = noteInput.value.trim();
    if (note) {
        localStorage.setItem('userNote', note);
        showStorageMessage('Note saved successfully!');
    } else {
        showStorageMessage('Please write something first!', false);
    }
});

loadNoteBtn?.addEventListener('click', () => {
    const savedNote = localStorage.getItem('userNote');
    if (savedNote) {
        noteInput.value = savedNote;
        showStorageMessage('Note loaded successfully!');
    } else {
        showStorageMessage('No saved note found!', false);
    }
});

clearNoteBtn?.addEventListener('click', () => {
    localStorage.removeItem('userNote');
    noteInput.value = '';
    showStorageMessage('Note cleared!');
});

// Load saved note on page load
window.addEventListener('load', () => {
    const savedNote = localStorage.getItem('userNote');
    if (savedNote) {
        noteInput.value = savedNote;
    }
});

// Random Joke API
const jokeBtn = document.getElementById('jokeBtn');
const jokeDisplay = document.getElementById('jokeDisplay');

jokeBtn.addEventListener('click', async () => {
    jokeDisplay.textContent = "Fetching joke...";
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        const data = await response.json();
        if(data.type === "single") {
            jokeDisplay.textContent = data.joke;
        } else {
            jokeDisplay.textContent = `${data.setup} ... ${data.delivery}`;
        }
    } catch (error) {
        jokeDisplay.textContent = "Oops! Could not fetch a joke.";
    }
});

// Responsive Design Demo
const viewportSize = document.getElementById('viewportSize');
const deviceType = document.getElementById('deviceType');

function updateViewportInfo() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    viewportSize.textContent = `${width} x ${height}px`;
    
    if (width < 480) {
        deviceType.textContent = 'Mobile Phone';
    } else if (width < 768) {
        deviceType.textContent = 'Large Phone / Small Tablet';
    } else if (width < 1024) {
        deviceType.textContent = 'Tablet';
    } else {
        deviceType.textContent = 'Desktop / Laptop';
    }
}

updateViewportInfo();
window.addEventListener('resize', updateViewportInfo);

// Performance Demo
const slowLoadBtn = document.getElementById('slowLoadBtn');
const loadingIndicator = document.getElementById('loadingIndicator');
const loadedContent = document.getElementById('loadedContent');

slowLoadBtn?.addEventListener('click', async () => {
    // Show loading state
    loadingIndicator.className = 'loading-visible';
    loadedContent.style.display = 'none';
    slowLoadBtn.disabled = true;
    
    // Simulate slow loading (3 seconds)
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Hide loading and show content
    loadingIndicator.className = 'loading-hidden';
    loadedContent.style.display = 'block';
    loadedContent.innerHTML = `
        <h4>Content Loaded! ✅</h4>
        <p>This simulated a 3-second load time. In real applications:</p>
        <ul>
            <li>Show loading spinners for better UX</li>
            <li>Load critical content first</li>
            <li>Use skeleton screens for smooth transitions</li>
            <li>Optimize images and minimize file sizes</li>
        </ul>
    `;
    slowLoadBtn.disabled = false;
});

// Code Example Toggle Functions
function toggleCode(containerId) {
    const container = document.getElementById(containerId);
    const button = container.previousElementSibling;
    
    if (container.classList.contains('hidden')) {
        container.classList.remove('hidden');
        button.textContent = '📄 Hide Code Example';
        button.style.background = 'linear-gradient(45deg, #f44336, #e91e63)';
    } else {
        container.classList.add('hidden');
        button.textContent = '📄 Show Code Example';
        button.style.background = 'linear-gradient(45deg, #673ab7, #9c27b0)';
    }
}

function showTab(section, language) {
    // Hide all tab panels for this section
    const allPanels = document.querySelectorAll(`#${section}-html, #${section}-css, #${section}-js`);
    allPanels.forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Remove active class from all tab buttons in this section
    const container = document.getElementById(`${section}-code`);
    const allButtons = container.querySelectorAll('.tab-btn');
    allButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show the selected tab panel
    const targetPanel = document.getElementById(`${section}-${language}`);
    if (targetPanel) {
        targetPanel.classList.add('active');
    }
    
    // Add active class to the clicked button
    event.target.classList.add('active');
}

// Initialize code examples as hidden
document.addEventListener('DOMContentLoaded', () => {
    const allCodeContainers = document.querySelectorAll('.code-container');
    allCodeContainers.forEach(container => {
        container.classList.add('hidden');
    });
});

// ==========================================
// WEB BASICS SECTION
// ==========================================

class WebBasicsController {
    constructor() {
        this.initializeBasicsSection();
    }
    
    initializeBasicsSection() {
    // HTML Live Editor
    const htmlEditor = document.getElementById('htmlEditor');
    const updateHtmlBtn = document.getElementById('updateHtmlBtn');
    const htmlPreview = document.getElementById('htmlPreview');

    updateHtmlBtn?.addEventListener('click', () => {
        const htmlContent = htmlEditor.value;
        htmlPreview.innerHTML = htmlContent;
    });

    // CSS Playground
    const bgColorPicker = document.getElementById('bgColorPicker');
    const textColorPicker = document.getElementById('textColorPicker');
    const fontSizeSlider = document.getElementById('fontSizeSlider');
    const borderRadiusSlider = document.getElementById('borderRadiusSlider');
    const paddingSlider2 = document.getElementById('paddingSlider2');
    const cssTarget = document.getElementById('cssTarget');
    const cssOutput = document.getElementById('cssOutput');

    function updateCSS() {
        if (!cssTarget || !cssOutput) return;
        
        const bgColor = bgColorPicker?.value || '#4CAF50';
        const textColor = textColorPicker?.value || '#ffffff';
        const fontSize = fontSizeSlider?.value || '24';
        const borderRadius = borderRadiusSlider?.value || '8';
        const padding = paddingSlider2?.value || '20';

        // Apply styles to target
        cssTarget.style.backgroundColor = bgColor;
        cssTarget.style.color = textColor;
        cssTarget.style.fontSize = fontSize + 'px';
        cssTarget.style.borderRadius = borderRadius + 'px';
        cssTarget.style.padding = padding + 'px';

        // Update value displays
        const fontSizeValue = document.getElementById('fontSizeValue');
        const borderRadiusValue = document.getElementById('borderRadiusValue');
        const paddingValue2 = document.getElementById('paddingValue2');
        
        if (fontSizeValue) fontSizeValue.textContent = fontSize + 'px';
        if (borderRadiusValue) borderRadiusValue.textContent = borderRadius + 'px';
        if (paddingValue2) paddingValue2.textContent = padding + 'px';

        // Update CSS output
        cssOutput.textContent = `.element {
    background-color: ${bgColor};
    color: ${textColor};
    font-size: ${fontSize}px;
    border-radius: ${borderRadius}px;
    padding: ${padding}px;
}`;
    }

    // Add event listeners for CSS controls
    bgColorPicker?.addEventListener('input', updateCSS);
    textColorPicker?.addEventListener('input', updateCSS);
    fontSizeSlider?.addEventListener('input', updateCSS);
    borderRadiusSlider?.addEventListener('input', updateCSS);
    paddingSlider2?.addEventListener('input', updateCSS);

    // JavaScript Examples
    const showVariableBtn = document.getElementById('showVariableBtn');
    const variableOutput = document.getElementById('variableOutput');

    showVariableBtn?.addEventListener('click', () => {
        const name = "Rahul";
        const age = 20;
        const isStudent = true;
        const hobbies = ["coding", "reading", "gaming"];

        variableOutput.innerHTML = `
            <h6>JavaScript Variables:</h6>
            <p><strong>String:</strong> name = "${name}"</p>
            <p><strong>Number:</strong> age = ${age}</p>
            <p><strong>Boolean:</strong> isStudent = ${isStudent}</p>
            <p><strong>Array:</strong> hobbies = [${hobbies.map(h => `"${h}"`).join(', ')}]</p>
        `;
    });

    const changeContentBtn = document.getElementById('changeContentBtn');
    const changeableText = document.getElementById('changeableText');

    changeContentBtn?.addEventListener('click', () => {
        const messages = [
            "I've been changed by JavaScript! 🚀",
            "DOM manipulation is powerful! ⚡",
            "JavaScript controls everything! 🎯",
            "Click again for another message! 🔄"
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        changeableText.textContent = randomMessage;
        changeableText.style.color = getRandomColor();
    });

    const greetBtn = document.getElementById('greetBtn');
    const nameInput = document.getElementById('nameInput');
    const greetOutput = document.getElementById('greetOutput');

    greetBtn?.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name) {
            greetOutput.innerHTML = `
                <h6>Hello ${name}! 👋</h6>
                <p>Welcome to the world of JavaScript!</p>
            `;
            greetOutput.style.color = getRandomColor();
            nameInput.value = '';
        } else {
            greetOutput.innerHTML = `<p style="color: red;">Please enter your name first! 😊</p>`;
        }
    });

    // Dynamic list creation
    const addItemBtn = document.getElementById('addItemBtn');
    const clearItemsBtn = document.getElementById('clearItemsBtn');
    const dynamicList = document.getElementById('dynamicList');
    let itemCounter = 1;

    addItemBtn?.addEventListener('click', () => {
        const newItem = document.createElement('li');
        newItem.textContent = `Dynamic Item #${itemCounter}`;
        newItem.style.backgroundColor = getRandomColor();
        newItem.style.padding = '8px';
        newItem.style.margin = '5px 0';
        newItem.style.borderRadius = '4px';
        newItem.style.color = 'white';
        newItem.style.fontWeight = 'bold';
        dynamicList.appendChild(newItem);
        itemCounter++;
    });

    clearItemsBtn?.addEventListener('click', () => {
        dynamicList.innerHTML = '';
        itemCounter = 1;
    });

    // Todo App Integration Demo
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todoList = document.getElementById('todoList');

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText) {
            const todoItem = document.createElement('li');
            todoItem.className = 'todo-item';
            todoItem.innerHTML = `
                <span class="todo-text">${todoText}</span>
                <button class="delete-btn" onclick="deleteTodo(this)">❌</button>
            `;
            todoList.appendChild(todoItem);
            todoInput.value = '';
        }
    }

    addTodoBtn?.addEventListener('click', addTodo);
    todoInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    // Make deleteTodo available globally
    window.deleteTodo = function(button) {
        button.parentElement.remove();
    };
    }
}

// ==========================================
// ADDITIONAL ANIMATION INTERACTIONS
// ==========================================

// Add click interaction to animated element
document.addEventListener('click', function(e) {
    if (e.target.id === 'animatedElement') {
        e.target.style.background = `linear-gradient(45deg, ${getRandomColor()}, ${getRandomColor()})`;
        
        // Add a temporary shake effect
        e.target.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            // Restore original animation
            const controller = window.animationController;
            if (controller) {
                controller.updateAnimation();
            }
        }, 500);
    }
});

// Add hover effects to animation cards
document.querySelectorAll('.hover-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.card-icon');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(10deg)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.card-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// ==========================================
// INITIALIZATION
// ==========================================

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animation controller and store reference
    window.animationController = new AnimationController();
    
    // Initialize web basics controller
    new WebBasicsController();
    
    console.log('🚀 Web Development Workshop loaded successfully!');
    
    // Add welcome animation to header
    const header = document.querySelector('header h1');
    if (header) {
        header.style.animation = 'fadeInUp 1s ease-out';
    }
});
