// Mock Data
const employeeData = {
    terreo: [
        { department: 'RH - Recrutamento', count: 10 },
        { department: 'Vendas', count: 20 },
        { department: 'Desenvolvimento', count: 50 },
        { department: 'Sala de Testes', count: 9 },
        { department: 'Administração', count: 34 },
        { department: 'Recepção', count: 4 }

    ],
    primeiroAndar: [
        { department: 'Jurídico', count: 5 },
        { department: 'Fiscal & Tributário', count: 10 },
        { department: 'Treinamento', count: 10 },
        { department: 'Planejamento', count: 7 },
        { department: 'Contabilidade', count: 15 },
        { department: 'Marketing', count: 15 },
        { department: 'Diretoria/Sala Executiva', count: 15 }
    ],
    subsolo: [
        { department: 'Logística Transporte', count: 5 },
        { department: 'Suporte / TI', count: 15 },
        { department: 'Logística Estoque', count: 7 },
        { department: 'Data Center', count: 6 }
    ]
};

const infrastructureProducts = [
    {
        category: 'Networking & Conectividade',
        items: [
            { name: 'Pacote de banda CLARO', spec: '1G', quantity: 1 },
            { name: 'Pacote de banda VIVO', spec: '600MG', quantity: 1 },
            { name: 'Roteador Core Cisco ASR 1001-X', spec: 'Cinza, Fonte redundante', quantity: 2 },
            { name: 'Switch Core Cisco Catalyst 9500-24Y4C', spec: '24Y4C', quantity: 2 },
            { name: 'Switch Acesso Cisco Catalyst 2960X-24TS-L', spec: '24 GigE, 4x 1G SFP, LAN Base', quantity: 23 },
            { name: 'Access Point Intelbras AP 1350 AC-S', spec: 'Corporativo WiFi', quantity: 1 },
            { name: 'Switch Gerenciável TP-Link TL-SG3428', spec: 'Gigabit Jetstream', quantity: 1 },
            { name: 'Cabo de Rede Furukawa Cat6a', spec: 'Gigalan Cat6 305m', quantity: 1 },
            { name: 'Tomada RJ45 Keystone Furukawa', spec: 'Cat6', quantity: 1 },
            { name: 'Conector RJ45 Furukawa', spec: 'Plug Cat6', quantity: 25 }
        ]
    },
    {
        category: 'Servidores',
        items: [
            { name: 'Servidor de E-mail Dell PowerEdge R640', spec: 'Xeon 6134, 256GB RAM, 300GB HDD', quantity: 1 },
            { name: 'Servidor DNS/DHCP Dell PowerEdge R550', spec: '1x 4309Y (8-Core), 32GB RAM, 4TB HDD', quantity: 1 },
            { name: 'Servidor SysAdmin Dell PowerEdge R650xs', spec: 'Xeon 8-Core, 16GB RAM, 8TB HDD, RAID, Win Server 2022', quantity: 1 }
        ]
    },
    {
        category: 'Infraestrutura & Periféricos',
        items: [
            { name: 'Mini Rack Padrão 19" 8U x 470mm', spec: 'De Parede', quantity: 2 },
            { name: 'Rack APC NetShelter SX 42U AR3350', spec: '19" Professional', quantity: 1 },
            { name: 'Patch Panel', spec: '24p RJ45', quantity: 2 },
            { name: 'Notebook Dell Inspiron', spec: 'Computador de Usuário', quantity: 4 },
            { name: 'Impressora HP LaserJet Pro MFP 4103FDW', spec: 'Multifuncional, Duplex', quantity: 5 }
        ]
    }
];

const floorPlans = [
    {
        name: 'Térreo',
        image: 'tr.png'
    },
    {
        name: '1º Andar',
        image: '1r.png'
    },
    {
        name: 'Subsolo',
        image: 'sr.png'
    }
];

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light-mode';
body.className = savedTheme;

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    }
});

// Tabs functionality
const tabTriggers = document.querySelectorAll('.tab-trigger');
const tabContents = document.querySelectorAll('.tab-content');

tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const targetTab = trigger.getAttribute('data-tab');
        
        // Remove active class from all triggers and contents
        tabTriggers.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked trigger and corresponding content
        trigger.classList.add('active');
        document.getElementById(`tab-${targetTab}`).classList.add('active');
    });
});

// Render Employee Cards
function renderEmployeeCards() {
    const terreoGrid = document.getElementById('terreo-grid');
    const primeiroGrid = document.getElementById('primeiro-grid');
    const subsoloGrid = document.getElementById('subsolo-grid');

    employeeData.terreo.forEach(dept => {
        terreoGrid.innerHTML += createDeptCard(dept);
    });

    employeeData.primeiroAndar.forEach(dept => {
        primeiroGrid.innerHTML += createDeptCard(dept);
    });

    employeeData.subsolo.forEach(dept => {
        subsoloGrid.innerHTML += createDeptCard(dept);
    });
}

function createDeptCard(dept) {
    return `
        <div class="dept-card">
            <div class="dept-name">${dept.department}</div>
            <div class="dept-count">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span class="count-number">${dept.count}</span>
                <span class="count-label">colaboradores</span>
            </div>
        </div>
    `;
}

// Floor Plans Navigation
const floorBtns = document.querySelectorAll('.floor-btn');
const floorImage = document.getElementById('floor-image');

floorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const floorIndex = parseInt(btn.getAttribute('data-floor'));
        
        // Remove active class from all buttons
        floorBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Update floor image
        floorImage.src = floorPlans[floorIndex].image;
        floorImage.alt = floorPlans[floorIndex].name;
    });
});

// Carregar products.js (certifique-se de que products.js está incluído antes deste script)

// Função auxiliar para buscar produto pelo nome (versão aprimorada)
function findProductByName(name) {
    if (!window.products) return null;

    const normalize = str => str
        ? str.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]/g, '')
        : '';

    const nName = normalize(name);

    // Busca por similaridade parcial
    return products.find(p => {
        const pName = normalize(p.nome);
        return nName.includes(pName) || pName.includes(nName);
    });
}
// Render Infrastructure Tables
function renderInfrastructureTables() {
    const container = document.getElementById('infrastructure-tables');
    container.innerHTML = "";

    const categorias = [
        "Networking & Conectividade",
        "Infraestrutura & Periféricos",
        "Servidores"
    ];

    categorias.forEach(categoria => {
        const produtosCategoria = products.filter(p => p.categoria === categoria);
        if (produtosCategoria.length === 0) return;

        container.innerHTML += `
            <div class="infra-category">
                <div class="category-header">
                    <h3 class="category-title">${categoria}</h3>
                </div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Equipamento</th>
                                <th>Preço Unitário</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${produtosCategoria.map(prod => `
                                <tr>
                                    <td class="font-medium">
                                        <a href="${prod.url}" target="_blank" rel="noopener noreferrer" class="product-link">${prod.nome}</a>
                                    </td>
                                    <td>${prod.preco}</td>
                                    <td>${prod.quantidade !== undefined ? prod.quantidade : '-'}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    });

    // Valor total destacado
    container.innerHTML += `
        <div class="total-gasto-destaque">
            <span class="total-label">Total Investido:</span>
            <span class="total-valor">R$  R$ 1.492.334,40</span>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.btn.btn-primary');
    if (btn) {
        btn.onclick = function (e) {
            e.preventDefault();
            window.location.href = 'https://speakiz.netlify.app';
        };
    }
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    renderEmployeeCards();
    // ...outros inits...
    renderInfrastructureTables();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
