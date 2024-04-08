document.addEventListener("DOMContentLoaded", function() {
    // Default content to display when the page loads
    displayContent("home");

    // Event listener for nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const section = this.getAttribute('data-section');
            setActiveNavLink(section);
            updateSidebar(section);
            displayContent(section);
        });
    });

    // Event listener for sidebar links
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('sidebar-link')) {
            event.preventDefault();
            const content = event.target.getAttribute('data-content');
            displayContent(content);
        }
    });

    function setActiveNavLink(section) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`.nav-link[data-section="${section}"]`).classList.add('active');
    }

    function updateSidebar(subject) {
        const sidebar = document.querySelector('.side-bar');
        const sidebarContent = {
            home:[
                { label: 'home',content: ''},
                
            ],
            computerNetworks: [
                { label: 'Introduction', content: 'introduction-cn' },
                { label: 'Basics', content: 'basics-cn' },
                { label: 'APRANET', content: 'apranet-cn' },
                { label: 'OSI Reference Model', content: 'osi-cn' },
                { label: 'Switching', content: 'introduction' },
                { label: 'HTTP(HyperText MarkUp Protocol)', content: 'basics' },
                { label: 'WWW', content: 'apranet' },
                { label: 'FTP', content: 'osi' },
                { label: 'DNS', content: 'introductionos' },
                { label: 'TELNET', content: 'basics' },
                { label: 'Email', content: 'apranet' },
                { label: 'OSI Reference Model', content: 'osi' },
                { label: 'Introduction', content: 'introductionos' },
                { label: 'Basics', content: 'basics' },
                { label: 'APRANET', content: 'apranet' },
               
                // Add more links as needed
            ],
            operatingSystem: [
                // Add operating system links
                { label: 'Introduction', content: 'introduction' },
                { label: 'Basics', content: 'basics' },
                { label: 'APRANET', content: 'apranet' },
                { label: 'OSI Reference Model', content: 'osi' },
                { label: 'Introduction', content: 'introductionos' },
                { label: 'Basics', content: 'basics' },
                { label: 'APRANET', content: 'apranet' },
                { label: 'OSI Reference Model', content: 'osi' },
                { label: 'Introduction', content: 'introductionos' },
                { label: 'Basics', content: 'basics' },
                { label: 'APRANET', content: 'apranet' },
                { label: 'OSI Reference Model', content: 'osi' },
            ],
            artificialIntelligence: [
                // Add AI links
                { label: 'Introduction', content: 'introduction' },
                { label: 'Basics', content: 'basics' },
                { label: 'APRANET', content: 'apranet' },
                { label: 'OSI Reference Model', content: 'osi' },
                { label: 'Introduction', content: 'introduction' },
                { label: 'Ba', content: 'basics' },
                { label: 'APRANET', content: 'apranet' },
                { label: 'OSI Reference Model', content: 'osi' },
            ]
            cloudComputing: [
                { label : 'Introduction', content:'introduction-cc'},
            ]
            // Add more subjects as needed
        };

        if (sidebarContent.hasOwnProperty(subject)) {
            const links = sidebarContent[subject].map(item => {
                return `<a href="#" class="sidebar-link" data-content="${item.content}">${item.label}</a>`;
            }).join('');
            sidebar.querySelector('.col1').innerHTML = links;
        } else {
            sidebar.querySelector('.col1').innerHTML = '';
        }
    }

    function displayContent(section) {
        const contentContainer = document.getElementById('content');
        switch (section) {
            case 'home':
                contentContainer.innerHTML = '<h1>Let\'s begin</h1><p>This is the home content.</p>';
                hideSidebar();
                break;
            case 'computerNetworks':
                contentContainer.innerHTML = '<h1>Computer Networks</h1><p>This is the computer networks content </p> </h1>';
                displaySidebar();
                break;
            case 'operatingSystem':
                contentContainer.innerHTML = '<h1>Operating System</h1><p>This is the operating system content.</p>';
                displaySidebar();
                break;
            case 'artificialIntelligence':
                contentContainer.innerHTML = '<h1>Artificial Intelligence</h1><p>This is the artificial intelligence content.</p>';
                displaySidebar();
                break;
            case 'introduction-cn':
                contentContainer.innerHTML = '<h1>Introduction</h1><p>This is the introduction for Computer Networks.</p>';
                break;
            case 'introduction-os':
                contentContainer.innerHTML = '<h1>Introduction</h1><p>This is the introduction for Operating Systems</p>';
                break;
            case 'basics-cn':
                contentContainer.innerHTML = '<p>Computer Networking is the practice of connecting computers together to enable communication and data exchange between them.Computer Networking is the practice of connecting computers together to enable communication and data exchange between them. In general, Computer Network is a collection of two or more computers. It helps users to communicate more easily. In this article, we are going to discuss the basics which everyone must know before going deep into Computer Networking. </p>';
            case 'introduction-cc':
                contentContainer.innerHTML = '<p>Cloud Computing is one of the predominant techonology that we are using regularly in day to day life</p>';
                break;

            // Add other cases for sidebar links as required
            default:
               contentContainer.innerHTML = '<h1>Welcome</h1>';
        }
    }

    function displaySidebar() {
        document.querySelector('.side-bar').style.display = 'flex';
    }

    function hideSidebar() {
        document.querySelector('.side-bar').style.display = 'none';
    }
});
