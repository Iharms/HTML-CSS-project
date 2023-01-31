
    document.querySelectorAll('.catalog-accordion-btn').forEach(function(tabsBtn){
      tabsBtn.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.catalog-accordion-btn').forEach(function(btn){
      btn.classList.remove('catalog-accordion-btn--active')});
      e.currentTarget.classList.add('catalog-accordion-btn--active');
      document.querySelectorAll('.catalog-left-content').forEach(function(tabsBtn){
        tabsBtn.classList.remove('catalog-left-content--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog-left-content--active');
        });
        });

