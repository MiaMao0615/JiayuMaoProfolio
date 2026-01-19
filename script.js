// 移动端导航菜单切换
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // 点击菜单项后关闭移动端菜单
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }

    // 滚动时高亮导航项
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 技能进度条动画（当滚动到技能区域时触发）
    const skillsSection = document.querySelector('.skills');
    const skillBars = document.querySelectorAll('.skill-progress');

    function animateSkills() {
        if (!skillsSection || skillBars.length === 0) return;

        const sectionTop = skillsSection.offsetTop;
        const sectionHeight = skillsSection.offsetHeight;
        const scrollY = window.pageYOffset;
        const windowHeight = window.innerHeight;

        // 当技能区域进入视野时触发动画
        if (scrollY + windowHeight > sectionTop + 100) {
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }
    }

    // 使用 Intersection Observer 优化性能
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillBars.forEach(bar => {
                        const width = bar.getAttribute('data-width') || bar.style.width;
                        bar.style.width = width;
                    });
                }
            });
        }, {
            threshold: 0.2
        });

        if (skillsSection) {
            observer.observe(skillsSection);
        }
    } else {
        // 降级方案
        window.addEventListener('scroll', animateSkills);
        animateSkills(); // 初始检查
    }

    // 为技能进度条添加 data-width 属性
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.setAttribute('data-width', width);
    });

    // 页面加载时的淡入效果
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');

    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }

    if (heroImage) {
        heroImage.style.opacity = '0';
        setTimeout(() => {
            heroImage.style.transition = 'all 1s ease';
            heroImage.style.opacity = '1';
        }, 300);
    }
});

// 添加导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '#FFFFFF';
        navbar.style.backdropFilter = 'none';
    }
});

// Toggle project details
function toggleProjectDetails(projectId) {
    const projectElement = document.getElementById(projectId);
    const detailsElement = document.getElementById(projectId.replace('project-', 'details-'));
    const topButton = projectElement.querySelector('.project-simple-content .btn-view-details');
    const bottomButton = detailsElement ? detailsElement.querySelector('.details-footer .btn-view-details') : null;
    
    if (detailsElement.style.display === 'none' || !detailsElement.style.display) {
        // 展开详情
        detailsElement.style.display = 'block';
        if (topButton) {
            topButton.style.display = 'none';
        }
        // 平滑滚动到详情开始位置
        setTimeout(() => {
            detailsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    } else {
        // 关闭详情
        detailsElement.style.display = 'none';
        if (topButton) {
            topButton.style.display = 'flex';
        }
        // 平滑滚动回到项目卡片顶部（不滚动到页面最下方）
        setTimeout(() => {
            const projectTop = projectElement.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ 
                top: projectTop - 80, 
                behavior: 'smooth' 
            });
        }, 50);
    }
}

// Toggle design details
function toggleDesignDetails(designId) {
    const designElement = document.getElementById(designId);
    const detailsElement = document.getElementById(designId.replace('design-', 'details-'));
    const topButton = designElement.querySelector('.btn-view-design-details');
    
    if (detailsElement.style.display === 'none' || !detailsElement.style.display) {
        // 展开详情
        detailsElement.style.display = 'block';
        if (topButton) {
            topButton.style.display = 'none';
        }
        // 平滑滚动到详情开始位置
        setTimeout(() => {
            detailsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    } else {
        // 关闭详情
        detailsElement.style.display = 'none';
        if (topButton) {
            topButton.style.display = 'flex';
        }
        // 平滑滚动回到设计项目顶部
        setTimeout(() => {
            const designTop = designElement.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ 
                top: designTop - 80, 
                behavior: 'smooth' 
            });
        }, 50);
    }
}
