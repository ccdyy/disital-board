// DOM元素
const searchInput = document.getElementById('productSearchInput');
const searchButton = document.getElementById('searchButton');
const mainContentContainer = document.getElementById('mainContent');
const priceComparisonSection = document.getElementById('priceComparisonSection');
const priceLinksContainer = document.getElementById('purchaseLinks');
const messageBox = document.getElementById('messageBox');
const messageText = document.getElementById('messageText');
const filterOptionsContainer = document.getElementById('filterOptions');
const filterByBrandBtn = document.getElementById('filterByBrandBtn');
const filterByCategoryBtn = document.getElementById('filterByCategoryBtn');
const listToolbar = document.getElementById('listToolbar');
const subFilterContainer = document.getElementById('subFilterContainer');
const sortDropdown = document.getElementById('sortDropdown');
const paginationContainer = document.getElementById('paginationContainer');

const allProducts = Object.values(mockProducts);
const allBrands = [...new Set(allProducts.map(p => p.brand))];
const allCategories = [...new Set(allProducts.map(p => p.category))];

// 状态变量
let currentFilterMode = 'brand'; 
let currentFilterItem = null; 
let currentSubFilterItem = null;
let currentSort = 'sales_desc';
let currentPage = 1;
const itemsPerPage = 8;
let currentSearchQuery = '';

// 切换筛选模式按钮的样式
function updateFilterButtonStyles() {
    if (filterByBrandBtn && filterByCategoryBtn) {
        filterByBrandBtn.classList.remove('active');
        filterByCategoryBtn.classList.remove('active');
        if (currentFilterMode === 'brand') {
            filterByBrandBtn.classList.add('active');
        } else {
            filterByCategoryBtn.classList.add('active');
        }
    }
}

// 事件监听：切换按品牌或品类筛选
filterByBrandBtn.addEventListener('click', () => {
    currentFilterMode = 'brand';
    currentFilterItem = null;
    currentSubFilterItem = null;
    currentPage = 1;
    renderFilters();
    renderMainContent(allProducts, '所有产品');
});

filterByCategoryBtn.addEventListener('click', () => {
    currentFilterMode = 'category';
    currentFilterItem = null;
    currentSubFilterItem = null;
    currentPage = 1;
    renderFilters();
    renderMainContent(allProducts, '所有产品');
});

// 事件监听：排序方式变化
sortDropdown.addEventListener('change', (e) => {
    currentSort = e.target.value;
    currentPage = 1;
    renderMainContent(getFilteredProducts(), getTitle());
});

// 显示/隐藏价格比较面板
function togglePriceComparisonSection(show) {
    if (!priceComparisonSection || !priceLinksContainer) return;
    if (show) {
        priceComparisonSection.classList.remove('hidden');
    } else {
        priceComparisonSection.classList.add('hidden');
        priceLinksContainer.innerHTML = '';
    }
}

// 显示消息提示
function showMessage(message, type = 'info') {
    if (!messageText || !messageBox || !mainContentContainer || !listToolbar || !paginationContainer) return;
    messageText.textContent = message;
    messageBox.classList.remove('hidden', 'info', 'error', 'success');
    messageBox.classList.add(type);
    mainContentContainer.innerHTML = '';
    togglePriceComparisonSection(false);
    listToolbar.classList.add('hidden');
    paginationContainer.classList.add('hidden');
}

// 隐藏消息提示
function hideMessage() {
    if (!messageBox) return;
    messageBox.classList.add('hidden');
}

// 获取当前内容的标题
function getTitle() {
    if (currentSearchQuery) {
        return `搜索结果: "${currentSearchQuery}"`;
    }
    if (!currentFilterItem) {
        return '所有产品';
    }
    if (currentSubFilterItem) {
        return `${currentFilterItem} - ${currentSubFilterItem} 产品列表`;
    }
    return `${currentFilterItem} 产品列表`;
}

