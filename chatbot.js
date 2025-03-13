// Chatbot functionality
document.addEventListener("DOMContentLoaded", () => {
    const chatbotIcon = document.getElementById('chatbot-icon');
    const chatbotBox = document.getElementById('chatbot-box');
    const closeBtn = document.getElementById('close-chatbot');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');
    
    // Portfolio data from HTML for the chatbot to use
    const portfolioData = {
        name: "Sharleen Shabangu",
        roles: ["Software Developer", "App Developer", "Gamer"],
        about: "A dedicated young individual passionate about technology. Currently pursuing Masters in Information Technology at the Vaal University of technology. 3x Cum Laude Graduate in Information Technology.",
        education: [
            {
                year: "2025",
                degree: "Master of Information And Communication Technology",
                institution: "Vaal University of Technology",
                description: "Focus is on a Research topic I have chosen for myself"
            },
            {
                year: "2024",
                degree: "Post Graduate Diploma in Information Technology",
                institution: "Vaal University of Technology",
                description: "Modules: Business Intelligence, Software Engineering, Database Administration"
            },
            {
                year: "2022",
                degree: "Advanced Diploma in Information Technology",
                institution: "Vaal University of Technology",
                description: "Majored in Artificial Intelligence and Computer Security. AI Skills: ML, NPL. Computer Security Skills: Cryptography, Knowledge of Operating Systems and Virtual Machines, Malware and Security"
            },
            {
                year: "2018 - 2021",
                degree: "Diploma in Information Technology",
                institution: "Vaal University of Technology",
                description: "Majored in Development Software. Language Focus: Java"
            }
        ],
        experience: [
            {
                year: "2025 - Present",
                role: "Software Developer",
                company: "Capaciti",
                description: "Front-end development, Back-end development, Databases"
            },
            {
                year: "April 2024 - September 2024",
                role: "Consultant",
                company: "Clover S.A (PTY) LTD"
            },
            {
                year: "2023 - April 2024",
                role: "IT Trainee",
                company: "Clover S.A (PTY) LTD"
            },
            {
                year: "2021 - 2022",
                role: "Quality Assurer",
                company: "Gauteng Department of Education",
                description: "Counting the scripts and checking if marks are correctly allocated in the marksheets. Scanning and packing of the scripts after accurately assuring that everything is allocated correctly"
            }
        ],
        skills: ["HTML5", "CSS3", "JavaScript", "Java", "SQL", "Python", "VB.NET"],
        certifications: {
            IBM: [
                "Data Science & Analytics Intro",
                "Predict Employee Turnover using IBM Watson Studio",
                "Identify Potential Repeat Customers for Your Business",
                "Python",
                "Getting Started with Enterprise Data Science",
                "Cybersecurity Intro",
                "Identify and Investigate Cybersecurity Threats",
                "Protect Your Sensitive Data Against Threats",
                "Add Authentication to your Web Apps using IBM Cloud App ID"
            ],
            GreatLearning: [
                "Introduction to JavaScript",
                "UI / UX for Beginners",
                "SQL Triggers for Beginners",
                "Programming Basics",
                "Android Application Development",
                "Java Programming",
                "Front End Development - HTML",
                "Microsoft Azure Application"
            ],
            Coursera: [
                "Crash Course on Python"
            ]
        },
        contact: {
            location: "Johannesburg, Gauteng",
            email: "sharleensshabangu@gmail.com",
            linkedin: "linkedin.com/in/sharleen-shabangu-a6a1b220a"
        }
    };
    
    // Toggle chatbot visibility
    chatbotIcon.addEventListener('click', () => {
        chatbotBox.classList.add('active');
    });
    
    closeBtn.addEventListener('click', () => {
        chatbotBox.classList.remove('active');
    });
    
    // Send message function
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message !== '') {
            // Add user message to chat
            appendMessage('user', message);
            
            // Generate and add bot response
            setTimeout(() => {
                const response = generateResponse(message);
                appendMessage('bot', response);
            }, 500);
            
            // Clear input
            chatInput.value = '';
        }
    }
    
    // Send button click event
    sendBtn.addEventListener('click', sendMessage);
    
    // Enter key press event
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Append a message to the chat
    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add(sender + '-message');
        
        const contentElement = document.createElement('div');
        contentElement.classList.add('message-content');
        contentElement.textContent = message;
        
        messageElement.appendChild(contentElement);
        chatMessages.appendChild(messageElement);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Generate response based on user input
    function generateResponse(userInput) {
        const input = userInput.toLowerCase();
        
        // Education related queries
        if (input.includes('education') || input.includes('study') || input.includes('degree') || input.includes('qualification')) {
            const educationInfo = portfolioData.education.map(edu => 
                `${edu.year}: ${edu.degree} from ${edu.institution}`
            ).join('\n');
            
            return `Here's Sharleen's education background:\n${educationInfo}`;
        }
        
        // Experience related queries
        else if (input.includes('experience') || input.includes('work') || input.includes('job') || input.includes('career')) {
            const experienceInfo = portfolioData.experience.map(exp => 
                `${exp.year}: ${exp.role} at ${exp.company}`
            ).join('\n');
            
            return `Here's Sharleen's work experience:\n${experienceInfo}`;
        }
        
        // Skills related queries
        else if (input.includes('skill') || input.includes('programming') || input.includes('language') || input.includes('tech')) {
            return `Sharleen's skills include: ${portfolioData.skills.join(', ')}`;
        }
        
        // Certification related queries
        else if (input.includes('certification') || input.includes('certificate')) {
            let certText = "Sharleen has various certifications including:\n";
            
            if (input.includes('ibm')) {
                certText = `IBM certifications: ${portfolioData.certifications.IBM.join(', ')}`;
            } else if (input.includes('great learning') || input.includes('greatlearning')) {
                certText = `Great Learning certifications: ${portfolioData.certifications.GreatLearning.join(', ')}`;
            } else if (input.includes('coursera')) {
                certText = `Coursera certifications: ${portfolioData.certifications.Coursera.join(', ')}`;
            } else {
                certText += `From IBM (${portfolioData.certifications.IBM.length}), Great Learning (${portfolioData.certifications.GreatLearning.length}), and Coursera (${portfolioData.certifications.Coursera.length}). Ask about specific providers for details!`;
            }
            
            return certText;
        }
        
        // Contact related queries
        else if (input.includes('contact') || input.includes('email') || input.includes('linkedin') || input.includes('location')) {
            return `Contact Information:
                   Email: ${portfolioData.contact.email}
                   Location: ${portfolioData.contact.location}
                   LinkedIn: ${portfolioData.contact.linkedin}`;
        }
        
        // About queries
        else if (input.includes('about') || input.includes('who is') || input.includes('tell me about')) {
            return portfolioData.about;
        }
        
        // General greeting
        else if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
            return `Hello! I'm Sharleen's virtual assistant. How can I help you today? You can ask about her education, experience, skills, or certifications.`;
        }
        
        // Help
        else if (input.includes('help') || input.includes('what can you')) {
            return `You can ask me about:
                   - Sharleen's education background
                   - Work experience
                   - Skills and technologies
                   - Certifications from IBM, Great Learning, and Coursera
                   - Contact information`;
        }
        
        // Default response
        else {
            return `I'm not sure I understand that question. You can ask about Sharleen's education, experience, skills, certifications, or contact information. Type "help" to see what I can assist with.`;
        }
    }
});