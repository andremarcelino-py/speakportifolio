const products = [
    // Networking & Conectividade
    {
        nome: "Pacote de banda CLARO",
        preco: "R$ 299,90",
        quantidade: 1,
        categoria: "Networking & Conectividade",
        url: "https://www.claro.com.br/empresas/internet/internet-fixa/1-giga-pme?srsltid=AfmBOoohCwLPXHXOZwE4SumNo_Rj_tnuCx0pAe52oIL6jkPw7dJdkhrv"
    },
    {
        nome: "Pacote de banda VIVO",
        preco: "R$ 94,99",
        quantidade: 1,
        categoria: "Networking & Conectividade",
        url: "https://vivo.com.br/para-empresas/produtos-e-servicos/servicos-essenciais/ultrabanda-larga/internet-fibra"
    },
    {
        nome: "Roteador Core Cisco ASR 1001-X",
        preco: "R$ 15.000,00",
        quantidade: 2,
        categoria: "Networking & Conectividade",
        url: "https://produto.mercadolivre.com.br/MLB-4206200597-roteador-cisco-asr-1001-x-cinza-fonte-redundante-_JM"
    },
    {
        nome: "Switch Core Cisco Catalyst 9500-24Y4C",
        preco: "R$ 19.058,48",
        quantidade: 2,
        categoria: "Networking & Conectividade",
        url: "https://www.router-switch.com/c9500-24y4c-a.html"
    },
    {
        nome: "Switch Acesso Cisco Catalyst 2960X-24TS-L",
        preco: "R$ 668,81",
        quantidade: 23,
        categoria: "Networking & Conectividade",
        url: "https://networkoutlet.com/products/cisco-catalyst-2960-x-24-gige-4-x-1g-sfp-lan-base?variant=30323059621968"
    },
    {
        nome: "Access Point Intelbras AP 1350 AC-S",
        preco: "R$ 900,00",
        quantidade: 10,
        categoria: "Networking & Conectividade",
        url: "https://www.amazon.com.br/Corporativo-AP-1350-AC-S-Intelbras/dp/B0B644DLGX"
    },
    {
        nome: "Cabo de Rede Furukawa Cat6a",
        preco: "R$ 948,00",
        quantidade: 20,
        categoria: "Networking & Conectividade",
        url: "https://www.amazon.com.br/Caixa-Cabo-SohoPlus-Furukawa-Cobre/dp/B09QZY1K6J"
    },
    {
        nome: "Tomada RJ45 Keystone Furukawa",
        preco: "R$ 32,70",
        quantidade: 20,
        categoria: "Networking & Conectividade",
        url: "https://www.mercadolivre.com.br/keystone-furukawa-cat6-sohoplus/p/MLB36238932"
    },
    {
        nome: "Conector RJ45 Furukawa",
        preco: "R$ 110,00",
        quantidade: 50,
        categoria: "Networking & Conectividade",
        url: "https://www.amazon.com.br/Conector-Rj45-Furukawa-Macho-Original/dp/B09VB6X7B3"
    },

    // Infraestrutura & Periféricos
    {
        nome: "Mini Rack Padrão 19\" 8U x 470mm",
        preco: "R$ 312,90",
        quantidade: 23,
        categoria: "Infraestrutura & Periféricos",
        url: "https://www.mercadolivre.com.br/mini-rack-padro-19-pol-8u-x-470mm-de-parede/p/MLB53044415"
    },
    {
        nome: "Rack APC NetShelter SX 42U AR3350",
        preco: "R$ 14.230,00",
        quantidade: 1,
        categoria: "Infraestrutura & Periféricos",
        url: "https://www.manchesterautomacao.com.br/rack-apc-19-netshelter-sx-42u-ar3350"
    },
    {
        nome: "Patch Panel",
        preco: "R$ 1.159,00",
        quantidade: 24,
        categoria: "Infraestrutura & Periféricos",
        url: "https://www.amazon.com.br/SWITCH-GERENCIÁVEL-GIGABIT-JETSTREAM-TL-SG3428/dp/B08MH7LN99"
    },
    {
        nome : "Notebook Acer ANV15-51-73E9 (Nitro V 15)",
        preco: "R$ 5.039,10",
        quantidade: 244,
        categoria: "Infraestrutura & Periféricos",
        url: "https://www.mercadolivre.com.br/notebook-acer-anv15-51-73e9-ci7-16gb-512gb-ssd-rtx3050/p/MLB52117373"
    },
    {
        nome: "Impressora HP LaserJet Pro MFP 4103FDW",
        preco: "R$ 3.099,00",
        quantidade: 7,
        categoria: "Infraestrutura & Periféricos",
        url: "https://www.amazon.com.br/MULTIFUNCIONAL-HP-LASER-4103FDW-DUPLEX/dp/B0BSNXG8KV"
    },

    // Servidores
    {
        nome: "Servidor de E-mail Dell PowerEdge R640",
        preco: "R$ 17.999,00",
        quantidade: 1,
        categoria: "Servidores",
        url: "https://www.mercadolivre.com.br/servidor-dell-poweredge-r640-xeon-6134-256gb-hd-300gb/up/MLBU3337155524"
    },
    {
        nome: "Servidor DNS/DHCP Dell PowerEdge R550",
        preco: "R$ 26.620,00",
        quantidade: 1,
        categoria: "Servidores",
        url: "https://www.mercadolivre.com.br/servidor-dell-poweredge-r550-1x-4309y-8c-32gb-hdd-4tb/up/MLBU3392532744"
    },
    {
        nome: "Servidor SysAdmin Dell PowerEdge R650xs",
        preco: "R$ 40.542,02",
        quantidade: 1,
        categoria: "Servidores",
        url: "https://www.mercadolivre.com.br/servidor-dell-r650xs-xeon-8c-16gb-8tb-raid-win-2022/up/MLBU3297956681"
    },
    {
        nome: "Synology RackStation RS2423RP+",
        preco: "R$ 39.900,00",
        quantidade: 1,
        categoria: "Servidores",
        url: "https://www.storagehouse.com.br/synology-rs2423rp-plus?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&srsltid=AfmBOooBUVZiktYbqRQT7wxwd1IhmCy7eYGHcffI2zozpqKe_F5shtx3v1k"
    },

    {
        nome: "NVR 16 canais Gravador Hikvision DS-7616NI-Q2-4k",
        preco: "R$ 1.399,00",
        quantidade: 1,
        categoria: "Networking & Conectividade",
        url: "https://www.mercadolivre.com.br/nvr-16-canais-gravador-hikvision-ds-7616ni-q2-4k/p/MLB21553117?matt_tool=18956390&pdp_filters=item_id%3AMLB5823387374&from=gshop&utm_source=chatgpt.com"
    },
    {
        "nome": "Switch TP-Link 8 Portas Gigabit PoE+ (126W) - TL-SG1008MP",
        "preco": "R$ 696,00",
        "quantidade": 1,
        "categoria": "Networking & Conectividade",
        "url": "https://www.kabum.com.br/produto/202920/switch-tp-link-8-portas-10-100-1000-poe-gigabit-rack-mesa-tl-sg1008mp"
    },
    {
        "nome": "Câmera IP Bullet Intelbras VIP 1230 B G5 (2MP) PoE ONVIF",
        "preco": "R$ 287,00",
        "quantidade": 6,
        "categoria": "Networking & Conectividade",
        "url": "https://www.mercadolivre.com.br/intelbras-serie-1000-vip-1230-b-g5-branco-1-unidade/p/MLB45819134?product_trigger_id=MLB47098049&picker=true&quantity=1"
    }
];