// 获取经过筛选和排序后的产品列表
function getFilteredProducts() {
    let filteredProducts = allProducts;
    if (currentSearchQuery) {
            filteredProducts = filteredProducts.filter(product => 
            Object.keys(product).some(key => 
                typeof product[key] === 'string' && product[key].toLowerCase().includes(currentSearchQuery)
            )
        );
    } else if (currentFilterItem) {
        if (currentFilterMode === 'brand') {
            filteredProducts = filteredProducts.filter(p => p.brand === currentFilterItem);
        } else {
            filteredProducts = filteredProducts.filter(p => p.category === currentFilterItem);
        }
    }
    if (currentSubFilterItem) {
        if (currentFilterMode === 'brand') {
            filteredProducts = filteredProducts.filter(p => p.category === currentSubFilterItem);
        } else {
            filteredProducts = filteredProducts.filter(p => p.brand === currentSubFilterItem);
        }
    }
    
    filteredProducts.sort((a, b) => {
        switch (currentSort) {
            case 'price_asc':
                return a.price - b.price;
            case 'price_desc':
                return b.price - a.price;
            case 'releaseDate_desc':
                return new Date(b.releaseDate) - new Date(a.releaseDate);
            case 'sales_desc':
            default:
                return b.sales - a.sales;
        }
    });
    return filteredProducts;
}

// 渲染主内容区域（产品列表）
function renderMainContent(products, title) {
    if (!mainContentContainer || !listToolbar) return;
    hideMessage();
    togglePriceComparisonSection(false);
    listToolbar.classList.remove('hidden');
    
    if (products.length === 0) {
        showMessage('没有找到相关产品。', 'error');
        return;
    }

    renderSubFilters();

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsOnPage = products.slice(startIndex, endIndex);

    mainContentContainer.innerHTML = `
        <h3 class="content-title">${title}</h3>
        <div class="product-grid">
            ${productsOnPage.map(product => `
                <div class="product-card" data-product-key="${Object.keys(mockProducts).find(key => mockProducts[key] === product)}">
                    <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='https://placehold.co/400x300/E0E7FF/4F46E5?text=Image+Not+Found';">
                    <div>
                        <h3>${product.name}</h3>
                        <p class="description">${product.description}</p>
                    </div>
                    <p class="price">¥ ${product.price}</p>
                </div>
            `).join('')}
        </div>
    `;
    renderPagination(totalPages);

    // 监听产品卡片的点击事件，跳转到详情页
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const productKey = e.currentTarget.dataset.productKey;
            const product = mockProducts[productKey];
            if (product) {
                renderSingleProductDetail(product);
            }
        });
    });
}

// 渲染分页按钮
function renderPagination(totalPages) {
    if (!paginationContainer) return;
    paginationContainer.innerHTML = '';
    if (totalPages <= 1) {
        paginationContainer.classList.add('hidden');
        return;
    }
    paginationContainer.classList.remove('hidden');
    
    const prevButton = document.createElement('button');
    prevButton.textContent = '上一页';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderMainContent(getFilteredProducts(), getTitle());
        }
    });
    paginationContainer.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.className = currentPage === i ? 'active' : '';
        pageButton.addEventListener('click', () => {
            currentPage = i;
            renderMainContent(getFilteredProducts(), getTitle());
        });
        paginationContainer.appendChild(pageButton);
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = '下一页';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderMainContent(getFilteredProducts(), getTitle());
        }
    });
    paginationContainer.appendChild(nextButton);
}

