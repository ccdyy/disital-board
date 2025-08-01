// 模拟数据
const mockProducts = {
    'macbook pro m3': {
        brand: 'Apple', category: '笔记本电脑', name: 'Apple MacBook Pro (M3)',
        description: '搭载强大 M3 芯片的 MacBook Pro，性能卓越，电池续航持久。',
        image: 'https://placehold.co/400x300/E0E7FF/4F46E5?text=MBP+M3', price: 12999, sales: 500, releaseDate: '2023-10-30',
        parameters: [{key: 'CPU', value: 'Apple M3 芯片'}], promotional_images: ['https://placehold.co/800x600/60A5FA/FFFFFF?text=宣传图1', 'https://placehold.co/800x600/4F46E5/FFFFFF?text=宣传图2', 'https://placehold.co/800x600/E0E7FF/4F46E5?text=宣传图3'],
        links: [{ platform: '京东', price: '¥ 12999.00', url: '#' }]
    },
    'iphone 15 pro': {
        brand: 'Apple', category: '手机', name: 'Apple iPhone 15 Pro',
        description: '钛金属机身，A17 Pro 芯片，灵动岛，强大影像系统。',
        image: 'https://placehold.co/400x300/E0E7FF/4F46E5?text=iPhone+15', price: 7999, sales: 1500, releaseDate: '2023-09-22',
        parameters: [{key: 'CPU', value: 'A17 Pro 芯片'}], promotional_images: ['https://placehold.co/800x600/60A5FA/FFFFFF?text=宣传图A', 'https://placehold.co/800x600/4F46E5/FFFFFF?text=宣传图B', 'https://placehold.co/800x600/E0E7FF/4F46E5?text=宣传图C'],
        links: [{ platform: '京东', price: '¥ 7999.00', url: '#' }]
    },
    '小米手机14 ultra': {
        brand: 'Xiaomi', category: '手机', name: '小米 14 Ultra',
        description: '徕卡光学全焦段四摄，小米澎湃 OS，旗舰影像与性能体验。',
        image: 'https://placehold.co/400x300/E0E7FF/4F46E5?text=小米14U', price: 6499, sales: 1200, releaseDate: '2024-02-22',
        parameters: [{key: '处理器', value: '第三代骁龙8'}], promotional_images: ['https://placehold.co/800x600/60A5FA/FFFFFF?text=宣传图X', 'https://placehold.co/800x600/4F46E5/FFFFFF?text=宣传图Y'],
        links: [{ platform: '小米商城', price: '¥ 6499.00', url: '#' }]
    },
    '华为matebook x pro': {
        brand: 'Huawei', category: '笔记本电脑', name: '华为 MateBook X Pro',
        description: '轻薄旗舰笔记本，超清全面屏，智慧互联，高效办公。',
        image: 'https://placehold.co/400x300/E0E7FF/4F46E5?text=MateBook+X', price: 9999, sales: 800, releaseDate: '2024-04-11',
        parameters: [{key: '处理器', value: 'Intel® Core™ Ultra 9'}], promotional_images: ['https://placehold.co/800x600/60A5FA/FFFFFF?text=宣传图-1', 'https://placehold.co/800x600/4F46E5/FFFFFF?text=宣传图-2'],
        links: [{ platform: '华为商城', price: '¥ 9999.00', url: '#' }]
    },
    '小米14': {
        brand: 'Xiaomi', category: '手机', name: '小米 14',
        description: '徕卡光学镜头，骁龙8 Gen3 处理器，澎湃 OS。',
        image: 'https://placehold.co/400x300/E0E7FF/4F46E5?text=小米14', price: 4999, sales: 1100, releaseDate: '2023-10-26',
        parameters: [{ key: '处理器', value: '骁龙8 Gen3'}], promotional_images: ['https://placehold.co/800x600/60A5FA/FFFFFF?text=宣传图A'],
        links: [{ platform: '小米商城', price: '¥ 4999.00', url: '#' }]
    },
    '华为mate60 pro': {
        brand: 'Huawei', category: '手机', name: '华为 Mate 60 Pro',
        description: '卫星通话，玄武架构，超可靠昆仑玻璃，突破性通信技术。',
        image: 'https://placehold.co/400x300/E0E7FF/4F46E5?text=Mate+60+P', price: 6999, sales: 1800, releaseDate: '2023-08-29',
        parameters: [{ key: '处理器', value: '麒麟 9000s'}], promotional_images: ['https://placehold.co/800x600/60A5FA/FFFFFF?text=宣传图B'],
        links: [{ platform: '华为商城', price: '¥ 6999.00', url: '#' }]
    },
    '戴尔xps 13': {
        brand: 'Dell', category: '笔记本电脑', name: '戴尔 XPS 13 Plus',
        description: '极简设计，超薄机身，无缝玻璃触控板，性能与美学完美结合。',
        image: 'https://placehold.co/400x300/E0E7FF/4F46E5?text=XPS+13', price: 10999, sales: 450, releaseDate: '2023-05-15',
        parameters: [{ key: '处理器', value: 'Intel® Core™ i7'}], promotional_images: ['https://placehold.co/800x600/60A5FA/FFFFFF?text=宣传图C'],
        links: [{ platform: '京东', price: '¥ 10999.00', url: '#' }]
    },
    '联想thinkpad x1 carbon': {
        brand: 'Lenovo', category: '笔记本电脑', name: '联想 ThinkPad X1 Carbon Gen 11',
        description: '轻薄商务旗舰，高强度碳纤维机身，稳定可靠，经典小红点。',
        image: 'https://placehold.co/400x300/E0E7FF/4F46E5?text=X1+Carbon', price: 11599, sales: 600, releaseDate: '2023-07-01',
        parameters: [{ key: '处理器', value: 'Intel® Core™ i7'}], promotional_images: ['https://placehold.co/800x600/60A5FA/FFFFFF?text=宣传图D'],
        links: [{ platform: '联想官网', price: '¥ 11599.00', url: '#' }]
    },
    '苹果ipad pro m4': {
        brand: 'Apple', category: '平板电脑', name: 'Apple iPad Pro (M4)',
        description: '搭载 M4 芯片的全新 iPad Pro，极致轻薄，双层串联 OLED 显示屏。',
        image: 'https://placehold.co/400x300/E0E7FF/4F46E5?text=iPad+M4', price: 8999, sales: 950, releaseDate: '2024-05-07',
        parameters: [{ key: 'CPU', value: 'Apple M4 芯片'}], promotional_images: ['https://placehold.co/800x600/60A5FA/FFFFFF?text=宣传图E'],
        links: [{ platform: '京东', price: '¥ 8999.00', url: '#' }]
    },
    '华为matepad pro 13.2': {
        brand: 'Huawei', category: '平板电脑', name: '华为 MatePad Pro 13.2英寸',
        description: '全球首款柔性OLED平板，星闪连接，超窄边框，极致轻薄。',
        image: 'https://placehold.co/400x300/E0E7FF/4F46E5?text=MatePad+P', price: 5499, sales: 700, releaseDate: '2023-09-25',
        parameters: [{ key: '处理器', value: '麒麟 9000s'}], promotional_images: ['https://placehold.co/800x600/60A5FA/FFFFFF?text=宣传图F'],
        links: [{ platform: '华为商城', price: '¥ 5499.00', url: '#' }]
    },
    '索尼wh-1000xm5': {
        brand: 'Sony', category: '耳机', name: '索尼 WH-1000XM5',
        description: '行业领先的降噪技术，超舒适佩戴，卓越音质，全新设计。',
        image: 'https://placehold.co/400x300/E0E7FF/4F46E5?text=WH-1000XM5', price: 2499, sales: 650, releaseDate: '2022-05-12',
        parameters: [{ key: '降噪', value: '集成处理器 V1'}], promotional_images: ['https://placehold.co/800x600/60A5FA/FFFFFF?text=宣传图G'],
        links: [{ platform: '京东', price: '¥ 2499.00', url: '#' }]
    },
    'airpods max': {
        brand: 'Apple', category: '耳机', name: 'Apple AirPods Max',
        description: '高保真音质，自适应均衡，主动降噪，空间音频，华丽设计。',
        image: 'https://placehold.co/400x300/E0E7FF/4F46E5?text=AirPods+Max', price: 4399, sales: 850, releaseDate: '2020-12-15',
        parameters: [{ key: '芯片', value: 'H1 芯片'}], promotional_images: ['https://placehold.co/800x600/60A5FA/FFFFFF?text=宣传图H'],
        links: [{ platform: 'Apple官网', price: '¥ 4399.00', url: '#' }]
    },
    '华为freebuds pro 3': {
        brand: 'Huawei', category: '耳机', name: '华为 FreeBuds Pro 3',
        description: '超感知原声双单元，星闪连接，主动降噪，全能听音旗舰。',
        image: 'https://placehold.co/400x300/E0E7FF/4F46E5?text=FreeBuds+P', price: 1499, sales: 750, releaseDate: '2023-09-14',
        parameters: [{ key: '降噪', value: '智慧动态降噪 3.0'}], promotional_images: ['https://placehold.co/800x600/60A5FA/FFFFFF?text=宣传图I'],
        links: [{ platform: '华为商城', price: '¥ 1499.00', url: '#' }]
    },
    '小米平板6s pro': {
        brand: 'Xiaomi', category: '平板电脑', name: '小米平板 6S Pro 12.4',
        description: '144Hz 7档可变刷新率，骁龙8 Gen2，超大电池，全能生产力工具。',
        image: 'https://placehold.co/400x300/E0E7FF/4F46E5?text=小米平板6S', price: 3499, sales: 600, releaseDate: '2024-02-22',
        parameters: [{ key: '处理器', value: '第二代骁龙8'}], promotional_images: ['https://placehold.co/800x600/60A5FA/FFFFFF?text=宣传图J'],
        links: [{ platform: '小米商城', price: '¥ 3499.00', url: '#' }]
    },
    '联想拯救者y9000p': {
        brand: 'Lenovo', category: '笔记本电脑', name: '联想 拯救者 Y9000P 2024',
        description: '电竞级性能，全新处理器，强劲散热系统，极致游戏体验。',
        image: 'https://placehold.co/400x300/E0E7FF/4F46E5?text=Y9000P', price: 10999, sales: 900, releaseDate: '2024-01-16',
        parameters: [{ key: '处理器', value: 'Intel® Core™ i9'}], promotional_images: ['https://placehold.co/800x600/60A5FA/FFFFFF?text=宣传图K'],
        links: [{ platform: '联想官网', price: '¥ 10999.00', url: '#' }]
    },
    'iphone 15': {
        brand: 'Apple', category: '手机', name: 'Apple iPhone 15',
        description: '灵动岛，A16 仿生芯片，USB-C 端口，全新超瓷晶面板。',
        image: 'https://placehold.co/400x300/E0E7FF/4F46E5?text=iPhone+15', price: 5999, sales: 2000, releaseDate: '2023-09-22',
        parameters: [{ key: '芯片', value: 'A16 仿生'}], promotional_images: ['https://placehold.co/800x600/60A5FA/FFFFFF?text=宣传图L'],
        links: [{ platform: '京东', price: '¥ 5999.00', url: '#' }]
    },
    'macbook air m2': {
        brand: 'Apple', category: '笔记本电脑', name: 'Apple MacBook Air (M2)',
        description: '轻薄设计，M2 芯片，液态视网膜显示屏，全天候电池续航。',
        image: 'https://placehold.co/400x300/E0E7FF/4F46E5?text=MBA+M2', price: 7999, sales: 1300, releaseDate: '2022-07-15',
        parameters: [{ key: '芯片', value: 'Apple M2'}], promotional_images: ['https://placehold.co/800x600/60A5FA/FFFFFF?text=宣传图M'],
        links: [{ platform: '京东', price: '¥ 7999.00', url: '#' }]
    },
    '三星galaxy s24 ultra': {
        brand: 'Samsung', category: '手机', name: '三星 Galaxy S24 Ultra',
        description: '集成 Galaxy AI，超视觉影像，钛金属边框，带来全新智能体验。',
        image: 'https://placehold.co/400x300/E0E7FF/4F46E5?text=S24+Ultra', price: 9999, sales: 1000, releaseDate: '2024-01-17',
        parameters: [{ key: '处理器', value: '第三代骁龙8 for Galaxy'}], promotional_images: ['https://placehold.co/800x600/60A5FA/FFFFFF?text=宣传图N'],
        links: [{ platform: '三星官网', price: '¥ 9999.00', url: '#' }]
    },
    '华为matebook 14': {
        brand: 'Huawei', category: '笔记本电脑', name: '华为 MateBook 14',
        description: '2.5K 触控全面屏，强大性能，轻薄机身，智慧互联。',
        image: 'https://placehold.co/400x300/E0E7FF/4F46E5?text=MateBook+14', price: 6999, sales: 750, releaseDate: '2023-11-10',
        parameters: [{ key: '处理器', value: 'Intel® Core™ i7'}], promotional_images: ['https://placehold.co/800x600/60A5FA/FFFFFF?text=宣传图O'],
        links: [{ platform: '华为商城', price: '¥ 6999.00', url: '#' }]
    }
};

// 导出模拟数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mockProducts;
}