// 渲染子筛选条件
function renderSubFilters() {
    if (!subFilterContainer) return;
    subFilterContainer.innerHTML = '';
    let subFilters = [];
    let filterTitle = '';
    if (currentFilterMode === 'brand' && currentFilterItem) {
        subFilters = [...new Set(allProducts.filter(p => p.brand === currentFilterItem).map(p => p.category))];
        filterTitle = '品类：';
    } else if (currentFilterMode === 'category' && currentFilterItem) {
        subFilters = [...new Set(allProducts.filter(p => p.category === currentFilterItem).map(p => p.brand))];
        filterTitle = '品牌：';
    } else {
        return;
    }

    subFilterContainer.innerHTML = `
        <span>${filterTitle}</span>
        ${subFilters.map(item => `
            <button class="sub-filter-option ${currentSubFilterItem === item ? 'active' : ''}" data-item="${item}">${item}</button>
        `).join('')}
    `;

    document.querySelectorAll('.sub-filter-option').forEach(button => {
        button.addEventListener('click', (e) => {
            currentSubFilterItem = e.target.dataset.item;
            currentPage = 1;
            renderMainContent(getFilteredProducts(), getTitle());
        });
    });
}

// 渲染单个产品详情页
function renderSingleProductDetail(product) {
    if (!mainContentContainer || !listToolbar || !paginationContainer) return;
    hideMessage();
    listToolbar.classList.add('hidden');
    paginationContainer.classList.add('hidden');
    
    // 合并主图和宣传图
    const allImages = [product.image, ...product.promotional_images];
    
    mainContentContainer.innerHTML = `
        <button id="backToListBtn" class="back-button">返回列表</button>
        
        <div class="product-detail-container">
            <!-- 左侧图集 -->
            <div class="product-detail-images">
                <div class="main-image-container">
                    <img id="mainImage" src="${allImages[0]}" alt="${product.name}" onerror="this.onerror=null;this.src='https://placehold.co/400x300/E0E7FF/4F46E5?text=Image+Not+Found';">
                </div>
                
                <!-- 缩略图导航 -->
                <div class="thumbnail-container">
                    ${allImages.map((img, index) => `
                        <img class="thumbnail ${index === 0 ? 'active' : ''}" src="${img}" alt="缩略图${index + 1}" data-index="${index}" onerror="this.onerror=null;this.src='https://placehold.co/100x100/E0E7FF/4F46E5?text=Image+Not+Found';">
                    `).join('')}
                </div>
            </div>
            
            <!-- 右侧产品信息 -->
            <div class="product-detail-info">
                <div class="product-title-description">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                </div>
                <div class="product-prices">
                    <h3>各平台最低价格</h3>
                    <ul class="price-list">
                        ${product.links.map(link => `
                            <li class="price-item">
                                <span class="platform">${link.platform}</span>
                                <span class="price">${link.price}</span>
                                <a href="${link.url}" target="_blank" class="buy-link">前往购买</a>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        </div>

        <div class="detail-section">
            <h3>关键参数</h3>
            <ul class="parameter-list">
                ${product.parameters.map(param => `
                    <li>
                        <span>${param.key}：</span>
                        <span>${param.value}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
    const backToListBtn = document.getElementById('backToListBtn');
    if (backToListBtn) {
        backToListBtn.addEventListener('click', () => {
            // 返回上一级列表
            renderMainContent(getFilteredProducts(), getTitle());
        });
    }
    
    // 图片功能实现
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // 缩略图点击事件
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // 更新主图
            mainImage.src = this.src;
            
            // 更新激活状态
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // 主图点击放大功能
    mainImage.addEventListener('click', function() {
        // 创建模态框
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        `;
        
        // 创建大图容器
        const imgContainer = document.createElement('div');
        imgContainer.style.cssText = `
            position: relative;
            max-width: 90%;
            max-height: 90%;
        `;
        
        // 创建大图
        const largeImg = document.createElement('img');
        largeImg.src = this.src;
        largeImg.style.cssText = `
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        `;
        
        // 创建关闭按钮
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.cssText = `
            position: absolute;
            top: -40px;
            right: 0;
            background: none;
            border: none;
            color: white;
            font-size: 3em;
            cursor: pointer;
        `;
        
        // 创建左右切换按钮
        const prevBtn = document.createElement('button');
        prevBtn.innerHTML = '&#10094;';
        prevBtn.style.cssText = `
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(255, 255, 255, 0.5);
            border: none;
            font-size: 2em;
            cursor: pointer;
            padding: 0.5em;
        `;
        
        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = '&#10095;';
        nextBtn.style.cssText = `
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(255, 255, 255, 0.5);
            border: none;
            font-size: 2em;
            cursor: pointer;
            padding: 0.5em;
        `;
        
        // 添加元素到模态框
        imgContainer.appendChild(largeImg);
        imgContainer.appendChild(closeBtn);
        imgContainer.appendChild(prevBtn);
        imgContainer.appendChild(nextBtn);
        modal.appendChild(imgContainer);
        document.body.appendChild(modal);
        
        // 当前图片索引
        let currentIndex = Array.from(thumbnails).findIndex(t => t.src === mainImage.src);
        
        // 更新大图
        function updateLargeImage(index) {
            currentIndex = index;
            largeImg.src = thumbnails[currentIndex].src;
        }
        
        // 切换到上一张
        prevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
            updateLargeImage(currentIndex);
        });
        
        // 切换到下一张
        nextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % thumbnails.length;
            updateLargeImage(currentIndex);
        });
        
        // 关闭模态框
        closeBtn.addEventListener('click', function() {
            document.body.removeChild(modal);
        });
        
        // 点击模态框背景关闭
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
        
        // 键盘事件
        function handleKeyDown(e) {
            if (e.key === 'Escape') {
                document.body.removeChild(modal);
            } else if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
                updateLargeImage(currentIndex);
            } else if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % thumbnails.length;
                updateLargeImage(currentIndex);
            }
        }
        
        document.addEventListener('keydown', handleKeyDown);
        
        // 移除键盘事件监听
        modal.addEventListener('remove', function() {
            document.removeEventListener('keydown', handleKeyDown);
        });
    });
}

// 渲染左侧筛选选项
function renderFilters() {
    if (!filterOptionsContainer) return;
    updateFilterButtonStyles();
    filterOptionsContainer.innerHTML = '';
    let filters = [];
    if (currentFilterMode === 'brand') {
        filters = allBrands;
    } else {
        filters = allCategories;
    }

    filterOptionsContainer.innerHTML = filters.map(item => `
        <button class="filter-option ${currentFilterItem === item ? 'active' : ''}" data-item="${item}">${item}</button>
    `).join('');

    document.querySelectorAll('.filter-option').forEach(button => {
        button.addEventListener('click', (e) => {
            const item = e.target.dataset.item;
            currentFilterItem = item;
            currentSubFilterItem = null;
            currentSearchQuery = '';
            currentPage = 1;
            renderFilters();
            renderMainContent(getFilteredProducts(), getTitle());
        });
    });
}

// 处理搜索功能
function handleSearch(query = null) {
    if (!searchInput) return;
    const searchQuery = query || searchInput.value.trim().toLowerCase();
    currentSearchQuery = searchQuery;
    
    // 重置筛选状态
    currentFilterItem = null;
    currentSubFilterItem = null;
    currentPage = 1;
    renderFilters();
    
    if (!searchQuery) {
        renderMainContent(allProducts, '所有产品');
        return;
    }
    showMessage(`正在搜索与“${searchQuery}”相关的产品...`, 'info');

    const searchResults = getFilteredProducts();
    
    setTimeout(() => {
        if (searchResults.length > 0) {
            renderMainContent(searchResults, getTitle());
        } else {
            showMessage('抱歉，未找到相关产品。请尝试其他关键词。', 'error');
        }
    }, 800);
}

// searchButton.addEventListener('click', () => handleSearch());

searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
});

// 页面加载时初始化
window.onload = () => {
    renderFilters();
    renderMainContent(allProducts, '所有产品');
};